import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
export const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Shopping App</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<LinkContainer to="/carts">
								<Nav.Link>
									<i className="fa fa-shopping-cart" aria-hidden="true" />Cart
								</Nav.Link>
							</LinkContainer>

							<LinkContainer to="/login">
								<Nav.Link>
									<i className="fas fa-user" />Sign In
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
