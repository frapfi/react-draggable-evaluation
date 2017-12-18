import React, { Component } from 'react';
import DropBox from './DropBox';
import DraggableZone from './DraggableZone';
import LittleBox from './LittleBox';
import './App.css';

import Draggable from 'react-draggable';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeDrags: 0,
			deltaPosition: {
				x: 0,
				y: 0
			},
			controlledPosition: {
				x: -400,
				y: 200
			}
		};
	}

	handleDrag(e, ui) {
		const { x, y } = this.state.deltaPosition;
		this.setState({
			deltaPosition: {
				x: x + ui.deltaX,
				y: y + ui.deltaY
			}
		});
	}

	onStart() {
		this.setState({ activeDrags: ++this.state.activeDrags });
	}

	onStop() {
		this.setState({ activeDrags: --this.state.activeDrags });
	}

	// For controlled component
	adjustXPos(e) {
		e.preventDefault();
		e.stopPropagation();
		const { x, y } = this.state.controlledPosition;
		this.setState({ controlledPosition: { x: x - 10, y } });
	}

	adjustYPos(e) {
		e.preventDefault();
		e.stopPropagation();
		const { controlledPosition } = this.state;
		const { x, y } = controlledPosition;
		this.setState({ controlledPosition: { x, y: y - 10 } });
	}

	onControlledDrag(e, position) {
		const { x, y } = position;
		this.setState({ controlledPosition: { x, y } });
	}

	onControlledDragStop(e, position) {
		this.onControlledDrag(e, position);
		this.onStop();
	}

	render() {
		//const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
		const { deltaPosition, controlledPosition } = this.state;

		return (
			<div className="row">
				<DropBox />
				<DraggableZone>
					<LittleBox color="black" />
					<LittleBox color="orange" />
					<LittleBox color="blue" />
				</DraggableZone>
			</div>
		);
	}
}

export default App;
