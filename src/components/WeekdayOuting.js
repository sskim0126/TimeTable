import React from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap';
import Calendar from './Calendar'
import { WEEKDAY_COLOR } from '../utils/colors.js'

class WeekdayOuting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpened: false,
			weekdayOutingArray: []
		};
		this.toggle = this.toggle.bind(this)
		this.addWeekdayOuting = this.addWeekdayOuting.bind(this)
		this.finishAddWeekdayOuting = this.finishAddWeekdayOuting.bind(this)
	}
	
	toggle() {
		this.setState({
			isModalOpened: !this.state.isModalOpened
		})
	}
	
	addWeekdayOuting(id) {
		let tmpWeekdayOutingArray = this.state.weekdayOutingArray
		for (var idx in tmpWeekdayOutingArray) {
			if (tmpWeekdayOutingArray[idx][0] === id[0] && tmpWeekdayOutingArray[idx][1] === id[1]) {
				tmpWeekdayOutingArray.splice(idx, 1)
				this.setState({
					weekdayOutingArray: tmpWeekdayOutingArray
				})
				return;
			}
		}
		tmpWeekdayOutingArray.push(id)
		this.setState({
			weekdayOutingArray: tmpWeekdayOutingArray
		})
	}
	
	finishAddWeekdayOuting() {
		this.toggle()
		this.props.finishAddWeekdayOuting(this.state.weekdayOutingArray)
	}
	
	
  render() {
		return (
			<div>
				<Button size="sm" style={{ 
						margin: 3,
						borderTopWidth: 0,
						borderLeftWidth: 0,
						borderRightWidth: 0,
						borderBottomWidth: 1,
						borderRadius: 0,
						borderColor: WEEKDAY_COLOR,
						color: WEEKDAY_COLOR,
						float: "right"
					}} onClick={this.toggle}>
					평일외출 추가하기
				</Button>
				<Modal isOpen={this.state.isModalOpened} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>평일외출 추가하기</ModalHeader>
					<ModalBody>
						<Calendar 
							property={null} 
							color={null} 
							year={this.props.year}
							month={this.props.month} 
							isModalMode={true}
							weekdayOutingArray={this.props.weekdayOutingArray}
							addWeekdayOuting={this.addWeekdayOuting} />
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.finishAddWeekdayOuting}>추가하기</Button>{' '}
					</ModalFooter>
				</Modal>
			</div>
		);
  }
}

export default WeekdayOuting;
