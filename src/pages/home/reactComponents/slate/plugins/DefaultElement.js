import React from 'react'

export default class CodeElement extends React.Component {
  render() {
    return <p {...this.props.attributes}>{this.props.children}</p>
  }
}