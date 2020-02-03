import React from 'react';
import {
	Button
} from 'reactstrap';
import { WEEKDAY_COLOR } from '../utils/colors.js'

class SaveAsImageButton extends React.Component {
	
  render() {
		return (
			<Button onClick={this.props.saveAsImage} size="sm" style={{ 
					margin: 3,
					borderTopWidth: 0,
					borderLeftWidth: 0,
					borderRightWidth: 0,
					borderBottomWidth: 1,
					borderRadius: 0,
					borderColor: WEEKDAY_COLOR,
					color: WEEKDAY_COLOR,
				}}>
				이미지로 저장하기
			</Button>
		);
  }
}

export default SaveAsImageButton;