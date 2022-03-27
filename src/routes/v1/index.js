const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const dynamicFormRoute = require('./dynamicForm.route');
const applicationRoute = require('./application.route');
const applicationLocationRoute = require('./applicationLocation.route');
const documentRoute = require('./document.route');
const requestRoute = require('./request.route');
const config = require('../../config/config');
const departmentRoute = require('./department.route');
const applicationRemarkRoute = require('./applicationRemark.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/form',
    route: dynamicFormRoute,
  },
  {
    path: '/application',
    route: applicationRoute,
  },
  {
    path: '/applicationLocation',
    route: applicationLocationRoute,
  },
  {
    path: '/document',
    route: documentRoute,
  },
  {
    path: '/request',
    route: requestRoute,
  },
  {
    path: '/department',
    route: departmentRoute,
  },
  {
    path: '/applicationRemark',
    route: applicationRemarkRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
