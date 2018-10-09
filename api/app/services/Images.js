import { readFile, writeToFile } from '../utils';

const imagesFile = 'images.json';

let imagesData = null;

const setImagesData = data => {
  imagesData = data;
  return imagesData;
};

export const getAll = async () =>
  imagesData || setImagesData(await readFile(imagesFile));

export const updateImage = async (id, data) => {
  const images = await getAll();
  const image = images.find(img => img.id === id);
  const updatedImage = Object.assign(image, data);
  await writeToFile(imagesFile, images);
  return updatedImage;
};
