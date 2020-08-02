import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import todos, { Task } from 'store/todos';
import theme from 'store/theme';

export interface State {
  theme: string;
  todos: Task[];
}

const reducers = combineReducers({ todos, theme });

const settings = { key: 'root', storage };

const redulcer = persistReducer(settings, reducers);

const store = createStore(redulcer);

export const persistor = persistStore(store);

export default store;
