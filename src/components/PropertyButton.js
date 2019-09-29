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
			color: this.props.color,
			isActive: false
		};
		this.switchActivation = this.switchActivation.bind(this)
	}
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.isOtherPropertyActive) {
			this.setState({
				isActive: false
			})
		}
	}
	
	switchActivation() {
		let tmpIsActive = this.state.isActive
		this.setState({
			isActive: !tmpIsActive
		})
		this.props.onClick(!tmpIsActive)
	}
	
  render() {
		if (this.state.isActive) {
			return (
				<Button 
					onClick={this.switchActivation} 
					style={{
						margin: '3%',
						borderColor: this.state.color, 
						color: 'white',
						backgroundColor: this.state.color 
					}}
				>
					{this.state.property}
				</Button>
			)
		}
		return (
			<Button 
				onClick={this.switchActivation} 
				color={this.state.color}
				outline
				style={{ 
					margin: '3%',
					borderColor: this.state.color, 
					color: this.state.color,
					backgroundColor: 'white' 
				}}
			>
				{this.state.property}
			</Button>
		);
  }
}

export default PropertyButton;
