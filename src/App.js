import React from 'react';
import './App.css';
import Title from './components/Title';
import PropertyButtonGroup from './components/PropertyButtonGroup';
import Calendar from './components/Calendar';

const propertyGroup = [
	'주',
	'야',
	'비',
	'짱',
	'휴'
];

const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			month: month,
			year: year
		}
	}
	
	render() {
		return (
			<div>
				<Title month={month} year={year}/>
				<PropertyButtonGroup propertyGroup={propertyGroup} />
				<Calendar propertyGroup={propertyGroup} year={year} month={month} />
			</div>
		);
	}
}

export default App;
