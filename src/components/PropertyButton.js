import React from 'react';
import '../css/PropertyButton.css';
import {
	Button,
	Col
} from 'reactstrap';

class PropertyButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			property: this.props.property,
			color: null
		};
	}
	
	componentWillMount() {
		let color = null
		switch(this.state.property) {
			case '주':
				color = 'primary';
				break;
			case '야':
				color = 'warning';
				break;
			case '비':
				color = 'info';
				break;
			case '짱':
				color = 'danger';
				break;
			case '휴':
				color = 'success';
				break;
			default:
				break;
		}
		this.setState({
			color: color
		})
	}
	
	
  render() {
		return (
			<Col>
				<Button onClick={this.props.onClick} color={this.state.color} outline>{this.state.property}</Button>
			</Col>
		);
  }
}

export default PropertyButton;
