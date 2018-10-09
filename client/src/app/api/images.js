import routes from 'app/constants/routes';
import { put, get, request } from './client';

export function loadImages() {
  return get(routes.images);
}

export function updateImage({ id, ...payload }) {
  return put(routes.images, id, payload);
}
