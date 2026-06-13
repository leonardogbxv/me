import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextCoreWebVitals,
  {
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single', { avoidEscape: false }],
      semi: 'error',
      'eol-last': 'error',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
    },
  },
];

export default config;
