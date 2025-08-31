import { t } from './copy/index.js';

console.log(t('site.title')); // "Good Morning Technology"
console.log(t('forms.emailLabel')); // "Email address"
console.log(t('site.subtitle', { name: 'Kaleb' })); // if you have interpolation you added