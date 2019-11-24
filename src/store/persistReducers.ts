import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { Reducer } from 'redux'

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage,
      whitelist: ['counter', 'user', 'auth'],
    },
    reducers
  )

  return persistedReducer
}
