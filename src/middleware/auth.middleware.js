

const loginCheck = (req, res, next) => {

    //login check 
    console.log('login is checked');
    next();
}

module.exports= {loginCheck }