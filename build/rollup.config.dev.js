import base, { output, plugins } from './rollup.config.base';
import serve from 'rollup-plugin-serve';
import html from '@rollup/plugin-html';
import livereload from 'rollup-plugin-livereload';

export default {
  ...base,
  ...{ input: 'src/playground/index.ts' },
  ...{
    output,
    plugins: [
      ...plugins,
      html(),
      serve({
        port: 8888,
        contentBase: ['dist'],
      }),
      livereload('dist'),
    ],
  },
};
