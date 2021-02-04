import base, { output, plugins } from './rollup.config.base';
import { terser } from 'rollup-plugin-terser';
export default {
  ...base,
  ...{
    output,
    plugins: [...plugins, terser()],
  },
};
