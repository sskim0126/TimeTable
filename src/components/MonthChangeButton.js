import React from 'react';
import {
	Button
} from 'reactstrap';
import { TITLE_COLOR } from '../utils/colors.js'

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
						? <Button onClick={this.props.onClickDescendingButton} style={{ border: 0, backgroundColor: TITLE_COLOR, color: "white" }}>{'<'}</Button>
						: <Button onClick={this.props.onClickAscendingButton} style={{ border: 0, backgroundColor: TITLE_COLOR, color: "white" }}>{'>'}</Button>
				}
			</div>
		);
  }
}

export default MonthChangeButton;
