import React from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap';
import Calendar from './Calendar'

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
				<Button size="sm" style={{ margin: 5 }} onClick={this.toggle}>평일외출 추가하기</Button>
				<Modal isOpen={this.state.isModalOpened} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>평일외출 추가하기</ModalHeader>
					<ModalBody>
						<Calendar 
							property={null} 
							color={null} 
							year={this.props.year}
							month={this.props.month} 
							isModalMode={true} 
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
