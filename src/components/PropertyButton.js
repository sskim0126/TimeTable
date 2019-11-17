import React from 'react';
import '../css/PropertyButton.css';
import {
	Button,
	Fade,
	Media
} from 'reactstrap';
import ClickNHold from 'react-click-n-hold';
import delete_button from '../utils/delete_button.png'

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
									borderColor: this.props.color,
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
									borderColor: this.props.color,
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
						right: "-16px",
						top: "-12px",
					}}
				>
					<Button 
						style={{
							border: "none",
							display: "flex",
							justifyContent: "center",
							backgroundColor: "rgba(0, 0, 0, 0)"
						}}
						size="sm"
						onClick={() => {
							if (this.props.isDeleteMode) {
							 this.props.deletePropertyButton(this.props.id)
							}}}>
						<Media src={delete_button} style={{ width: "20px", height: "20px" }} />
					</Button>
				</Fade>
			</div>
		);
  }
}

export default PropertyButton;
