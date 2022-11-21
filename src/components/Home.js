import React from 'react';

export function Home() {
    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta
                    name="author"
                    content="Kriti Vajjhula, Ishita Saxena, Archita Singh, Manu Charu"
                />
                <meta name="description" content="This is the homepage to our website" />
                <title>Plant Parenthood</title>
                <link rel="icon" type="image/png" href="./img/plant-icon-white.png" />
                {/* link font */}
                <link href="https://fonts.googleapis.com" />
                <link href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900"
                    rel="stylesheet"
                />
                {/* link bootstrap */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
                />
                <link rel="stylesheet" href="css/style.css" />
                {/* Linking Pages */}
            </head>

            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div id="backdrop-container" className="col"></div>
                    <div className="col">
                        <img
                            className="plant"
                            src="img/plant-icon-green.png"
                            alt="plant icon"
                        />
                        <h1>Plant Parenthood</h1>
                        <h2>Start your plant journey today</h2>
                        <h2>Explore different types of plants</h2>
                        <h2>Take the quiz to find the plants that work best for you</h2>
                        <h2>Use the calendar to track your watering schedule</h2>
                        <button className="btn btn-light" aria-label="login">
                            Login
                        </button>
                        <button className="btn btn-light" aria-label="sign up">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <footer>
                <cite>© Alp Duran https://unsplash.com/photos/5MrddkW_Cbg</cite>
            </footer>
        </>

    );
}