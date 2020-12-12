// Define a React component to render leaves with bold text.
import React from 'react'

export default class Leaf extends React.Component {
  render() {
    return (
      <span
        {...this.props.attributes}
        style={{ fontWeight: this.props.leaf.bold ? 'bold' : 'normal' }}
      >
        {this.props.children}
      </span>
    )
  }
}