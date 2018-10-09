import { call, put, takeLatest } from 'redux-saga/effects';

import * as api from 'app/api/images';
import actions from 'app/actions/images';
import { LOAD_IMAGES_REQUEST, UPDATE_IMAGE_REQUEST } from 'app/constants/actionTypes';

function* loadImages() {
  try {
    const images = yield call(api.loadImages);
    yield put(actions.loadImagesSuccess(images));
  } catch (error) {
    yield put(actions.loadImagesFailure(error));
  }
}

function* updateImage({ payload }) {
  try {
    const updatedImage = yield call(api.updateImage, payload);
    yield put(actions.updateImageSuccess(updatedImage))
  } catch (error) {
    yield put(actions.updateImageFailure(error));
  }
}

export default function* landingPageSaga() {
  yield takeLatest(LOAD_IMAGES_REQUEST, loadImages);
  yield takeLatest(UPDATE_IMAGE_REQUEST, updateImage);
}
