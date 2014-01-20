window.onscroll = function(e) {
  h = document.getElementById('header');
  c = document.getElementById('project-content');
  if (document.body.scrollTop > h.offsetTop) {
    if (document.body.scrollTop > c.offsetTop) {
      h.className = 'sticky';
    } else {
      h.className = 'sticky in-header';
    }
  }

  if (document.body.scrollTop < 240) {
    h.className = '';
  }
}
