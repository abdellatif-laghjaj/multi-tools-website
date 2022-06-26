const projectsSection = document.getElementById('projects');
const projectsContainer = projectsSection.querySelector('.container');


// for projects items
PROJECTS_DATA.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('card');
    projectItem.innerHTML = `
            ${
                project.isPopular ? `
                <span class="popular">
                    <i data-feather="star"></i>
                </span>` : ''
            }
            <div class="card-header">
              <img src="${project.image}" alt="rover" />
            </div>
            <div class="card-body">
                <div class="techs-used">
                    ${project.tech.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
              <h4>${project.title}</h4>
              <p>
                ${project.description}
              </p>
            </div>

            <div class="project-btns">
                <a href="${project.preview}" target="_blank">
                    View project
                    <i data-feather="arrow-right"></i>
                </a>
                <a href="${project.link}" target="_blank">
                    View code
                    <i data-feather="external-link"></i>
                </a>
            </div>`;
    projectsContainer.appendChild(projectItem);
});
