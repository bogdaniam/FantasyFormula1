const jwt = require("jsonwebtoken");

function middleware(req, res, next) {
  const token = req.body.respuesta.token
  //try {


  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decodedtoken) => {
      if (err) {
        console.log("token no valido")
        res.json({
          tokenValido: false,
        })
      } else {
      console.log("token valido")
      next();

      }
    })

  } else {


  }


  // }

  // catch (error) {

  // }








}
module.exports = { middleware };