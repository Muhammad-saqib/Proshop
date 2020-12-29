import { Container } from 'react-bootstrap';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './Component/Footer';
import { Header } from './Component/Header';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import Cart from './Screens/CartScreen'

const App = () => {
	return (
		<Router>
			<Header />

			<main className="py-3">
				<Container>
					<Route Key="home" exact path="/" component={ HomeScreen }>
					</Route>
					<Route key="product" path="/product/:id" component={ ProductScreen }>
					</Route>
					<Route key="cart" path="/cart/:id?" component={ Cart }></Route>
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
