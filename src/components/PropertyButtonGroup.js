import React from 'react';
import PropertyButton from './PropertyButton.js'
import '../css/PropertyButtonGroup.css';
import {
} from 'reactstrap';

class PropertyButtonGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			propertyGroup: this.props.propertyGroup
		};
	}
	
  render() {
		return (
			<div className='container' noGutters>
				{
					this.state.propertyGroup.map(({ property, color }, id) => (
						<PropertyButton
							key={id}
							className='button'
							property={property}
							color={color}
							onClick={() => this.props.onClickPropertyButton(id)}
						/>
					))
				}
			</div>
		);
  }
}

export default PropertyButtonGroup;
