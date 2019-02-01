import React, { Component } from 'react';

import Counter from './components/Counter';
import Option from './components/Option';
import Button from './components/Button';

//Redux를 사용한 예제
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Counter store={this.props.store} />
//         <Option  store={this.props.store} />
//         <Button  store={this.props.store} />
//       </div>
//     );
//   }
// }


//Redux + React-Redux를 사용한 예제
class App extends Component { //컴포넌트에 넘겨주던 store를 넘겨주지 않아도 됨.
  render() {
    return (
      <div>
        <Counter />
        <Option />
        <Button />
      </div>
    );
  }
}


export default App;
