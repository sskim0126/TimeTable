import React from 'react';
import PropertyButton from './PropertyButton.js'
import '../css/PropertyButtonGroup.css';
import {
	Collapse,
	Button,
	InputGroup,
	Input,
	Card,
	CardBody
} from 'reactstrap';
import { GithubPicker } from 'react-color'

class PropertyButtonGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isCollapseOepn: false,
			currentProperty: '',
			currentColor: '',
			isPropertyEmpty: false,
			isColorEmpty: false,
			isDeleteMode: false,
		};
		this.toggle = this.toggle.bind(this)
		this.changeCurrentColor = this.changeCurrentColor.bind(this)
		this.addPropertyButton = this.addPropertyButton.bind(this)
		this.toggleDeleteMode = this.toggleDeleteMode.bind(this)
	}
	
	toggle() {
		this.setState({
			isCollapseOepn: !this.state.isCollapseOepn
		})
	}
	
	changeCurrentColor(color, e) {
		this.setState({
			currentColor: color.hex
		})
	}
	
	addPropertyButton() {
		if (this.state.currentProperty === '' ) {
			this.setState({
				isPropertyEmpty: true
			})
			if (this.state.currentColor === '') {
				this.setState({
					isColorEmpty: true
				})
			}
		}
		else if (this.state.currentColor === '') {
			this.setState({
				isColorEmpty: true
			})
		}
		else {
			this.props.addPropertyButton(this.state.currentProperty, this.state.currentColor)
			this.setState({
				isCollapseOepn: false,
				isColorEmpty: false,
				isPropertyEmpty: false,
				currentProperty: "",
				currentColor: ""
			})
		}
	}
	
	toggleDeleteMode() {
		this.setState({
			isDeleteMode: !this.state.isDeleteMode
		})
	}
	
  render() {
		return (
			<div>
				<div className='container' style={{ marginTop: "2%", marginBottom: "2%", marginLeft: "-1%" }} noGutters>
					{
						this.props.propertyGroup.map(({ property, color }, id) => (
							<PropertyButton
								key={id}
								id={id}
								property={property}
								color={color}
								onClick={(isActive) => this.props.onClickPropertyButton(isActive, id)}
								isOtherPropertyActive={this.props.currentProperty !== null && this.props.currentProperty !== id}
								toggleDeleteMode={this.toggleDeleteMode}
								isDeleteMode={this.state.isDeleteMode}
								deletePropertyButton={this.props.deletePropertyButton}
							/>
						))
					}
					<Button style={{ 
						border: 0,
						margin: "2%",
						width: "50px",
						height: "50px",
						padding: "10px 16px",
						borderRadius: "25px"
						}} onClick={this.toggle}>
						+
					</Button>
				</div>
					<Collapse isOpen={this.state.isCollapseOepn}>
						<Card>
							<CardBody>
								<div style={{ margin: "2%" }}>
									<InputGroup>
										<Input 
											placeholder="종류 (최대 2글자)" 
											maxLength={2} 
											onChange={(e) => this.setState({ currentProperty: e.target.value})}
											style={{ borderColor: this.state.currentColor }}>
										</Input>
									</InputGroup>
									<Collapse isOpen={this.state.isPropertyEmpty} style={{ color: 'red' }}>종류를 입력하세요.</Collapse>
								</div>
								<div style={{ margin: "2%" }}>
									<GithubPicker width='100%' onChange={ this.changeCurrentColor }/>
									<Collapse isOpen={this.state.isColorEmpty} style={{ color: 'red' }}>색상을 선택하세요.</Collapse>
								</div>
								<div style={{ margin: "2%" }}>
									<Button color="primary" outline size="sm" block onClick={this.addPropertyButton}>Add</Button>
								</div>
							</CardBody>
						</Card>
					</Collapse>
			</div>
		);
  }
}

export default PropertyButtonGroup;
