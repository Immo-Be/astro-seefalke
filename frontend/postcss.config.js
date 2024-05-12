import postcssCustomMedia from 'postcss-custom-media';
import postcssGlobalData from '@csstools/postcss-global-data';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    // postcssGlobalData is used to define postcss custom media variables once in variables.module.css
    // and use them in all other files without re-declaring or manually importing them
    postcssGlobalData({files: ['./src/styles/main.css']}),
    // postcssCustomMedia,
    autoprefixer,
    cssnano,
    postcssPresetEnv()
  ]
};
