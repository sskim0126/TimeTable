import React from 'react';
import '../css/Title.css';
import {
	Collapse,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler
} from 'reactstrap';

class Title extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
		return (
			<div>
        <Navbar color="light" light className="container">
					<NavbarBrand href="/">근무표</NavbarBrand>
        </Navbar>
			</div>
		);
  }
}

export default Title;
