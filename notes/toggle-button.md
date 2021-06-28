- The easy way to make a toggle button where you can hide or show text conditionally, is by using state for the component. 
- If you will depend on the previous state to check if the text is visible or not, you need to add a function for the previous snapshot when calling the update function. 

Example
- I have some text but i want to show it when the user clicks the toggle button. When the button is clicked it will either hide or show the text. 

```jsx
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
```