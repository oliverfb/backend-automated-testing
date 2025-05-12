const userRouter = require('./users');
const statusRouter = require('./status');

const routes = [
  { route: '/users', router: userRouter },
   { route: '/status', router: statusRouter }
];

const setupRoutes = (app) => {
  routes.forEach(({ route, router }) => {
    app.use(route, router);
  });
};

module.exports = {
    setupRoutes,
};
