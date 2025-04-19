import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx', 'src/components/**.tsx', 'src/styles/**.css'],
  format: ['esm'],
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  injectStyle: false, // don't inject css into js file
});
