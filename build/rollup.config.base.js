import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import serve from 'rollup-plugin-serve';

const isDev = process.env.NODE_ENV === 'dev';
export default {
  input: 'src/index.ts',
  output: {
    name: 'object2dom',
    file: `dist/index.js`,
    format: 'umd',
  },
  plugins: [
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.ts'],
      exclude: ['node_modules/**'],
    }),
    commonjs(),
    nodeResolve({
      extensions: ['.js', '.ts'],
    }),
    postcss({
      extensions: ['.less', '.css'],
      minimize: true,
      sourceMap: false,
      plugins: [autoprefixer()],
    }),
    isDev ? '' : uglify(),
    serve({
      verbose: true,
    }),
  ],
  // external: [/@babel\/runtime/],
  // external: [/core-js/],
};
