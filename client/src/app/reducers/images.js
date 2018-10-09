import { handleActions } from 'redux-actions';
import ImageActions from 'app/actions/images';

export const imageReducer = handleActions(
  {
    // LOAD
    [ImageActions.loadImages]: (state) => ({
      ...state,
      loading: true,
    }),
    [ImageActions.loadImagesSuccess]: (state, action) => ({
      loading: false,
      data: action.payload,
    }),

    // UPDATE
    [ImageActions.updateImage]: (state) => ({
      ...state,
      loading: true,
    }),
    [ImageActions.updateImageSuccess]: (state, action) => {
      return {
        data: state.data.map(
          (image) => (image.id === action.payload.id ? { ...action.payload } : image),
        ),
        loading: false,
      };
    },

  },
  {
    loading: false,
    data: [],
  },
);
