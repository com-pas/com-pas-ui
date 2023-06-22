import typescript from '@rollup/plugin-typescript';
import merge from 'deepmerge';
// use createSpaConfig for bundling a Single Page App
// import { createSpaConfig } from '@open-wc/building-rollup';

// use createBasicConfig to do regular JS to JS bundling
import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createBasicConfig({
  // use the outputdir option to modify where files are output
  // outputDir: 'dist',

  // if you need to support older browsers, such as IE11, set the legacyBuild
  // option to generate an additional build just for this browser
  // legacyBuild: true,

  // development mode creates a non-minified build for debugging or development
  developmentMode: process.env.ROLLUP_WATCH === 'true',

  // set to true to inject the service worker registration into your index.html
  injectServiceWorker: false,
});

export default merge(baseConfig, {
  input: './oscd-theme.ts',
  plugins: [typescript()],
  output: {
    file: 'dist/oscd-theme.js',
    sourcemap: true,
    dir: undefined,
  },
});
