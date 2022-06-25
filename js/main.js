const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperSlide = swiperWrapper.querySelectorAll('.swiper-slide');

// for swiper

PROJECTS_DATA.filter(project => project.isPopular).forEach(project => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperSlide.innerHTML = `
            <img src="${project.image}" alt="">
            <span class="popular">
                <ion-icon name="flame-sharp"></ion-icon>
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