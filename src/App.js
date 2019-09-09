import React from 'react';
import './App.css';
import {
	Navbar,
	NavbarBrand
} from 'reactstrap';

function App() {
  return (
    <div>
			<Navbar color="faded" light expand="md">
				<NavbarBrand>근무표</NavbarBrand>
			</Navbar>
    </div>
  );
}

export default App;
