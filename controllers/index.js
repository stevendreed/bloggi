/*
   index.js | employs the .Router() method from express which allows us to break
   our app into subapplications, as well as compartimentalize our routes to
   adhere to separation of concern
*/
const router = require('express').Router();

// const apiRoutes = require('./api'); // uncomment this when api routes ready
// const apiRoutes = require('./homePageRoutes); // uncomment this when homePageRoutes ready

// router.use('/', apiRoutes);
// router.use('/', homePageRoutes);


module.exports = router;
