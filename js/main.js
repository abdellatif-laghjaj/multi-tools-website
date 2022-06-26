const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperSlide = swiperWrapper.querySelectorAll('.swiper-slide');
const aboutSkills = document.querySelector('.about-skills');
const projectsSection = document.getElementById('projects');
const projectsContainer = projectsSection.querySelector('.container');

// for swiper
function showSwiperItems() {
    PROJECTS_DATA.filter(project => project.isPopular).forEach(project => {
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        swiperSlide.innerHTML = `
                <img src="${project.image}" alt="">
                <span class="popular">
                    <i data-feather="star"></i>
                </span>
                <div class="content">
                    <h3 class="title">${project.title}</h3>
                    <div class="techs-used">
                        ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="project-link" target="_blank">
                        <span>View Project</span>
                        <i data-feather="arrow-right"></i>
                    </a>
                </div>`;
        swiperWrapper.appendChild(swiperSlide);
    });
}


// for projects items
function showProjectsItems() {
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
}