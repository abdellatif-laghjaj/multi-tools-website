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
    <link rel="stylesheet" href="style/theme_popup.css">
    <link rel="stylesheet" href="style/about.css">
    <!-- Feather icons -->
    <script src="https://unpkg.com/feather-icons"></script>
    <title>All in one website</title>
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
                        <a href="#contact">Contact</a>
                    </li>
                    <li class="nav-link theme-icon">
                        <i data-feather="settings"></i>
                    </li>
                </ul>
            </nav>
        </header>
    </section>

    <!-- about -->
    <?php include './components/about.html'; ?>

    <!-- about -->
    <?php include 'components/projects.html'; ?>

    <!-- about -->
    <?php include 'components/contact.html'; ?>

    <!-- Theme Popup -->
    <div class="theme-popup">
        <div class="theme-popup-inner">
            <div class="theme-popup-header">
                <h3>Customize your theme</h3>
                <div class="close-settings-btn">
                    <i data-feather="x"></i>
                </div>
            </div>
            <div class="theme-popup-body">
                <div class="color-picker">
                    <span class="color-item"></span>
                    <span class="color-item"></span>
                    <span class="color-item"></span>
                    <span class="color-item"></span>
                    <span class="color-item"></span>
                </div>
                <div class="theme-mode">
                    <div class="theme-item">
                        <i data-feather="sun"></i>
                        <span>Light</span>
                    </div>
                    <div class="theme-item dark-mode">
                        <i data-feather="moon"></i>
                        <span>Dark</span>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- JS -->
    <script src="js/theme_script.js"></script>
    <script src="js/main.js"></script>
    <script>
        feather.replace()
    </script>
</body>

</html>