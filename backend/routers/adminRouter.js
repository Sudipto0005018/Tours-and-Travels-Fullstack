const express = require('express');
const adminrouter = express.Router();

const admincontroller = require('../controllers/adminController');
const checklogin = require('../middlewares/checklogin');

adminrouter.post('/adminregister', admincontroller.adminregister);
adminrouter.post('/adminlogin', admincontroller.adminlogin);

adminrouter.post('/createtour', checklogin, admincontroller.createtour);
adminrouter.get('/getalltour', checklogin, admincontroller.getalltour);

adminrouter.put('/editour/:id', checklogin, admincontroller.editour);
adminrouter.delete('/deletetour/:id', checklogin, admincontroller.deletetour);

adminrouter.get('/getallorders', checklogin, admincontroller.getallorders);

module.exports = adminrouter;