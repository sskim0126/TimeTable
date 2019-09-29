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
			text: null,
			color: null,
		};
		this.onClickDate = this.onClickDate.bind(this);
	}
	
	onClickDate() {
		this.setState({
			text: this.props.property,
			color: this.props.color
		})
	}
	
  render() {
		if (this.props.day === null) {
			return (
				<Card style={{ border: 0 }}/>
			)
		}
		return (
			<div>
				<Card body className="text-center" onClick={this.onClickDate} style={{ borderColor: this.state.color, height: 70, margin: 2 }}>
					<CardTitle style={{ color: this.state.isSun
														 ? 'red'
														 : (this.state.isSat
														 	? 'blue'
														 	: 'black')}}>
						{this.props.day}
					</CardTitle>
						<CardText style={{ color: this.state.color }}>{this.state.text}</CardText>
				</Card>
			</div>
		);
  }
}

export default MyDate;
