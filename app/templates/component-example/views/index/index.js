export default {

  path: 'index',

  getComponent(location, cb){
    require.ensure([], require => {
      cb(null, require('./handler'))
    })
  }

};
