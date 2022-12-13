import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import rootReducer from './modules';

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
];

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return rootReducer(state, action);
}

export const makeStore = () => createStore(
  reducer,
  initialState,
  composedEnhancers
);

export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV === 'development' });


