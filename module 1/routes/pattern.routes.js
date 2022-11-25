const { Router } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Pessenger  = require('../pattern/Pessenger.ts');
const { Schudule } = require('../pattern/Schudule.js');


const router = new Router();


router.post("/calculate", async (req, res) => {
    console.log(req);
  const { pessenger, cities, time } = req.body;
  console.log(pessenger, cities, time);
  const schudule = new Schudule();

    const resTime = schudule.calculateTime(pessenger, cities, time);

  return res.json({ resTime: resTime });
});



module.exports = router;
