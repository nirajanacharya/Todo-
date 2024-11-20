
const todoRouter = require('express').Router();
const {loginCheck} = require('../../middleware/auth.middleware');
const prodCtrl = require('./todo.Controller');


//we will creates a routes for crude application 
todoRouter.route('/')
    .post(loginCheck, prodCtrl.storeTodo)   //for storing the data



module.exports = todoRouter;