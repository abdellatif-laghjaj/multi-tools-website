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
    <link rel="stylesheet" href="style/intro.css">
    <link rel="stylesheet" href="style/theme_popup.css">
    <link rel="stylesheet" href="style/about.css">
    <link rel="stylesheet" href="style/projects.css">
    <link rel="stylesheet" href="style/contact.css">
    <!-- Feather icons -->
    <script src="https://unpkg.com/feather-icons"></script>

    <!-- Swiper -->
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>

    <title>Tooly | Multi tools web app</title>
</head>

<body>
    <!-- Header -->
    <section class="intro" id="intro">
        <header>
            <a href="" class="logo">Tooly<span>.</span></a>
            <nav>
                <ul>
                    <li class="nav-link active-link">
                        <a href="#">Home</a>
                    </li>
                    <li class="nav-link">
                        <a href="#about">About</a>
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

        <div class="intro-container">
            <!-- Intro content -->
            <div class="intro-text">
                <h1>Tooly<span>.</span></h1>
                <p>
                    A multi tools web app that you can use to do many things.
                </p>
                <a href="#projects" class="btn">
                    <span>Get Started</span>
                    <i data-feather="arrow-right"></i>
                </a>
            </div>
            <div class="popular-projects">
                <div class="swiper">
                    <div class="swiper-slide">1</div>
                    <div class="swiper-slide">2</div>
                    <div class="swiper-slide">3</div>
                </div>

                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <!-- If we need scrollbar -->
                <div class="swiper-scrollbar"></div>
            </div>
        </div>
    </section>

    <!-- about -->
    <?php include 'components/about.html'; ?>

    <!-- projects -->
    <?php include 'components/projects.html'; ?>

    <!-- contact -->
    <?php include 'components/contact.html'; ?>

    <!-- Theme Popup -->
    <?php include 'components/theme_popup.html'; ?>

    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- JS -->
    <script src="js/theme_script.js"></script>
    <script src="js/main.js"></script>
    <script>
        feather.replace();

        // Swiper
        var swiper = new Swiper('.swiper', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    </script>
</body>

</html>