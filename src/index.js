import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

// import Counter from './Counter';

import store from './store'
console.log('store', store);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);

// ReactDOM.render(
// 		<Counter />
// 	, document.getElementById('root')
// );


// const Counter = ({ value, onIncrement, onDecrement }) => (
//   <div>
//   <h1>{value}</h1>
//   <button onClick={onIncrement}>+</button>
//   <button onClick={onDecrement}>-</button>
//   </div>
// );

// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT': return state + 1;
//     case 'DECREMENT': return state - 1;
//     default: return state;
//   }
// };

// const store = createStore(reducer);

// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() => store.dispatch({type: 'INCREMENT'})}
//       onDecrement={() => store.dispatch({type: 'DECREMENT'})}
//     />,
//     document.getElementById('root')
//   );
// };

// render();
// store.subscribe(render);
