import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts'],
  format: ['esm'],
  dts: false,
  splitting: false,
  sourcemap: false,
  minify: false,
  clean: true,
  outDir: 'dist',
  target: 'esnext',
});
