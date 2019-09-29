import React from 'react';
import {
	Button
} from 'reactstrap';

class MonthChangeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDescending: this.props.isDescending
		};
	}
	
  render() {
		return (
			<div style={{ marginTop: '2%' }}>
				{
					this.state.isDescending
						? <Button onClick={this.props.onClickDescendingButton} style={{ border: 0 }}>{'<'}</Button>
						: <Button onClick={this.props.onClickAscendingButton} style={{ border: 0 }}>{'>'}</Button>
				}
			</div>
		);
  }
}

export default MonthChangeButton;
