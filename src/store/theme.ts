import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  toogleTheme: [],
});

const INITIAL_STATE: string = 'dark';

const toogleTheme = (state = INITIAL_STATE): string =>
  state === 'dark' ? 'light' : 'dark';

export default createReducer(INITIAL_STATE, {
  [Types.TOOGLE_THEME]: toogleTheme,
});
