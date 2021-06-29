import { useState } from 'react';
import ToogleText from './components/ToggleText/ToggleText';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {
	const [ showText, setShowText ] = useState(false);

	const toggleHandler = () => {
		setShowText((prevShowText) => !prevShowText);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<ToogleText show={showText} />
			<Button onClick={toggleHandler}> Toogle Button </Button>
		</div>
	);
}

export default App;
