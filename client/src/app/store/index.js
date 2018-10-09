import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { logger } from 'app/middleware/index';
import { rootReducer } from 'app/reducers/index';
import sagas from 'app/middleware/sagas/index';

export function configureStore(history, initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(logger, sagaMiddleware, routerMiddleware(history));
  const store = createStore(rootReducer, initialState, middleware);

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const nextReducer = require('app/reducers/index');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
