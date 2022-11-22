import React from 'react';

export function About() {
    return (
        <>
            <main>
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
                            <span className="material-icons">plant@plantparenthood.com</span>
                        </a>
                    </p>
                    <p>© Plant Parenthood 2022</p>
                </div>
            </footer>
        </>

    );
}