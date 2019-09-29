import React from 'react';
import './App.css';
import Title from './components/Title';
import PropertyButtonGroup from './components/PropertyButtonGroup';
import Calendar from './components/Calendar';

const propertyGroup = [
	{ property: '주', color: 'blue'},
	{ property: '야', color: 'orange'},
	{ property: '비', color: 'skyblue'},
	{ property: '짱', color: 'red'},
	{ property: '휴', color: 'green'},
];

const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			month: month,
			year: year,
			currentProperty: null
		}
		this.onClickPropertyButton = this.onClickPropertyButton.bind(this)
		this.onClickDescendingButton = this.onClickDescendingButton.bind(this)
		this.onClickAscendingButton = this.onClickAscendingButton.bind(this)
	}
	
	onClickPropertyButton(isActive, id) {
		if (isActive) {
			this.setState({
				currentProperty: id
			})
		}
		else {
			this.setState({
				currentProperty: null
			})
		}
	}
	
	onClickDescendingButton() {
		this.setState({
			month: this.state.month === 1 ? 12 : this.state.month - 1,
			year: this.state.month === 1 ? this.state.year - 1 : this.state.year
		})
	}
	
	onClickAscendingButton() {
		this.setState({
			month: this.state.month === 12 ? 1 : this.state.month + 1,
			year: this.state.month === 12 ? this.state.year + 1 : this.state.year
		})
	}
	
	render() {
		return (
			<div>
				<Title month={this.state.month} year={this.state.year} 
					onClickDescendingButton={this.onClickDescendingButton}
					onClickAscendingButton={this.onClickAscendingButton} />
				<PropertyButtonGroup currentProperty={this.state.currentProperty} propertyGroup={propertyGroup} onClickPropertyButton={this.onClickPropertyButton} />
				{
					this.state.currentProperty !== null 
						? <Calendar
								property={propertyGroup[this.state.currentProperty].property}
								color={propertyGroup[this.state.currentProperty].color}
								year={this.state.year} 
								month={this.state.month} />
						: <Calendar 
								property={null} color={null}
								year={this.state.year} 
								month={this.state.month} />
				}
			</div>
		);
	}
}

export default App;
