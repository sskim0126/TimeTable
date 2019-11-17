import React from 'react';
import {
	Card,
	Row,
	Col,
} from 'reactstrap';
import MyDate from './MyDate.js';
import '../css/Calendar.css'
import { WEEKDAY_COLOR } from '../utils/colors.js'

class Calendar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			calendar: null,
			month: this.props.month,
			year: this.props.year,
			property: null,
			color: null,
		}
		this.makeCalendar = this.makeCalendar.bind(this)
		this.onClickDate = this.onClickDate.bind(this)
		this.addWeekdayOuting = this.addWeekdayOuting.bind(this)
	}
	
	componentWillMount() {
		this.makeCalendar(this.props.year, this.props.month, this.props.weekdayOutingArray)
	}
	
	componentDidUpdate(prevProps) {
		console.log(prevProps)
		if (prevProps.month !== this.props.month || 
				JSON.stringify(prevProps.weekdayOutingArray) !== JSON.stringify(this.props.weekdayOutingArray)) {
			console.log('test')
			this.makeCalendar(this.props.year, this.props.month, this.props.weekdayOutingArray);
		}
	}
	
	makeCalendar(year, month, weekdayOutingArray) {
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
				color: null,
				isWeekdayOuting: false
			})
			col++;
		}
		for (let i = 1; i <= lastDate.getDate(); i++) {
			calendar[row].push({
				day: i,
				weekday: col,
				property: null,
				color: null,
				isWeekdayOuting: false
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
					color: null,
					isWeekdayOuting: false
				})
			}
		} else {
			calendar.pop()
		}
		for (var id in weekdayOutingArray) {
			calendar[weekdayOutingArray[id][0]][weekdayOutingArray[id][1]].isWeekdayOuting = true
		}
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
	
	addWeekdayOuting(id) {
		let tmpCalendar = this.state.calendar
		tmpCalendar[id[0]][id[1]].isWeekdayOuting = !tmpCalendar[id[0]][id[1]].isWeekdayOuting
		
		this.setState({
			calendar: tmpCalendar,
		})
		
		this.props.addWeekdayOuting(id)
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
									<Row key={rid} noGutters style={{ borderBottom: "1px solid", borderBottomColor: WEEKDAY_COLOR }}>
										{
											week.map((date, cid) => {
												return (
													<Col>
														<MyDate 
															key={cid}
															id={[rid, cid]} 
															{...date} 
															onClickDate={(this.props.isModalMode) ? this.addWeekdayOuting : this.onClickDate} />
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
