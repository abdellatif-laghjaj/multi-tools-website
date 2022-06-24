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
    <div class="main">
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
        </section>

        <!-- about -->
        <?php include 'components/about.html'; ?>

        <!-- projects -->
        <?php include 'components/projects.html'; ?>

        <!-- contact -->
        <?php include 'components/contact.html'; ?>

        <!-- Theme Popup -->
        <?php include 'components/theme_popup.html'; ?>
    </div>

    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- JS -->
    <script src="js/theme_script.js"></script>
    <script src="js/main.js"></script>
    <script>
        feather.replace();
    </script>
</body>

</html>