import React, { Component } from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Code } from './src/components/code'
import { preToCodeBlock } from 'mdx-utils'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}

const defaultTheme = 'hsl(40, 100%, 60%)'

export const ThemeContext = React.createContext(defaultTheme)

class ThemeProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { theme: defaultTheme }
  }
  handleChangeTheme = newTheme => {
    this.setState({ theme: newTheme })
  }
  render() {
    const { children } = this.props
    const { theme } = this.state
    return (
      <ThemeContext.Provider
        value={{ handleChange: this.handleChangeTheme, value: theme }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
)
