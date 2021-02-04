import { resolve } from 'path';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import posthtml from 'rollup-plugin-posthtml-template';
import alias from '@rollup/plugin-alias';

export default {
  input: 'src/index.ts',
  // external: [/@babel\/runtime/],
  // external: [/core-js/],
};

export const output = {
  name: 'object2dom',
  file: resolve(__dirname, '../dist/index.js'),
  format: 'umd',
};

export const plugins = [
  alias({
    entries: [{ find: '@', replacement: resolve(__dirname, '../src') }],
  }),
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
  posthtml(),
];
