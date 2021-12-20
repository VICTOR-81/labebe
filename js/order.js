document.addEventListener('DOMContentLoaded', function() {

  const tabs = document.querySelector('.order__tabs');
  const content = document.querySelectorAll('.order__content');

  const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
      tabs.children[i].classList.remove('active__order-tab');
    }
    el.classList.add('active__order-tab');
  };
  
  tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.tab;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++) {
      content[i].classList.remove('show');
      if(content[i].dataset.content === currTab) {
        content[i].classList.add('show');
      }
    }
  });


});