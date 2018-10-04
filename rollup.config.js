import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import sass from 'rollup-plugin-sass'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    sass({
      output: 'dist/react-arcgis-hub.css'
    }),
    url(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      // TODO: TS errors on `import style from './index.scss'`
      // so for now changed index.ts to index.js to keep TS from processing the file
      exclude: [ "*.js" ]
    }),
    commonjs()
  ]
}
