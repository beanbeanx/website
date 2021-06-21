export function scrollTo(event) {
  event.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
  });
}
