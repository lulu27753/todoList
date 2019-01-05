import { createStore, compose } from 'redux'
import rootReducer from '../components/reducers'
import middlewares from './middlewares'
import { persistState } from 'redux-devtools'


const enhancer = compose(
  middlewares,
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
)

export default function configureStore (initialState) {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    initialState,
    enhancer
  )
  /* eslint-enable */

  if (module.hot) {
    module.hot.accept('../components/reducers', () => {
      const nextRootReducer = require('../components/reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
