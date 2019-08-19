import React from 'react'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: "600px",
          padding: "1rem 3rem",
        }}
      >
        {children}
      </div>
    )
  }
}

export default Layout
