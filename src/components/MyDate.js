import React from 'react';
import {
	Card,
	CardTitle,
	Button
} from 'reactstrap';

class MyDate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			day: this.props.day,
			weekday: this.props.weekday,
			isSat: this.props.weekday === 6,
			isSun: this.props.weekday === 0
		};
	}
	
  render() {
		return (
			<div>
				<Card body className="text-center">
					<CardTitle style={{ color: this.state.isSun
														 ? 'red'
														 : (this.state.isSat
														 	? 'blue'
														 	: 'black')}}>
						{this.state.day}
					</CardTitle>
				</Card>
			</div>
		);
  }
}

export default MyDate;
