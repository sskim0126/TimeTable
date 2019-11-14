import React from 'react';
import '../css/PropertyButton.css';
import {
	Button,
	Fade,
} from 'reactstrap';
import ClickNHold from 'react-click-n-hold';

class PropertyButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
		this.switchActivation = this.switchActivation.bind(this)
		this.clickNHold = this.clickNHold.bind(this)
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
	
	clickNHold(e, enough) {
		if (enough) {
			this.props.toggleDeleteMode()
		}
	}
	
	test() {
		console.log('test')
	}
	
  render() {
		return (
			<div style={{ margin: "2%", width: "50px", height: "50px", position: "relative" }}>
				<ClickNHold
					time={1}
					onClickNHold={this.clickNHold}
				>
					{
						(this.state.isActive)
						?	<Button 
								onClick={this.switchActivation} 
								style={{
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
						: <Button 
								onClick={this.switchActivation} 
								color={this.props.color}
								outline
								style={{
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
					}
				</ClickNHold>
				<Fade
					in={this.props.isDeleteMode}
					style={{
						position: "absolute",
						right: "-17px",
						top: "-17px",
					}}
				>
					<Button 
						style={{ 
							color: 'red',
							border: "none",
							width: "10px",
							heigth: "10px",
							display: "flex",
							justifyContent: "center",
							backgroundColor: "rgba(0, 0, 0, 0)"
						}} 
						onClick={() => {
							if (this.props.isDeleteMode) {
							 this.props.deletePropertyButton(this.props.id)
							}}}>
						x
					</Button>
				</Fade>
			</div>
		);
  }
}

export default PropertyButton;
