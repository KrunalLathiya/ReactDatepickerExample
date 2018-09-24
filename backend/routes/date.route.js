const dateRoute = require('express').Router(),
      DateModel = require('../models/DateModel');

dateRoute.route('/add').post(function (req, res) {
  let datemodel = new DateModel(req.body);
  datemodel.save()
    .then(dateSaved => {
    res.status(200).json({'dateSaved': 'Date in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

module.exports = dateRoute;