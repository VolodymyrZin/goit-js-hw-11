// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';

const refs = {
  galleryEl: document.querySelector('.gallery'),
  formEl: document.querySelector('.form'),
  loaderEl: document.querySelector('.loader-wrapper'),
};

refs.formEl.addEventListener('submit', onFormSubmitBtnClick);
function onFormSubmitBtnClick(event) {
  event.preventDefault();
  const input = event.target.elements[0].value.trim();
  if (!input) {
    iziToast.show({
      title: 'Caution',
      message: 'Search field cannot be empty. Please enter a keyword!',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(input)
    .then(data => {
      hideLoader();
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Sorry, ',
          message:
            'there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(data.hits);
    })

    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Hey',
        message: 'Something wrong. Please try again!',
        position: 'topRight',
      });
    });
}
