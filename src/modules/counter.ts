import { createAction, ActionType, createReducer } from "typesafe-actions";

// action type 선언
// as const는 const assertions이라는 TypeScript 문법 (type이 string이 되지 않고 실제 값을 가리킴)
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = "counter/INCREASE_BY";

// create action function
export const increase = createAction(INCREASE)();
// () => ({ type: INCREASE });
export const decrease = createAction(DECREASE)();
// () => ({ type: DECREASE });
export const increaseBy = createAction(INCREASE_BY)<number>();
// parameter 값을 payload 값으로 설정하는 것은 FSA 규칙을 따르기 위함
// FSA 규칙 - 액션 객체 구조 일관성을 위한 규칙
// (payload: number) => ({ type: INCREASE_BY, payload });

// action
const actions = { increase, decrease, increaseBy };
type TCounterAction = ActionType<typeof actions>;
// ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸타입 임
// | ReturnType<typeof increase>
// | ReturnType<typeof decrease>
// | ReturnType<typeof increaseBy>;

// state & initialState
type TCounterState = {
  count: number;
};

const initialState: TCounterState = {
  count: 0,
};

// reducer
const counter = createReducer<TCounterState, TCounterAction>(initialState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});
// function counter(state: TCounterState = initialState, action: TCounterAction) {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }

export default counter;
