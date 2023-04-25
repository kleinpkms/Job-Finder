const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

router.get('/test', (req, res) => {
  res.send('deu certo');
});

router.get('/view/:id', (req, res) => Job.findOne({
  where: {id: req.params.id}
}).then(job => {

  res.render('view', {
    job
  });

}).catch(err => console.log(err)));


router.get('/add', (req, res) => {
  res.render('add');
})

router.post('/add', (req, res) => {

  let {title, salary, company, description, email, new_job} = req.body;

  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));

});

module.exports = router