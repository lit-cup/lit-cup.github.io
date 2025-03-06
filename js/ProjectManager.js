// Description: This file contains the ProjectManager class which is responsible for managing the projects and displaying them in a modal.
//add Scroll disable and enable functionality -- 2025-03-06

const projectData = [
    {
        id: 'smart-door-system',
        title: 'Smart Door System',
        description: 'A smart door system that automatically unlocks the door when you approach it.',
        technologies: ['Android studio', 'MQTT', 'Linux'],
        image: 'images/personal-logo.svg',
        year: 2020,
        githubLink: 'https://link-to-github',
        challenges:[
            'The door system should be able to detect the user approaching the door.',
            'The door system should be get right signal via MQTT from Linux server.',
            'The door system should be send right signal'
        ]   
    }
];
class ProjectManager{
    constructor(projects){
        this.projects = projects;
        this.modalContainer = null;
        this.initalizeModal();
    }
    //initialize the modal container
    initalizeModal(){
        this.modalContainer = document.createElement('div');
        this.modalContainer.classList.add('project-modal');
        this.modalContainer.style.display = 'none';
        document.body.appendChild(this.modalContainer);

        this.modalContainer.addEventListener('click', (event) => {
            if(event.target === this.modalContainer){
                this.closeModal();
            }
        });
    }
    disableScroll(){
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = this.getSAcrollbarWidth() + 'px';
    }
    enableScroll(){ 
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }
    getSAcrollbarWidth(){
        return window.innerWidth - document.documentElement.clientWidth;
    }

    openProject(projectID){
        const project = this.projects.find(project => project.id === projectID);
        if(!project){
            console.error('Project not found');
            return;
        }
        //Create the modal content
        this.modalContainer.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <h2>${project.title}</h2>
                <img src="${project.image}" alt="${project.title}">
                <div class="project-details">
                    <h3>Description</h3>
                    <p>${project.description}</p>
                    <h3>Technologies</h3>
                    <div class Technologies>
                        ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                    </div>
                    <h3>Challenges OverCome</h3>
                    <ul>
                        ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                    </ul>
                    <div class="project-links">
                        ${project.githubLink ? `<a href="${project.githubLink}" target="_blank">View On Github</a>` : ''}
                    </div>
                </div>
            </div>
        `;
        //Add close button event functionality
        const closeButton = this.modalContainer.querySelector('.modal-close');
        closeButton.addEventListener('click', () => {
            this.closeModal();
        });
        //Show the modal
        this.modalContainer.style.display = 'block';
        this.disableScroll();
    }
    closeModal(){
        this.modalContainer.style.display = 'none';
        this.enableScroll();
    }
}
