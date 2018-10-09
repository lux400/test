import { all } from 'redux-saga/effects';

import imagesSaga from './images';

export default function* Saga() {
  yield all([imagesSaga()]);
}
