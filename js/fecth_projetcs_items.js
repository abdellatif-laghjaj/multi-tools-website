const projectsSection = document.getElementById('projects');
const projectsContainer = projectsSection.querySelector('.container');


// for projects items
PROJECTS_DATA.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('card');
    projectItem.innerHTML = `
            <div class="card-header">
              <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
            </div>
            <div class="card-body">
                <div class="techs-used">    
                    <span class="tag">HTML</span>
                    <span class="tag">CSS</span>
                    <span class="tag">JS</span>
                </div>
              <h4>Project 1</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, quasi dignissimos exercitationem iusto.
              </p>
            </div>

            <div class="project-btns">
                <a href="#">
                    View project
                    <i data-feather="arrow-right"></i>
                </a>
                <a href="#">
                    View code
                    <i data-feather="external-link"></i>
                </a>
            </div>`;
    projectsContainer.appendChild(projectItem);
});
