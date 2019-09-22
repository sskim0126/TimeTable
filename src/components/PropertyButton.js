import React from 'react';
import '../css/PropertyButton.css';
import {
	Button,
} from 'reactstrap';

class PropertyButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			property: this.props.property,
			color: this.props.color
		};
	}
	
	
  render() {
		return (
			<Button 
				onClick={this.props.onClick} 
				color={this.state.color} 
				outline
				style={{ margin: '3%', borderColor: this.state.color, color: this.state.color, backgroundColor: 'white' }}
			>
				{this.state.property}
			</Button>
		);
  }
}

export default PropertyButton;
