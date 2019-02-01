import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';

const store = createStore(counterApp) //store를 만드는 방법
//createStore메소드를 이용함
//creteStore의 인자로 reducer를 전달해야함


//Redux를 사용한 예제
// const render = () => {
//   ReactDOM.render(
//     <App store={store} />,
//     document.getElementById('root')
//   )
// }

// store.subscribe(render); //store.subscribe (Listner) 형태 
// //dispatch 메소드가 실행되면 Listner 함수가 실행 됨 
// //그래서 데이터가 변경 될 떄 마다 다시 랜더링

// render();

ReactDOM.render( //Provider 컴포넌트 앙네 App Component 
  //Provider 컴포넌트에만 Store을 지정 해주면 됨
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)