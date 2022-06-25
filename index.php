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

        <div class="blob-anim">
            <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                <g transform="translate(452.3249138162694 296.1720385492431)">
                    <path id="blob-1" d="M146.7 -136.4C190.2 -103.2 225.6 -51.6 223.3 -2.4C220.9 46.9 180.8 93.8 137.3 135.5C93.8 177.1 46.9 213.6 5.8 207.8C-35.4 202 -70.7 154 -112.5 112.4C-154.4 70.7 -202.7 35.4 -220.4 -17.7C-238 -70.7 -225.1 -141.4 -183.3 -174.6C-141.4 -207.8 -70.7 -203.4 -9.5 -193.8C51.6 -184.3 103.2 -169.6 146.7 -136.4" fill="#BB004B">
                    </path>
                </g>

                <g transform="translate(437.86184131829555 324.6290600370678)" style="visibility: hidden;">
                    <path id="blob-2" d="M187.9 -180.1C234.4 -141.4 256.7 -70.7 239.5 -17.2C222.3 36.3 165.6 72.6 119.1 97.6C72.6 122.6 36.3 136.3 -15.6 151.9C-67.4 167.4 -134.8 184.8 -174 159.8C-213.2 134.8 -224.1 67.4 -220.3 3.8C-216.5 -59.9 -198.1 -119.7 -158.9 -158.4C-119.7 -197.1 -59.9 -214.5 5.4 -220C70.7 -225.4 141.4 -218.8 187.9 -180.1" fill="#BB004B">
                    </path>
                </g>
            </svg>
        </div>
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
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 4</div>
                    <div class="swiper-slide">Slide 5</div>
                    <div class="swiper-slide">Slide 6</div>
                    <div class="swiper-slide">Slide 7</div>
                    <div class="swiper-slide">Slide 8</div>
                    <div class="swiper-slide">Slide 9</div>
                </div>
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

    <!-- Kute.js -->
    <script src="https://cdn.jsdelivr.net/npm/kute.js@2.2.4/dist/kute.min.js"></script>

    <!-- JS -->
    <script src="js/theme_script.js"></script>
    <script src="js/main.js"></script>
    <script>
        feather.replace();

        // Swiper
        var swiper = new Swiper(".mySwiper", {
            effect: "cards",
            grabCursor: true,
        });

        //Kute Js
        const tween = KUTE.fromTo(
            "#blob-1",
            {path: "#blob-1"},
            {path: "#blob-2"},
            {repeat: 999, duration: 3000, yoyo: true}
        );
        tween.start();
    </script>
</body>

</html>