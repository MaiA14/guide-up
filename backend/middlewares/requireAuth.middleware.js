const logger = require('../services/logger.service')



async function requireAuth(req, res, next) {

  if (!req.session || !req.session.user) {


    console.log(req.session)

    res.status(401).end('Unauthorized!');
    return;
  }
  console.log(req.session.user)

  next();
}





// async function requireAdmin(req, res, next) {
//   const user = req.session.user;
//   if (!user.isAdmin) {
//     res.status(401).end('Unauthorized Enough..');
//     return;
//   }
//   next();
// }


// module.exports = requireAuth;

module.exports = {
  requireAuth,
  
  // requireAdmin
}
