import React from 'react';
import {
	Card,
	Row,
	Col,
} from 'reactstrap';
import MyDate from './MyDate.js';
import '../css/Calendar.css'
import { WEEKDAY_COLOR, DATE_COLOR } from '../utils/colors.js'

class Calendar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			calendar: null,
			month: this.props.month,
			year: this.props.year,
			property: null,
			color: null
		}
		this.makeCalendar = this.makeCalendar.bind(this)
		this.onClickDate = this.onClickDate.bind(this)
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
				weekday: null,
				property: null,
				color: null
			})
			col++;
		}
		for (let i = 1; i <= lastDate.getDate(); i++) {
			calendar[row].push({
				day: i,
				weekday: col,
				property: null,
				color: null
			})
			col++;
			if (col === 7) {
				calendar.push([]);
				row++;
				col = 0;
			}
		}
		if (col !== 0) {
			for (let i = 0; i < 7 - col; i++) {
				calendar[row].push({
					day: null,
					weekday: null,
					property: null,
					color: null
				})
			}
		} else {
			calendar.pop()
		}
		console.log(calendar)
		this.setState({
			firstDate: firstDate,
			lastDate: lastDate,
			firstWeekday: firstWeekday,
			calendar: calendar,
		})
	}
	
	onClickDate(id) {
		let tmpCalendar = this.state.calendar
		tmpCalendar[id[0]][id[1]].property = this.props.property
		tmpCalendar[id[0]][id[1]].color = this.props.color
		this.setState({
			calendar: tmpCalendar
		})
	}
	
  render() {
		return (
			<div>
				<Card className='text-center' style={{ border: 0 }}>
					<Row noGutters style={{ 
							backgroundColor: WEEKDAY_COLOR, 
							color: "white",
							height: 40,
							alignItems: "center"
						}}>
						<Col>일</Col>
						<Col>월</Col>
						<Col>화</Col>
						<Col>수</Col>
						<Col>목</Col>
						<Col>금</Col>
						<Col>토</Col>
					</Row>
					<Card style={{ border: 0 }}>
						{
							this.state.calendar.map((week, rid) => {
								return (
									<Row key={rid} noGutters style={{ borderBottom: "1px solid", borderColor: DATE_COLOR }}>
										{
											week.map((date, cid) => {
												return (
													<Col>
														<MyDate 
															key={cid}
															id={[rid, cid]} 
															{...date} 
															onClickDate={this.onClickDate} />
													</Col>
												)
											})
										}
									</Row>
								)
							})
						}
					</Card>
				</Card>
			</div>
		);
  }
}

export default Calendar;
