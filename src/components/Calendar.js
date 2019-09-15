import React from 'react';
import {
	Card,
	Row,
	Col,
} from 'reactstrap';
import MyDate from './MyDate.js';
import '../css/Calendar.css'

class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			propertyGroup: this.props.propertyGroup,
			date: this.props.date,
			year: this.props.year,
			month: this.props.month
		};
	}
	
	componentWillMount() {
		let firstDate = new Date(this.state.year, this.state.month - 1, 1);
		let lastDate = new Date(this.state.year, this.state.month, 0);
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
			calendar: calendar
		})
	}
	
  render() {
		return (
			<div>
				<Card className='text-center'>
					<Row>
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
								<Row key={id}>
									{
										week.map((date, id) => {
											return (
												<Col>
													<MyDate key={id} {...date} />
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
