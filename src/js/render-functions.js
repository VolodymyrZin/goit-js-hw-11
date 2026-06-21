// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery .gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
  </a>
  <div class="info">
    <p class="info-item"><b>Likes</b><span>${likes}</span></p>
    <p class="info-item"><b>Views</b> <span>${views}</span></p>
    <p class="info-item"><b>Comments</b> <span>${comments}</span></p>
    <p class="info-item"><b>Downloads</b> <span>${downloads}</span></p>
  </div>
</li>`
    )
    .join('');
  document.querySelector('.gallery').innerHTML = markup;

  lightbox.refresh();
}
// .Ця функція повинна приймати масив images, створювати HTML - розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh().Нічого не повертає.
function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

// . Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
function showLoader() {
  document.querySelector('.loader-wrapper').classList.remove('is-hidden');
}
// . Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
function hideLoader() {
  document.querySelector('.loader-wrapper').classList.add('is-hidden');
}
// . Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
export { createGallery, clearGallery, showLoader, hideLoader };
