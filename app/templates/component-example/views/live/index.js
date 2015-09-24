export default {

  path: 'live',

  getComponent(location, cb){
    require.ensure([], require => {
      cb(null, require('./handler'));
    });
  }

};
