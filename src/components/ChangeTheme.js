import React, { Component } from 'react';
import { ThemeContext } from '../../wrap-root-element';

class ChangeTheme extends Component {
	static contextType = ThemeContext;
	handleClick = () => {
		this.context.handleChange('hsl(356, 100%, 60%)')
	}
	render() {
		return (
			<button onClick={this.handleClick}>Change Theme</button>
		);
	}
}

export default ChangeTheme;