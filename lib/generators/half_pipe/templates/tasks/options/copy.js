module.exports = {
  prepare: {
    files: [{
      expand: true,
      cwd: 'app/assets/scripts',
      src: '**/*.js',
      dest: '<%%= dirs.tmp %>/prepare/assets/scripts'
    }, {
      expand: true,
      cwd: 'app/assets/images',
      src: '**/*',
      dest: '<%%= dirs.tmp %>/prepare/assets/images'
    }, {
      expand: true,
      cwd: 'app/assets/styles',
      src: '**/*',
      dest: '<%%= dirs.tmp %>/prepare/assets/styles'
    }]
  },
  finalize: {
    files: [{
      expand: true,
      cwd: '<%%= dirs.tmp %>/public',
      src: ['assets/**/*'],
      dest: 'public/'
    }]
  }
};
