import React, { Fragment } from 'react'

const StickyHeader = ({ children }) => {
  return (
    <div>
      <div style={{ visibility: 'hidden' }}>{children}</div>
      <div style={{ position: "fixed", top: 0, width: "100vw" }}>{children}</div>
    </div>
  )
}

export default StickyHeader
