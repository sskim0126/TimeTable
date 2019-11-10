import React from 'react';
import {
	Card,
	CardTitle,
	CardText,
} from 'reactstrap';

class MyDate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	
  render() {
		if (this.props.day === null) {
			return (
				<Card style={{ border: 0 }}/>
			)
		}
		return (
			<div>
				<Card body onClick={() => this.props.onClickDate(this.props.id)} style={{ 
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
			</div>
		);
  }
}

export default MyDate;
