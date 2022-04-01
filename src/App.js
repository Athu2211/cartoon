import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import { get2Dcartoons } from "./redux/actions/cartoons";
import './App.css';
import Cartoons from "./components/Cartoon/Cartoons";
import Cartoon2D from "./components/Cartoon/Cartoon2D";
import Cartoon3D from "./components/Cartoon/Cartoon3D";

function App() {
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(get2Dcartoons());
	// });

	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/cartoons" exact component={Cartoons} />
					<Route path="/2d" exact component={Cartoon2D} />
					<Route path="/3d" exact component={Cartoon3D} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
