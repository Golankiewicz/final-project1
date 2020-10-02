import React, { Component } from 'react';
import './App.css';

class Table extends Component {
	state = {
		x: 300,
		y: 0,
	};

	render() {
		let rows = [];
		for (let i = 1; i <= 5; i++) {
			rows.push(<TableRow key={i} rowNumber={i} />);
		}

		return (
			<>
				<div
					className='table_board'
					style={{
						marginLeft: this.state.x + 'px',
						marginTop: this.state.y + 'px',
					}}
				>
					{rows}
				</div>
			</>
		);
	}
}

class TableRow extends Component {
	state = {
		rowNumber: this.props.rowNumber,
	};
	render() {
		let row = [];
		for (let j = 1; j <= 7; j++) {
			row.push(
				<TableCell key={j} cellNumber={j} rowNumber={this.state.rowNumber} />
			);
		}
		return <div className='table_row'>{row}</div>;
	}
}

class TableCell extends Component {
	state = {
		cellNumber: this.props.cellNumber,
		rowNumber: this.props.rowNumber,
		idNumber: (this.props.rowNumber - 1) * 7 + this.props.cellNumber,
	};

	render() {
		if (this.state.idNumber === 17) {
			return <div className='table_cell_battery'></div>;
		} else if (this.state.idNumber === 19) {
			return <div className='table_cell_bulb'></div>;
		} else if (this.state.idNumber === 25) {
			return <div className='table_cell_switch'></div>;
		} else if (this.state.idNumber === 11) {
			return <div className='table_cell_wire'></div>;
		} else if (this.state.idNumber === 26) {
			return <div className='table_cell_wire_angled'></div>;
		} else if (this.state.idNumber === 24) {
			return (
				<div
					className='table_cell_wire_angled'
					style={{ transform: `rotate(90deg)` }}
				></div>
			);
		} else if (this.state.idNumber === 10) {
			return (
				<div
					className='table_cell_wire_angled'
					style={{ transform: `rotate(180deg)` }}
				></div>
			);
		} else if (this.state.idNumber === 12) {
			return (
				<div
					className='table_cell_wire_angled'
					style={{ transform: `rotate(-90deg)` }}
				></div>
			);
		}

		return <div className='table_cell'></div>;
	}
}

export default Table;
