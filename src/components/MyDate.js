import React from 'react';
import {
	Card,
	CardTitle,
	CardText,
} from 'reactstrap';
import windowSize from 'react-window-size';

class MyDate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: (!this.props.isModalMode) 
				? { width: this.props.windowWidth / 7 - 1 }
				: {}
		}
	}
	
  render() {
		if (this.props.day === null) {
			return (
				<Card style={{ border: 0 }}/>
			)
		}
		return (
			<Card body onClick={() => this.props.onClickDate(this.props.id)} style={{ 
					width: this.state.width,
					height: 70, 
					borderRadius: 0,
					border: 0, 
					alignItems: "center",
				}}>
				<CardTitle className={(this.props.isWeekdayOuting) ? "font-weight-bold" : ""}>
					{this.props.day}
				</CardTitle>
				{
					(this.props.property)
					? <CardText style={{ 
								color: this.props.color, 
								backgroundColor: 'white', 
								padding: "4px",
							}}>
							{this.props.property}
						</CardText>
					: <div> </div>
				}
			</Card>
		);
  }
}

export default windowSize(MyDate);
