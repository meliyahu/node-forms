
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/contact', (req, res) => {
  res.render('contact', {
    data: {},
    errors: {}
  })
})
router.post('/contact', (req, res) => {
  // get form fields....
  res.render('contact', {
    data: req.body,
    errors: {
      message: {
        msg: 'A message is required'
      },
      email: {
        msg: "Tha email does'nt look right"
      }
    }
  })
})

module.exports = router
