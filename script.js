function getModal(inp) {
  let title = document.querySelector(`.css-gallery-${inp} span`).innerHTML;
  title = title.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
  let element = document.querySelector(`.css-gallery-${inp}`)
  let style = getComputedStyle(element);
  let url = style['background-image'];
  url = url.slice(5, url.length - 2);
  document.querySelector('#modalCenterTitle').innerHTML = title;
  document.querySelector('#modalCenter img').src = url;
}