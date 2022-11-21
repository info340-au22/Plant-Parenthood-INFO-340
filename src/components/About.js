import React from 'react';

export function About() {
    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta
                    name="author"
                    content="Kriti Vajjhula, Ishita Saxena, Archita Singh, Manu Charu"
                />
                <meta name="description" content="This is the about page for our website" />
                <title>About</title>
                <link rel="icon" type="image/png" href="img/plant-icon-white.png" />
                {/* link font */}
                <link href="https://fonts.googleapis.com" />
                <link href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900"
                    rel="stylesheet"
                />
            </head>
            {/* link Bootstrap */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
            />
            <link rel="stylesheet" href="css/style.css" />
            {/* link Material Icons */}
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
            <main>
                <nav className="navbar-expand">
                    <div>
                        <ul className="nav">
                            <li className="nav-link">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="nav-link">
                                <a href="quiz.html">Quiz</a>
                            </li>
                            <li className="nav-link">
                                <a href="calendar.html">Calendar</a>
                            </li>
                            <li className="nav-link">
                                <a href="explore.html">Explore</a>
                            </li>
                            <li className="nav-link">
                                <a href="about.html">About</a>
                            </li>
                            <div className="button-right">
                                <button className="btn btn-light" aria-label="login">
                                    Login
                                </button>
                                <button className="btn btn-light" aria-label="sign up">
                                    Sign Up
                                </button>
                            </div>
                        </ul>
                    </div>
                </nav>
                <section className="about-text">
                    <div className="container">
                        <h1>About Us</h1>
                        <p>
                            Created by: Kriti Vajjhula, Ishita Saxena, Archita Singh, Manu Charu
                        </p>
                        <h2>Why plant care?</h2>
                        <p>
                            Plant care refers to providing plants with proper nutrients, so that
                            they can continue to grow. The issue is that a lot of new plant owners
                            generally don’t know where to start with this because there are a lot
                            of different factors that go into caring for a plant. It is an all too
                            common occurrence to see someone purchase a plant for their home with
                            the intention of paying attention to its needs with consistency, but
                            end up not able to keep up with the care that is required. Often, the
                            issue ends up being that instructions for proper care aren’t made
                            aware to the plant owner or that the owner doesn’t have the knowledge
                            or awareness to choose a plant that best fits their lifestyle. We
                            believe that even experienced plant owners could benefit from a single
                            resource that displays species suggestions, care tips, etc. A web app
                            could find these users’ preferences, provide them with helpful
                            information, and help them nurture their plants.
                        </p>
                    </div>
                </section>
            </main>
            <footer>
                <div>
                    <p className="contact-text">Contact Us!</p>
                    <p>
                        <a href="mailto:plant@plantparenthood.com">
                            <span className="material-icons">email</span>plant@plantparenthood.com
                        </a>
                    </p>
                    <p>© Plant Parenthood 2022</p>
                </div>
            </footer>
        </>

    );
}