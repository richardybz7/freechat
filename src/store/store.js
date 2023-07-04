import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './root-saga'

const sagaMiddleWare = createSagaMiddleware()

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleWare
].filter(Boolean)

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)

sagaMiddleWare.run(rootSaga)