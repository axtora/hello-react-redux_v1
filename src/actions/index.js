//action type
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

//incrment action 정의
export function increment() {
  return {
    type: INCREMENT
  };
}
//decrement action 정의
export function decrement() {
  return {
    type: DECREMENT
  };
}

//setDiff action 정의 어떤 값을 계산 해 줄 것인지를 diff에 저장 나중에는 reducer에 의해 store에 저장
//action: 어떤 변화가 일어나야 할지 알려주는 객체
//action를 작성할 때 첫번째 필드 type은 필수적으로 포함이되야 함. 
//type은 action이 무엇을 해야 하는지 ID같은 개념으로 사용됨

export function setDiff(value) {
  return {
    type: SET_DIFF,
    diff: value
  }
}
