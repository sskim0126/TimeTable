import React from 'react';
import {
	Card,
	CardTitle,
	CardText
} from 'reactstrap';

class MyDate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSat: this.props.weekday === 6,
			isSun: this.props.weekday === 0,
		};
	}
	
  render() {
		if (this.props.day === null) {
			return (
				<Card style={{ border: 0 }}/>
			)
		}
		return (
			<div>
				<Card body className="text-center" onClick={() => this.props.onClickDate(this.props.id)} style={{ borderColor: this.props.color, height: 70, margin: 2 }}>
					<CardTitle style={{ color: this.state.isSun
														 ? 'red'
														 : (this.state.isSat
														 	? 'blue'
														 	: 'black')}}>
						{this.props.day}
					</CardTitle>
						<CardText style={{ color: this.props.color }}>{this.props.property}</CardText>
				</Card>
			</div>
		);
  }
}

export default MyDate;
