import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../actions'; //setDiff Action을 불러옴


//Redux를 사용한 예제
// class Option extends Component {
//     constructor(props) {
//         super(props);
//         this.onChange = this.onChange.bind(this);
//     }

//     onChange(event) { //dispatch로 setDIff라는 action을 보냄 dispatch는 reducer로 action을 전달하고 reducer는 store에 state를 저장 
//         this.props.store.dispatch(setDiff(parseInt(event.target.value)));
//     }

//     //this.props.store.getState().counter.dif store.getState()로 state를 가져와 counter.diff를 출력
//     render() {
//         return (
//             <div>
//                 <input value={this.props.store.getState().counter.dif} onChange={this.onChange} /> 
//             </div>
//         );
//     }
// }

//Redux + React-Redux를 사용한 예제
class Option extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) { //props.onUpdateDiff 함수를 실행시킴
        this.props.onUpdateDiff(parseInt(event.target.value))
    }
    render() {
        return (
            <div>
                {/* props.diff의 값을 출력 */}
                <input value={this.props.diff} onChange={this.onChange} /> 
            </div>
        );
    }
}

let mapStateToProps = (state) => { //props.onUpdateDiff를 실행 할 경우 dispatch 할 action을 정의하는 코드
    return {
        diff: state.counter.diff
    }
}

let mapDispatchToProps = (dispatch) => { //props.onUpdateDiff를 실행 할 경우 dispatch 할 action을 정의하는 코드
    return {
        onUpdateDiff: (value) => dispatch(setDiff(value))
    };
}

Option = connect(mapStateToProps, mapDispatchToProps)(Option); //mapStateProps와 mapDispatchToProps에서 작성한 내용을 적용하는 connect 메소드를 호출합니다.

export default Option;