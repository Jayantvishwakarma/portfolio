window.onload = function () {
  function handleClickLink(event) {
    const block = event.target.dataset.block;
    console.log(block);
    document.getElementById(block).scrollIntoView({ behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-item').forEach((elem) => {
    elem.addEventListener('click', handleClickLink);
  });

};
