import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger' // default exports are imported like this
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(logger))

export default store