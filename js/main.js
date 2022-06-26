const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperSlide = swiperWrapper.querySelectorAll('.swiper-slide');
const aboutSkills = document.querySelector('.about-skills');

// for swiper
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
                <div class="swiper-btns">
                    <a href="${project.preview}" class="project-preview" target="_blank">
                        <span>View Project</span>
                        <i data-feather="arrow-right"></i>
                    </a>
                    <a href="${project.link}" class="project-link" target="_blank">
                        <span>View Code</span>
                        <i data-feather="external-link"></i>
                    </a>
                </div>
            </div>`;
    swiperWrapper.appendChild(swiperSlide);
});