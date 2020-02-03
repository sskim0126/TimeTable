import React from 'react';
import { Button } from 'reactstrap';
import './App.css';
import Title from './components/Title';
import PropertyButtonGroup from './components/PropertyButtonGroup';
import Calendar from './components/Calendar';
import WeekdayOuting from './components/WeekdayOuting'
import SaveAsImageButton from './components/SaveAsImageButton'

import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

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
			weekdayOutingArray: [],
			numOfChangeWeekdayOuting: 0
		}
		this.onClickPropertyButton = this.onClickPropertyButton.bind(this)
		this.onClickDescendingButton = this.onClickDescendingButton.bind(this)
		this.onClickAscendingButton = this.onClickAscendingButton.bind(this)
		this.addPropertyButton = this.addPropertyButton.bind(this)
		this.deletePropertyButton = this.deletePropertyButton.bind(this)
		this.finishAddWeekdayOuting = this.finishAddWeekdayOuting.bind(this)
		this.saveAsImage = this.saveAsImage.bind(this)
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
		})
	}
	
	onClickAscendingButton() {
		this.setState({
			month: this.state.month === 12 ? 1 : this.state.month + 1,
			year: this.state.month === 12 ? this.state.year + 1 : this.state.year,
		})
	}
	
	addPropertyButton(property, color) {
		let tmpPropertyGroup = this.state.propertyGroup
		tmpPropertyGroup.push({
			property: property,
			color: color
		})
		this.setState({
			propertyGroup: tmpPropertyGroup
		})
	}
	
	deletePropertyButton(id) {
		let tmpPropertyGroup = this.state.propertyGroup
		if (id > -1) {
			tmpPropertyGroup.splice(id, 1)
		}
		this.setState({
			propertyGroup: tmpPropertyGroup
		})
	}
	
	finishAddWeekdayOuting(weekdayOutingArray) {
		this.setState({
			weekdayOutingArray: weekdayOutingArray,
			numOfChangeWeekdayOuting: this.state.numOfChangeWeekdayOuting + 1
		})
	}
	
	saveAsImage() {
		var node = document.getElementById("body");
		domtoimage.toBlob(node)
			.then(function (blob) {
					window.saveAs(blob, 'timetable.png');
			})
			.catch(function (error) {
        console.error(error);
    	});
	}
	
	render() {
		return (
			<div id="body">
				<Title month={this.state.month} year={this.state.year} 
					onClickDescendingButton={this.onClickDescendingButton}
					onClickAscendingButton={this.onClickAscendingButton} />
				<PropertyButtonGroup currentProperty={this.state.currentProperty} propertyGroup={this.state.propertyGroup} onClickPropertyButton={this.onClickPropertyButton} addPropertyButton={this.addPropertyButton} deletePropertyButton={this.deletePropertyButton}/>
				<Calendar
					property={(this.state.currentProperty !== null)
										? this.state.propertyGroup[this.state.currentProperty].property
										: null}
					color={(this.state.currentProperty !== null)
										? this.state.propertyGroup[this.state.currentProperty].color
										: null}
					year={this.state.year} 
					month={this.state.month} 
					isModalMode={false} 
					weekdayOutingArray={this.state.weekdayOutingArray}
					numOfChangeWeekdayOuting={this.state.numOfChangeWeekdayOuting} />
				<WeekdayOuting year={this.state.year} month={this.state.month} finishAddWeekdayOuting={this.finishAddWeekdayOuting} weekdayOutingArray={this.state.weekdayOutingArray} />
				<SaveAsImageButton saveAsImage={this.saveAsImage} />
			</div>
		);
	}
}

export default App;
