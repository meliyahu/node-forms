const express = require('express')
const router = express.Router()
const {
  check,
  validationResult
} = require('express-validator/check')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/contact', (req, res) => {
  res.render('contact', {
    data: {},
    errors: {}
  })
})
router.post('/contact', [
  check('message')
  .isLength({
    min: 1
  })
  .withMessage('Message is required'),
  check('email')
  .isEmail()
  .withMessage('That email does not look right gringo!')
],(req, res) => {
  const errors = validationResult(req)
  console.log(errors.mapped())
  res.render('contact', {
    data: req.body,
    errors: errors.mapped()
  })
})

module.exports = router