const carService = require('../services/cars');

function postCarAd(req, res, next) {
  carService.sendRequest(req.body)
    .then(car => (car ? res.json({
      status: res.statusCode,
      data: {
        id: car.id,
        email: '',
        created_on: car.created,
        manufacturer: car.manufacturer,
        model: car.model,
        price: car.price,
        state: car.state,
        status: car.status,

      },
    }) : res.status(400).json({ message: 'unable to post Ad' }))).catch(err => next(err));
}

module.exports = {
  postCarAd,
};
