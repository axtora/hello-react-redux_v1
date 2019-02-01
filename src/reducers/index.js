import { INCREMENT, DECREMENT, SET_DIFF } from '../actions'; //actio의 type들을 import함.
import { combineReducers } from 'redux'; //Rducer가 여러개 있다면 하나로 합쳐주는 메소드  

const counterInitialState = { //state의 초기값을 정의
  value: 0,
  diff: 1
};

const counter = (state = counterInitialState, action) => { //Counter의 Reducer입니다.
  //Redux에서 State는 읽기전용이여야 함.
  switch(action.type) { //action Type에 따라서 Reducer가 동작하는 부분
    case INCREMENT: 
      return Object.assign({}, state, {
        value: state.value + state.diff
      });
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff
      });
    case SET_DIFF:
      return Object.assign({}, state, {
        diff: action.diff
      });
    default:
      return state;
  }
}

const counterApp = combineReducers({ counter }); // combineReducers 작성한 Reducer를 하나로 합쳐주는 역할

//만약 여러개라면 
// const counterApps = combineReducers({
//   counter,
//   typeOne,
//   typeSecond
// })

//key를 주고 싶다면
// const counterAppsKey = combineReducers({
//   a: counter,
//   b: typeOne
// })

export default counterApp; //Reducer를 Export함
