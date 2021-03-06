<!DOCTYPE html>
<html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--- Favicon -->
    <link rel="shortcut icon" href="assets/favicon.svg" type="image/x-icon">
    <!-- Css -->
    <link rel="stylesheet" href="style/style.css">
    <!-- <link rel="stylesheet" href="style/intro.css">
    <link rel="stylesheet" href="style/theme_popup.css">
    <link rel="stylesheet" href="style/about.css">
    <link rel="stylesheet" href="style/services.css">
    <link rel="stylesheet" href="style/projects.css">
    <link rel="stylesheet" href="style/contact.css"> -->
    <!-- Feather icons -->
    <script src="https://unpkg.com/feather-icons"></script>

    <!-- Swiper -->
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
    <title>Abdellatif Laghjaj | Personal Portfolio</title>
</head>

<body>
    <div class="loader">
        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_VRHN4h.json"  background="transparent"  speed="1"  style="width: 240px; height: 240px;"  loop autoplay>
        </lottie-player>
    </div>
    <!-- Header -->
    <section class="intro" id="intro">

        <!-- Blob -->
        <?php include 'components/blob.html'; ?>

        <header>
            <a href="" class="logo">Abdel<span>.</span></a>
            <nav>
                <ul class="navbar-links">
                    <li class="nav-link active-link">
                        <a href="#">Home</a>
                    </li>
                    <li class="nav-link">
                        <a href="#about">About</a>
                    </li>
                    <li class="nav-link">
                        <a href="#services">Services</a>
                    </li>
                    <li class="nav-link">
                        <a href="#projects">Projects</a>
                    </li>
                    <li class="nav-link">
                        <a href="#contact">Contact</a>
                    </li>
                    <li class="nav-link theme-icon">
                        <i data-feather="settings"></i>
                    </li>
                </ul>
            </nav>
        </header>

        <!-- Menu Button For Mobile -->
        <div class="menu-btn">
            <div class="menu-icon">
                <i data-feather="grid" class="menu-icon-fixed"></i>
            </div>
        </div>

        <!-- Intro Content -->
        <div class="intro-container">
            <!-- Intro content -->
            <div class="intro-text">
                <h1>Abdel<span>.</span></h1>
                <p>
                    Hello there, I'm <span style="color: var(--primary-color); font-weight: bold;">Abdellatif Laghjaj</span>, a passionate <span style="color: var(--primary-color); font-weight: bold;">full-stack</span> developer from <span style="color: var(--primary-color); font-weight: bold;">Morocco</span>. Here are some of my <span style="color: var(--primary-color); font-weight: bold;">featured</span> projects.
                </p>
                <a href="#projects" class="btn">
                    <span>Get Started</span>
                    <i data-feather="arrow-right"></i>
                </a>
            </div>
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <!-- <div class="swiper-slide" is-popular="true" data-category="web">
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="">
                        <span class="popular">
                            <i data-feather="star"></i>
                        </span>
                        <div class="content">
                            <h3 class="title">Project</h3>
                            <div class="techs-used">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JS</span>
                            </div>
                            <div class="swiper-btns">
                                <a href="#" class="project-preview" target="_blank">
                                    <span>View Project</span>
                                    <i data-feather="arrow-right"></i>
                                </a>
                                <a href="#" class="project-link" target="_blank">
                                    <span>View Code</span>
                                    <i data-feather="external-link"></i>
                                </a>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>

    <!-- about -->
    <?php include 'components/about.html'; ?>

    <!-- Services -->
    <?php include 'components/services.html'; ?>

    <!-- projects -->
    <?php include 'components/projects.html'; ?>

    <!-- contact -->
    <?php include 'components/contact.html'; ?>

    <!-- Theme Popup -->
    <?php include 'components/theme_popup.html'; ?>

    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- Kute.js -->
    <script src="https://cdn.jsdelivr.net/npm/kute.js@2.2.4/dist/kute.min.js"></script>

    <!-- JS -->
    <script>
        //check if bg-color is white or black
        if(document.documentElement.style.getPropertyValue('--bg-color') == '#F6FBF4') {
            window.addEventListener('scroll', function() {
                if(window.scrollY <= 40) {
                    $('header .logo').css('color', '#000');
                    $('header nav ul li a').css('color', '#000');
                    $('header nav ul li .theme-icon').css('color', '#000');
                } else {
                    $('header .logo').css('color', '#fff');
                    $('header nav ul li a').css('color', '#fff');
                    $('header nav ul li .theme-icon').css('color', '#fff');
                }
            });
        }
        
        //for loader
        const loader = document.querySelector('.loader');
        loader.style.display = 'none';
        // //wait 3 seconds before removing the loader
        // window.addEventListener('load', function() {
        //     setTimeout(function() {
        //         loader.style.display = 'none';
        //         $('.loader').fadeOut(500);
        //     }, 4000);
        // });
    </script>
    <script src="js/data.js"></script>
    <script src="js/fecth_projetcs_items.js"></script>
    <script src="js/fetch_swiper_items.js"></script>
    <script src="js/fetch_services_items.js"></script>
    <script src="js/theme_script.js"></script>
    <script src="js/useful_functions.js"></script>
    <script src="js/responsive_navbar.js"></script>
    <script src="js/animation.js"></script>
</body>

</html>