import { useState } from 'react';
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
			{showText && <p>This is the toggle sentence</p>}
			<Button onClick={toggleHandler}> Toogle Button </Button>
		</div>
	);
}

export default App;
