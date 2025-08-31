// src/lib/copy/en.js
export default {
  company: {
    name: "Good Morning Technology", 
    phrase: "Fresh websites for a new day",
    email: "hello@goodmorningtechnology.com",
    phone: "(310) 237-6671",
    address: "123 Main St, Anytown, USA", //Fix?
    hours: "9 AM - 6 PM EST", 
    copyright: "© 2025 Good Morning Technology. All rights reserved.", 
    socials: {
      twitter: "https://twitter.com/goodmorningtech", 
      facebook: "https://facebook.com/goodmorningtech",
      instagram: "https://instagram.com/goodmorningtech",
      linkedin: "https://linkedin.com/company/goodmorningtech"
    }
  },




  site: {
    title: "Good Morning Technology",
    subtitle: "Fresh websites for a new day",
    description: "Good Morning Technology creates bright, fast websites designed to attract customers and grow your business.",
  },
  nav: {
    login: "Log in",
    signup: "Sign up",
    about: "About"
  },
  forms: {
    emailLabel: "Email address",
    passwordLabel: "Password",
    submit: "Submit"
  },
  actions: {
    learnMore: "Learn more",
    getStarted: "Get started"
  }
}



  import { t } from './copy/index.js';

console.log(t('site.title')); // "Good Morning Technology"
console.log(t('forms.emailLabel')); // "Email address"
console.log(t('site.subtitle', { name: 'Kaleb' })); // if you have interpolation you added