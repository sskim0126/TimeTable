import React from 'react';
import '../css/PropertyButton.css';
import {
	Button,
} from 'reactstrap';

class PropertyButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
						margin: "2%",
						width: "50px",
						height: "50px",
						borderRadius: "25px",
						color: 'white',
						backgroundColor: this.props.color,
						display: 'flex',
						justifyContent: 'center'
					}}
					className="text-center"
				>
					{this.props.property}
				</Button>
			)
		}
		return (
			<Button 
				onClick={this.switchActivation} 
				color={this.props.color}
				outline
				style={{
					margin: "2%",
					width: "50px",
					height: "50px",
					borderRadius: "25px",
					color: this.props.color,
					backgroundColor: 'white',
					display: 'flex',
					justifyContent: 'center'
				}}
				className="text-center"
			>
				{this.props.property}
			</Button>
		);
  }
}

export default PropertyButton;
