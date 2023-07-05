/* eslint-disable no-console */

import { register } from 'register-service-worker';
import { useRouter } from 'vue-router';

// Setup ref to router
const router = useRouter();

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      );
    },
    registered () {
      console.log('Service worker has been registered.');
    },
    cached () {
      console.log('Content has been cached for offline use.');
    },
    updatefound () {
      console.log('New content is downloading.');
    },
    updated () {
      console.log('New content is available; please refresh.');
      router.push({ name: 'Calendar' });
      window.location.reload(true);
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.');
      alert('Отсутствует соединение с интернетом');
    },
    error (error) {
      console.error('Error during service worker registration:', error);
    }
  });
}
