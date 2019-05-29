const helper = require('../helpers/helper');

const carData = require('../data/cars.json');

function checkCarPost(carPost) {
  const {
    manufacturer,
    model,
    price,
    state,
    imageUrl,
    bodyType,
  } = carPost;
  if (!manufacturer && !model && !price && !state && !imageUrl && !bodyType) {
    return 'Form not complete';
  }
}
