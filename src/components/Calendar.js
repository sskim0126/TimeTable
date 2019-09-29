import React from 'react';
import {
	Card,
	Row,
	Col,
} from 'reactstrap';
import MyDate from './MyDate.js';
import '../css/Calendar.css'

class Calendar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			calendar: null,
			month: this.props.month,
			year: this.props.year
		}
		this.makeCalendar = this.makeCalendar.bind(this)
	}
	
	componentWillMount() {
		this.makeCalendar(this.props.year, this.props.month)
	}
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.month !== this.props.month) {
			this.makeCalendar(nextProps.year, nextProps.month);
		}
	}
	
	makeCalendar(year, month) {
		let firstDate = new Date(year, month - 1, 1);
		let lastDate = new Date(year, month, 0);
		let firstWeekday = firstDate.getDay();
		let calendar = [[]];
		let row = 0;
		let col = 0;
		for (let i = 0; i < firstWeekday; i++) {
			calendar[row].push({
				day: null,
				weekday: null
			})
			col++;
		}
		for (let i = 1; i <= lastDate.getDate(); i++) {
			calendar[row].push({
				day: i,
				weekday: col
			})
			col++;
			if (col === 7) {
				calendar.push([]);
				row++;
				col = 0;
			}
		}
		for (let i = 0; i < 7 - col; i++) {
			calendar[row].push({
				day: null,
				weekday: null
			})
		}
		this.setState({
			firstDate: firstDate,
			lastDate: lastDate,
			firstWeekday: firstWeekday,
			calendar: calendar,
		})
	}
	
  render() {
		return (
			<div>
				<Card className='text-center'>
					<Row noGutters>
						<Col style={{color: 'red'}}>SUN</Col>
						<Col>MON</Col>
						<Col>TUE</Col>
						<Col>WED</Col>
						<Col>THU</Col>
						<Col>FRI</Col>
						<Col style={{color: 'blue'}}>SAT</Col>
					</Row>
				</Card>
				<Card>
					{
						this.state.calendar.map((week, id) => {
							return (
								<Row key={id} noGutters>
									{
										week.map((date, id) => {
											return (
												<Col>
													<MyDate key={id} property={this.props.property} color={this.props.color} {...date} />
												</Col>
											)
										})
									}
								</Row>
							)
						})
					}
				</Card>
			</div>
		);
  }
}

export default Calendar;
