import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.ts',
  output: {
    name: 'object2dom',
    file: `dist/index.js`,
    format: 'umd'
  },
  plugins: [
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.ts'],
      exclude: ['node_modules/**']
    }),
    commonjs(),
    nodeResolve({
      extensions: ['.js', '.ts']
    }),
    // uglify()
  ]
  // external: [/@babel\/runtime/],
  // external: [/core-js/],
};
