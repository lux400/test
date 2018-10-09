import { createAction } from 'redux-actions';
import {
  LOAD_IMAGES_FAILURE,
  LOAD_IMAGES_REQUEST,
  LOAD_IMAGES_SUCCESS,
  UPDATE_IMAGE_FAILURE,
  UPDATE_IMAGE_REQUEST,
  UPDATE_IMAGE_SUCCESS,
} from 'app/constants/actionTypes';

const loadImages = createAction(LOAD_IMAGES_REQUEST);
const loadImagesSuccess = createAction(LOAD_IMAGES_SUCCESS);
const loadImagesFailure = createAction(LOAD_IMAGES_FAILURE);

const updateImage = createAction(UPDATE_IMAGE_REQUEST);
const updateImageSuccess = createAction(UPDATE_IMAGE_SUCCESS);
const updateImageFailure = createAction(UPDATE_IMAGE_FAILURE);

export default {
  loadImages,
  loadImagesSuccess,
  loadImagesFailure,

  updateImage,
  updateImageSuccess,
  updateImageFailure
};
