import React from 'react';
import './App.css';
import Title from './components/Title';
import PropertyButtonGroup from './components/PropertyButtonGroup';
import Calendar from './components/Calendar';

const initialPropertyGroup = [
	{ property: '주', color: '#79c9d3'},
	{ property: '야', color: '#491544'},
	{ property: '비', color: '#ff9dac'},
	{ property: '짱', color: '#08415c'},
	{ property: '휴', color: '#7de86c'},
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
			currentProperty: null,
			propertyGroup: initialPropertyGroup,
			isMonthChanged: false
		}
		this.onClickPropertyButton = this.onClickPropertyButton.bind(this)
		this.onClickDescendingButton = this.onClickDescendingButton.bind(this)
		this.onClickAscendingButton = this.onClickAscendingButton.bind(this)
		this.addPropertyButton = this.addPropertyButton.bind(this)
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
			year: this.state.month === 1 ? this.state.year - 1 : this.state.year,
			isMonthChanged: true
		})
	}
	
	onClickAscendingButton() {
		this.setState({
			month: this.state.month === 12 ? 1 : this.state.month + 1,
			year: this.state.month === 12 ? this.state.year + 1 : this.state.year,
			isMonthChanged: true
		})
	}
	
	addPropertyButton(property, color) {
		let newPropertyGroup = this.state.propertyGroup
		newPropertyGroup.push({
			property: property,
			color: color
		})
		this.setState({
			propertyGroup: newPropertyGroup
		})
	}
	
	setIsMonthChangedFalse() {
		this.setState({
			isMonthChanged: false
		})
	}
	
	render() {
		return (
			<div>
				<Title month={this.state.month} year={this.state.year} 
					onClickDescendingButton={this.onClickDescendingButton}
					onClickAscendingButton={this.onClickAscendingButton} />
				<PropertyButtonGroup currentProperty={this.state.currentProperty} propertyGroup={this.state.propertyGroup} onClickPropertyButton={this.onClickPropertyButton} addPropertyButton={this.addPropertyButton}/>
				{
					this.state.currentProperty !== null 
						? <Calendar
								property={this.state.propertyGroup[this.state.currentProperty].property}
								color={this.state.propertyGroup[this.state.currentProperty].color}
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
