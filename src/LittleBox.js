import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class LittleBox extends Component {
	render() {
		const { color } = this.props;
		const bBStyle = {
			width: '75px',
			height: '75px',
			backgroundColor: color
		};

		return (
			<Draggable>
				<div className="col-sm-6" style={bBStyle} />
			</Draggable>
		);
	}
}
