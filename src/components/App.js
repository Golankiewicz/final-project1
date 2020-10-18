import React, { Component } from 'react';
import './App.css';

import Bulb from './Bulb';
import Battery from './Battery';
import Table from './Table';
import Wire from './Wire';
import WireAngled from './WireAngled';
import Switch from './Switch';

class App extends Component {
	state = {
		circuitClosed: false, 
	};

	handleCircuit = (e) => {
		this.setState({
			circuitClosed: !this.state.circuitClosed,
		});
	};

	handleChangeOfSet = ()=>{
		
	}

	render() {
		//console.log(this.state.circuitClosed);
		return (
			<>
				<Bulb circuitClosed={this.state.circuitClosed} />
				<Battery />
				<Wire />
				<WireAngled />
				<WireAngled />
				<WireAngled />
				<WireAngled />
				<Switch circuitClosed={this.state.circuitClosed} />
				<Table />
				<button
					onClick={this.handleCircuit}
					style={{ marginLeft: '600px', marginTop: '45px', fontSize: '1rem' }}
				>
					{this.state.circuitClosed ? 'WYŁĄCZ OBWÓD' : 'WŁĄCZ OBWÓD'}
				</button>
				<br />
				<button
					onClick={() => window.location.reload(false)}
					style={{ marginLeft: '620px', marginTop: '15px', fontSize: '1rem' }}
				>
					RESETUJ
				</button>
			</>
		);
	}
}

export default App;
