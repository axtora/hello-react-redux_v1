import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions'; //increment, decrement라는 action을 불러옴 (정확히는 action 객체를 리턴하는 함수)


//Redux를 사용한 예제
// class Button extends Component {
//     constructor(props) {
//         super(props);

//         this.onIncrement = this.onIncrement.bind(this);
//         this.onDecrement = this.onDecrement.bind(this);
//     }

//     onIncrement(event) { // increment라는 action을 dispatch함
//         this.props.store.dispatch(increment())
//     }

//     onDecrement(event) { //decrement라는 action을 dispatch함
//         this.props.store.dispatch(decrement())
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.onIncrement}>+</button>
//                 <button onClick={this.onDecrement}>-</button>
//             </div>
//         );
//     }
// }

//Redux + React-Redux를 사용한 예제
class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()), //props.onIcnrement를 실행 할 경우 increment action을 dispatch함
        onDecrement: () => dispatch(decrement()) //props.onDecrment를 실행 할 경우 decrement.action을 dispatch함 
    }
}

Button = connect(undefined, mapDispatchToProps)(Button); //props를 store의 state에 매칭 시켜주는 connect 하수를 실행

export default Button;