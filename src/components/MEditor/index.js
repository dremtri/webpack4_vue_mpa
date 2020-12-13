/**
 * @file 使用入口
 */
import React from 'react'
import { Editable, withReact, Slate } from 'slate-react'
import {
  Editor,
  Transforms,
  createEditor,
  Node,
  Element
} from 'slate'
import { withHistory } from 'slate-history'
import { initialValue } from './utils'

export default class MEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value || initialValue,
      editor: withHistory(withReact(createEditor()))
    }
  }
  handleChange = (value) => {
    const { onChange } = this.props
    this.setState({value})
    onChange && onChange(value)
  }
  render() {
    const {
      placeholder,
      autoFocus,
      readOnly,
      autoCorrect
    } = this.props
    const { editor, value } = this.state
    return (
      <Slate editor={editor} value={value} onChange={this.handleChange}>
        <Editable
          placeholder={placeholder}
          autoFocus={autoFocus}
          readOnly={readOnly}
          autoCorrect={autoCorrect}
        />
      </Slate>
    )
  }
}