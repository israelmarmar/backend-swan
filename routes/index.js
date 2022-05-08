var express = require('express');
const api = require('../utils/api');
var router = express.Router();

router.get('/api/users', function(req, res) {
  const { number } = req.query;

  api.get(`https://api.github.com/users?since=${number}`)
  .then(response=>res.json(response.data))
  .catch(e=>res.json({msg: {error: e} }));

});

router.get('/api/users/:username/details', function(req, res) {
  const { username } = req.params;

  api.get(`${username}`)
  .then(response=>res.json(response.data))
  .catch(e=>res.json({msg: {error: e} }));
  
});

router.get('/api/users/:username/repos', function(req, res) {
  const { username } = req.params;

  api.get(`${username}/repos`)
  .then(response=>res.json(response.data))
  .catch(e=>res.json({msg: {error: e} }));
  
});

module.exports = router;
