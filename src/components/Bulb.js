import React, { Component } from 'react';
import './App.css';

class Bulb extends Component {
	state = {
		x: 100,
		y: 0,
		rotation: 0,
		isActive: false,
		idCell: null,
		zIndex: 0,
	};

	onMouseDown = (e) => {
		this.setState({
			isActive: true,
			zIndex: 100,
		});
	};

	onMouseUp = (e) => {
		this.setState({
			isActive: false,
			zIndex: 0,

			x: Math.round(this.state.x / 102) * 102 - 5,
			y: Math.round(this.state.y / 102) * 102 + 1,
			//idCell: Math.round((this.state.x-199)/102)+Math.round((this.state.y-1)/102)*7
		});
	};

	onMouseMove = (e) => {
		if (this.state.isActive) {
			this.setState({
				x: e.pageX - 50,
				y: e.pageY - 50,
			});
		}
	};

	onDoubleClick = (e) => {
		this.setState({
			rotation: this.state.rotation + 90,
		});
	};

	render() {
		if (this.props.circuitClosed) {
			return (
				<>
					<div
						className='divClass1a'
						style={{
							width: '100px',
							height: '100px',
							border: '1px solid gray',
							marginLeft: this.state.x + 'px',
							marginTop: this.state.y + 'px',
							transform: `rotate(${this.state.rotation}deg)`,
							zIndex: this.state.zIndex,
						}}
					>
						<p style={{ marginTop: 80 + 'px' }}>żarówka</p>
					</div>
				</>
			);
		}
		console.log(this.state.x, this.state.y, this.state.rotation)

		return (
			<>
				<div
					onMouseDown={this.onMouseDown}
					onMouseMove={this.onMouseMove}
					onMouseUp={this.onMouseUp}
					onDoubleClick={this.onDoubleClick}
					className='divClass1'
					style={{
						marginLeft: this.state.x + 'px',
						marginTop: this.state.y + 'px',
						transform: `rotate(${this.state.rotation}deg)`,
						zIndex: this.state.zIndex,
					}}
				>
					<p style={{ marginTop: 80 + 'px' }}>żarówka</p>
				</div>
			</>
		);
	}
}

export default Bulb;
