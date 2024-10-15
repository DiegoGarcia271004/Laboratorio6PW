const { addUserController, showForm, showUsers } = require('../controllers/user.controller.js');
const router = require('express').Router(); 


router.get('/', showForm);
router.post('/home', addUserController);
router.get('/allUsers', showUsers);

module.exports = router;