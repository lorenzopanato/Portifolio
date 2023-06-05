const projectsData = [
    {
        image: 'assets/images/todo.PNG',
        title: 'Todo List',
        text: 'Projeto desenvolvido com HTML, CSS e JavaScript, com o objetivo de ' +
        'praticar, principalmente, a manipulação de formulários, armazenamento de dados no LocalStorage, filtragem e ' +
        'pesquisa de itens.',
        buttonId: 'todoBtn',
        link: 'https://lorenzopanato.github.io/Todo-List/',
        gitHubLink: 'https://github.com/lorenzopanato/Todo-List'
    }, {
        image: 'assets/images/my store.PNG',
        title: 'My Store',
        text: 'Projeto básico desenvolvido com HTML, CSS e JavaScript, com o objetivo de ' +
        'praticar a manipulação de array e objetos, além da geração de elementos HTML com JavaScript.',
        formato: 'inverso',
        buttonId: 'myStoreBtn',
        link: 'https://lorenzopanato.github.io/My-Store/',
        gitHubLink: 'https://github.com/lorenzopanato/My-Store'
    }
];

const projectsContainer = document.querySelector('.js-projects-container');
let addProjects = '';

function generateHTML() {

    projectsData.forEach(project => {
        addProjects += `
            <div class="project-container" id="${project.formato}">
                <img src="${project.image}" class="project-image" alt="todo list image">
                <div class="project-text">
                    <h2>${project.title}</h2>
                    <p>${project.text}</p>
                    <div class="project-buttons">
                        <a href="${project.link}" target="_blank">
                            <button class="view-project-button" id="${project.buttonId}">Ver Projeto</button>
                        </a>

                        <a href="${project.gitHubLink}" target="_blank">
                            <img src="assets/icons/github.png" class="github-project-button" alt="github icon">
                        </a>
                    </div>
                </div>
            </div>`
    });

    projectsContainer.innerHTML = addProjects;
}

generateHTML();


