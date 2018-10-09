import * as Images from '../services/Images';

export const index = async (req, res) => {
  try {
    const images = await Images.getAll();
    res.json(images);
  } catch (e) {
    console.log(e);
    res.status(422).json({ success: false });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedImage = await Images.updateImage(id, req.body);
    res.json(updatedImage);
  } catch (e) {
    console.log(e);
    res.status(422).json({ success: false });
  }
};
