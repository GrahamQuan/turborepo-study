import { default as uiConfig } from '@workspace/ui/postcss.config';

const config = {
  ...uiConfig,
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
