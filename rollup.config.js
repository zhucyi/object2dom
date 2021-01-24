import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: {
    name: 'object2dom',
    file: `dist/index.js`,
    format: 'umd',
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts'],
      modulesOnly: true,
    }),
    babel({
      extensions: ['.js', '.ts'],
    }),
  ],
};
