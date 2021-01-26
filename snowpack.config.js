module.exports = {
  mount: {
    'public': { url: '/', static: true, resolve: false },
    'src/scripts': { url: '/public/scripts' },
    'src/sass': { url: '/public/css' },
  },
  plugins: [
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'yarn build',
        watch: 'yarn start',
      },
    ],
  ],
  packageOptions: {
    NODE_ENV: true,
    source: 'remote',
  },
  buildOptions: {
    clean: true,
    out: 'public',
  },
  devOptions: {
    open: 'none',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
};