import React from 'react';

export function Quiz() {
    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="author" content="Kriti Vajjhula, Ishita Saxena, Archita Singh, Manu Charu" />
                <meta name="description" content="This is the homepage to our website" />

                <title>Quiz</title>
                <link rel="icon" type="image/png" href="./img/plant-icon-white.png" />

                {/* link font */}
                <link href="https://fonts.googleapis.com" />
                <link href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900" rel="stylesheet" />
                
                {/* link bootstrap */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="css/style.css" />
            </head>

            <body class="quiz-body">
                <div className="body-container">
                    <nav class="navbar-expand">
                        <div>
                            <ul class="nav">
                            <li class="nav-link"><a href="index.html">Home</a></li>
                            <li class="nav-link"><a href="quiz.html">Quiz</a></li>
                            <li class="nav-link"><a href="calendar.html">Calendar</a></li>
                            <li class="nav-link"><a href="explore.html">Explore</a></li>
                            <li class="nav-link"><a href="about.html">About</a></li>
                            <div class="button-right">
                                <button class="btn btn-light" aria-label="login">Login</button>
                                <button class="btn btn-light" aria-label="sign up">Sign Up</button>
                            </div>
                            </ul>
                        </div>
                    </nav>
                    
                    <section id="quiz-start"> 
                        <header className="quiz-header">
                            <div className="quiz-container">
                                <h1>Discover the plant that will fit you!</h1>
                            </div>
                        </header>

                        <div className="quiz-contain">
                            <button className="btn btn-light" aria-label="start quiz"><a href="./questionTemplate.html">Start Quiz</a></button>
                        </div>
                    <div class="quiz-contain">
                    <button class="btn btn-light" aria-label="start quiz">
                        <a href="./questionTemplate.html" className="big-start">Start Quiz</a>
                    </button>
                    </div>
                    </section>
                </div>
            </body>
        </div>
    )
}