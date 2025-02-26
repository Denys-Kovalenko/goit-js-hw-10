import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    createPromise(delay, state)
      .then(delay => {
        iziToast.success({
          title: '✅ OK',
          titleColor: '#fff',
          message: `Fulfilled promise in ${delay}ms`,
          messageColor: '#fff',
          position: 'topRight',
          color: '#59a10d',
        });
      })
      .catch(delay => {
        iziToast.error({
          title: '❌ Error',
          titleColor: '#fff',
          message: `Rejected promise in ${delay}ms`,
          messageColor: '#fff',
          position: 'topRight',
          color: '#ef4040',
        });
      });
  });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
