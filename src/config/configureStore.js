import AppNavigation from '../navigation/AppNavigation'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducers from '../reducers'


export default configureStore = () => {
  const logger = createLogger();
  let store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk, logger)));
  return store;
}
