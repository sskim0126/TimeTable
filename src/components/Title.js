import React from 'react';
import MonthChangeButton from './MonthChangeButton.js'
import '../css/Title.css';
import {
	Navbar,
	NavbarBrand,
} from 'reactstrap';

class Title extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	
  render() {
		return (
			<div style={{ flexDirection: 'row', display: 'flex' }}>
				<MonthChangeButton isDescending={true} onClickDescendingButton={this.props.onClickDescendingButton} />
					<Navbar color="light" light className='container'>
						<NavbarBrand href="/">{this.props.year}년 {this.props.month}월 근무표</NavbarBrand>
					</Navbar>
				<MonthChangeButton isDescending={false} onClickAscendingButton={this.props.onClickAscendingButton} />
			</div>
		);
  }
}

export default Title;
