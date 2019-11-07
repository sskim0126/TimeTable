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
			isColorEmpty: false
		};
		this.toggle = this.toggle.bind(this)
		this.changeCurrentColor = this.changeCurrentColor.bind(this)
		this.addPropertyButton = this.addPropertyButton.bind(this)
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
	
  render() {
		return (
			<div>
				<div className='container' noGutters>
					{
						this.props.propertyGroup.map(({ property, color }, id) => (
							<PropertyButton
								key={id}sd
								className='button'
								property={property}
								color={color}
								onClick={(isActive) => this.props.onClickPropertyButton(isActive, id)}
								isOtherPropertyActive={this.props.currentProperty !== null && this.props.currentProperty !== id}
							/>
						))
					}
					<Button style={{ border: 0 }}onClick={this.toggle}>+</Button>
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
