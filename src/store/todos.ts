import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addTodo: ['text'],
  toggleTodo: ['id'],
  removeTodo: ['id'],
});

export interface Task {
  id: number;
  text: string;
  complete: boolean;
}

const INITIAL_STATE: Task[] = [];

const add = (state = INITIAL_STATE, payload: Task): Task[] => [
  ...state,
  { id: Math.random(), text: payload.text, complete: false },
];

const toggle = (state = INITIAL_STATE, payload: Task) =>
  state.map((todo) =>
    todo.id === payload.id ? { ...todo, complete: !todo.complete } : todo
  );

const remove = (state = INITIAL_STATE, payload: Task) =>
  state.filter((todo) => todo.id !== payload.id);

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove,
});
