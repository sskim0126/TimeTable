import React from 'react';
import PropertyButton from './PropertyButton.js'
import '../css/PropertyButtonGroup.css';
import {
	Row,
	Container
} from 'reactstrap';

class PropertyButtonGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			propertyGroup: this.props.propertyGroup
		};
		this.onClickPropertyButton = this.onClickPropertyButton.bind(this)
	}
	
	onClickPropertyButton(id) {
		console.log(id)
	}
	
  render() {
		return (
			<Container>
				<Row className='container'>
					{
						this.state.propertyGroup.map((property, id) => (
							<PropertyButton
								key={id}
								property={property}
								onClick={() => {
									this.onClickPropertyButton(id);
								}}
							/>
						))
					}
				</Row>
			</Container>
		);
  }
}

export default PropertyButtonGroup;
