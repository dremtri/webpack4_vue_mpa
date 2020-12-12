// Define a React component renderer for our code blocks.
import React from 'react'

export default class CodeElement extends React.Component {
  render() {
    return (
      <pre {...this.props.attributes}>
        <code>{this.props.children}</code>
      </pre>
    )
  }
}