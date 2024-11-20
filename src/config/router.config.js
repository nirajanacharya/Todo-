
const router = require ('express').Router();
const todoRouter = require('../Modules/Todo/todo.router')


router.use('/todo',todoRouter);


module.exports = router;