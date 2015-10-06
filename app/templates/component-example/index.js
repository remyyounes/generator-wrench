export default {

  path: '<%= routeName %>',

  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./handler'));
    });
  },

  getChildRoutes(location, cb) {
    require.ensure([], require => {
      cb(null, require('./views/live'));
    });
  },

  getIndexRoute(location, cb) {
    require.ensure([], require => {
      cb(null, require('./views/index'));
    });
  },

};
