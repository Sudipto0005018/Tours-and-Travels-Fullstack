const express = require('express');
const userouter = express.Router();

const usercontroller = require('../controllers/userController');
const checklogin = require('../middlewares/checklogin');

userouter.post('/useregister', usercontroller.useregister);
userouter.post('/userlogin', usercontroller.userlogin);

userouter.get('/getalltour', usercontroller.getalltour);
userouter.delete('/deleteallcart', checklogin, usercontroller.deleteallcart);

userouter.get('/getour/:name', usercontroller.getour);
userouter.post('/tourorder', checklogin, usercontroller.tourorder);

userouter.get('/getuser', checklogin, usercontroller.getuser);
userouter.delete('/deletecart', checklogin, usercontroller.deletecart);

userouter.post('/postcart', checklogin, usercontroller.postcart);
userouter.get('/getcart', checklogin, usercontroller.getcart);

userouter.put('/updatecart', checklogin, usercontroller.updatecart);
userouter.get('/getorders', checklogin, usercontroller.getorders);

module.exports = userouter;

