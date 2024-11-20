class TODOController {
   storeTodo=  (req, res,next)=>{
        //definition
        res.json({
            data:null,
            message:"created succesffully",
            status:"SUCCESS",
            options:null
        })
}

}

prodCtrl = new TODOController();    

module.exports = prodCtrl;

