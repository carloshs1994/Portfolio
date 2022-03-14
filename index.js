window.onload = function () {
  const hamburgerMenu = document.querySelector('#menu-button');
  const menu = document.querySelector('#menu');
  const closeMenu = document.querySelector('#closeButton');
  const closeNavLink = document.querySelectorAll('li > a.Personal-information');
  const openAndClose = function () {
    menu.classList.toggle('visible');
  };
  hamburgerMenu.addEventListener('click', openAndClose);
  closeMenu.addEventListener('click', openAndClose);
  closeNavLink.forEach((element) => {
    element.addEventListener('click', openAndClose);
  });
  // ----------------------------------------------Array of projects
  const arrOfProjects = [
    {
      image: 'assets/awesome-books-1.png',
      title: 'Awesome Books',
      languages: ['CSS3', 'HTML', 'bootstrap', 'Ruby'],
      description: 'We created an app to store, display and remove books from localStorage and UI. This project has been built with the help of modern CSS3 and ES6. Check the live demo to try.',
      linkLiveVersion: 'https://carloshs1994.github.io/AwesomeBooks/',
      linkToSource: 'https://github.com/carloshs1994/AwesomeBooks',
    },
    {
      image: 'assets/market-overview.png',
      title: 'Market Overview',
      languages: ['React', 'Redux', 'SASS'],
      description: 'Market Overview is a website designed to showcase the US stock market. You could find details about the stock of choice and improve your strategies. Built using React, Redux, SASS, and tested using React testing library.',
      linkLiveVersion: 'https://carloshs1994.github.io/market-overview/',
      linkToSource: 'https://github.com/carloshs1994/market-overview',
    },
    {
      image: 'assets/SnapshootPortfolio.svg',
      title: 'Profesional Art Printing Data-2',
      languages: ['html', 'bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      linkLiveVersion: '#',
      linkToSource: '#',
    },
    {
      image: 'assets/SnapshootPortfolio.svg',
      title: 'Profesional Art Printing Data-3',
      languages: ['html', 'bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      linkLiveVersion: '#',
      linkToSource: '#',
    },
    {
      image: 'assets/SnapshootPortfolio.svg',
      title: 'Profesional Art Printing Data-4',
      languages: ['html', 'bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      linkLiveVersion: '#',
      linkToSource: '#',
    },
    {
      image: 'assets/SnapshootPortfolio.svg',
      title: 'Profesional Art Printing Data-5',
      languages: ['html', 'bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      linkLiveVersion: '#',
      linkToSource: '#',
    },
    {
      image: 'assets/SnapshootPortfolio.svg',
      title: 'Profesional Art Printing Data-6',
      languages: ['html', 'bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      linkLiveVersion: '#',
      linkToSource: '#',
    },
  ];

  const projects = arrOfProjects.map((element, index) => {
    const card = document.createElement('article');
    if (index === 0) {
      card.className = 'card principal-card';
      card.innerHTML = `
        <div class="feat-img-principal-card"></div>
        <div class="description-principal-card">
          <h3 class="description-title">${element.title}</h3>
          <p class="supporting-text-principal-card">${element.description}</p>
          <ul class="tag-holder">
            <li class="tag"><p class="css">${element.languages[0]}</p></li>
            <li class="tag"><p class="html">${element.languages[1]}</p></li>
            <li class="tag"><p class="bootstrap">${element.languages[2]}</p></li>
            <li class="tag"><p class="rubi">${element.languages[3]}</p></li>
          </ul>
          <button class="see-project main-button project-link" type="button">See Project</button>
        </div>
      `;
    } else {
      card.className = `card-${index} second-card`;
      card.innerHTML = `
        <div class="mask-group">
          <h4>${element.title}</h4>
          <p class="supporting-text-secondary-card">${element.description}</p>
          <ul class="tag-holder secondary-tag-holder">
            <li class="secondary-tag"><p class="html">${element.languages[0]}</p></li>
            <li class="secondary-tag"><p class="bootstrap">${element.languages[1]}</p></li>
            <li class="secondary-tag"><p class="rubi">${element.languages[2]}</p></li>
          </ul>
        </div>
        <button class="see-project secondary-button project-link">See Project</button>
      `;
    }
    return card;
  });
  const projectsSection = document.getElementById('works-section-id');
  for (let i = 0; i < projects.length; i += 1) {
    projectsSection.appendChild(projects[i]);
  }
  // ------------------------------------------------Modal

  const modalContainer = document.querySelector('.modal-container');
  const modal = document.getElementById('modal');

  const closeModal = () => {
    modal.innerHTML = '';
    modalContainer.setAttribute('style', 'display = none');
  };

  const openModal = (e) => {
    let currentTitle;
    if (e.target.classList[1] === 'main-button') {
      currentTitle = e.target.parentNode.children[0].innerHTML;
    } else {
      currentTitle = e.target.parentNode.children[0].children[0].innerHTML;
    }
    const project = arrOfProjects.filter((pro) => pro.title === currentTitle)[0];
    const modalHeader = document.createElement('div');
    const modalTop = document.createElement('div');
    const modalLanguages = document.createElement('ul');
    const modalWrap = document.createElement('div');

    modalTop.className = 'top';
    modalTop.innerHTML = `<h1 class="display-2">${project.title}</h1>
      <span id="close_modal" class="close-modal">x</span>`;
    modalLanguages.className = 'modal-languages';
    for (let i = 0; i < project.languages.length; i += 1) {
      const listElement = document.createElement('li');
      listElement.className = 'modal-language';
      listElement.innerHTML = project.languages[i];
      modalLanguages.appendChild(listElement);
    }
    modalHeader.className = 'modal-header';
    modalHeader.append(modalTop, modalLanguages);

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrap';
    imageWrapper.innerHTML = `<img src="${project.image}" alt="${project.title}" class="modal-image">`;
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = `
      <p class="par">${project.description}</p>
      <div class="go-to-wrapper">
          <a href="${project.linkLiveVersion}" class="see-project">See live<i class="fas fa-external-link-alt"></i></a>
          <a href="${project.linkToSource}" class="see-project">See source<i class="fab fa-github"></i></a>
      </div>
    `;
    modalWrap.className = 'body-wrap';
    modalWrap.append(imageWrapper, modalBody);
    modal.className = 'modal';
    modal.append(modalHeader, modalWrap);
    const closeModalButton = document.querySelector('#close_modal');
    closeModalButton.addEventListener('click', closeModal);
    modalContainer.setAttribute('style', 'display: flex');
  };

  const projectButtons = document.querySelectorAll('.project-link');
  projectButtons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  const form = document.getElementById('form');
  const email = document.getElementById('email');

  const closeError = ({ target }) => {
    document.getElementById('form-button').disabled = false;
    document.querySelector('body').removeChild(target.parentNode);
  };
  const showError = (message) => {
    const error = document.createElement('div');
    error.className = 'error';
    error.innerHTML = `<span id="close_error" class="close-error">x</span>
      <p class="supporting-text">${message}</p>
      <button id="ok_error" class="see-project">Ok</button>
      `;
    document.querySelector('body').appendChild(error);
    document.querySelector('#close_error').addEventListener('click', closeError);
    document.querySelector('#ok_error').addEventListener('click', closeError);
  };
  form.addEventListener('submit', (e) => {
    if (email.value !== email.value.toLowerCase()) {
      showError('The email should be lower-case!');
      e.preventDefault();
      e.target[3].disabled = true;
    }
    e.preventDefault();
  });
};
