import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/report-from-website.js',  
  output: [
    {
      file: 'dist/report-from-website.js',
      format: 'umd',  
      name: 'ReportFromWebsite', 
      sourcemap: true
    },
    {
      file: 'dist/report-from-website.min.js', 
      format: 'umd',
      name: 'ReportFromWebsite',
      plugins: [terser()],  
      sourcemap: true
    }
  ]
};
