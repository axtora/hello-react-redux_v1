import React, { Component } from 'react';
import { connect } from 'react-redux';
//7번째 줄 store.getState()로 store에 젖아된 state를 가져와 counter.value를 출력

//store State Strueture
//{ counter: {value: 0, diff: 1}}

//Redux를 사용한 예제
// class Counter extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Value : {this.props.store.getState().counter.value}</h1> 
//             </div>
//         );
//     }
// }

//Redux + React-Redux를 사용한 예제
class Counter extends Component {
    render() {
        return (
            <div>
                {/* store를 통해 state를 가져올 필요 없이 props value로 store 값을 가져 올 수 있게 됨 이것이 가능한 이유는 React_redux Conncet 메소드 덕분 */}
                <h1>Value : {this.props.value}</h1> 
            </div>
        );
    }
}

let mapStateToProps = (state) => { //store의 state를 props로 매핑 해주는 부분
    return {
        value: state.counter.value
    }
}

//conncet 특정 컴포넌트 클래스의 props를 storeㅇ ㅔ연결시켜주는 함수를 리턴
//리턴 된 함수에 컴포넌트를 인수로 넣어주면 기존 컴포넌트가 수정되는 것이 아니라 새로운 컴포넌트를 리턴
//conncet의 paramter => mapStatetoProps(state, [ownprops]) store의 state를 컴포넌트의 props에 매핑 시켜줌
//ownProps인자가 명시될 경우 이를 통해 함수 내부에서 컴포넌트의 props 값에 접근 할 수 있음 즉 store.state를 props로 접근할 수 있도록 함
//mapDispatchToProps(dispatch, [pwnProps]): 컴포넌트의 함수형 props를 실행 했을 때 개발자가 지정한 action을 dispatch 하도록 설정함
// ownProps는 동일 함 
//즉 props.function을 통해 action을 dispatch 할 수 있도록 함
 
Counter = connect(mapStateToProps)(Counter);


export default Counter;