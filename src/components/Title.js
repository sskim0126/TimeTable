import React from 'react';
import '../css/Title.css';
import {
	Navbar,
	NavbarBrand,
} from 'reactstrap';

class Title extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			month: this.props.month,
			year: this.props.year
		}
	}
	
  render() {
		return (
			<div>
        <Navbar color="light" light className='container'>
					<NavbarBrand href="/">{this.state.year}년 {this.state.month}월 근무표</NavbarBrand>
        </Navbar>
			</div>
		);
  }
}

export default Title;
