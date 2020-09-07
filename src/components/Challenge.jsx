import React, { Component } from "react"
import { FaArrowRight, FaGlobe, FaCompass, FaMap, FaHeart } from "react-icons/fa"
import "./style/challengeStyle.scss"


class Challenge extends Component {
    render() {
        return (
            <body>
                {/* navigation */}
                <div className="navigation">
                    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                    <label htmlFor="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>
                    <div className="navigation__background">&nbsp;</div>
                    <nav className="navigation__nav">
                        <ul className="navigation__list">
                            <li className="navigation__item"><a className="navigation__link" href="#"><span>1</span>About Natous</a></li>
                            <li className="navigation__item"><a className="navigation__link" href="#"><span>2</span>Your benefits</a></li>
                            <li className="navigation__item"><a className="navigation__link" href="#"><span>3</span>Popular tours</a></li>
                            <li className="navigation__item"><a className="navigation__link" href="#"><span>4</span>Stories</a></li>
                            <li className="navigation__item"><a className="navigation__link" href="#"><span>5</span>Book now</a></li>
                        </ul>
                    </nav>
                </div>
                {/* header */}
                <div className="header">
                    <img src={require("../assets/image/logo-white.png")} alt="logo" className="header__logo" />
                    <span className="header__text-1">out doors</span>
                    <span className="header__text-2">is were life happens</span>
                    <button className="header__btn btn">discover  ours  tour</button>
                </div>
                {/* Main */}
                <main className="main">
                    {/* section-about */}
                    <div className="section-about">
                        <h2 className="section-about__h2">Exiting tours for adventurous people</h2>
                        <div className="section-about__div">
                            <div className="section-about section-about__text">
                                <h3>you are going to fall in love with nature</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quis amet distinctio, earum harum perspiciatis atque consequatur? Earum inventore molestias quasi placeat nemo voluptatem exercitationem quidem, neque tempora vitae sapiente.</p>
                                <h3>live adventures like you never have before</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quis amet distinctio, earum harum perspiciatis atque consequatur? Earum inventore molestias quasi placeat nemo voluptatem exercitationem quidem, neque tempora vitae sapiente.</p>
                                <button className="section-about__btn greenBtn">Learn more <FaArrowRight className={"btn_icon"} /></button>
                            </div>
                            <div className="section-about__image">
                                <img src={require("../assets/image/nat-1.jpg")} alt="section-1 image-1" className="section-about__image__1" />
                                <img src={require("../assets/image/nat-2.jpg")} alt="section-2 image-2" className="section-about__image__2" />
                                <img src={require("../assets/image/nat-3.jpg")} alt="section-3 image-3" className="section-about__image__3" />
                            </div>
                        </div>
                    </div>
                    {/* Section Feature */}
                    <div className="section-feature">
                        <div className="section-feature__features">
                            <FaGlobe className="section-feature__icon" />
                            <h3>explore the world</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad minima nulla soluta nostrum sed veniam repellendus blanditiis, eum iure autem!</p>
                        </div>
                        <div className="section-feature__features">
                            <FaCompass className="section-feature__icon" />
                            <h3>explore the world</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad minima nulla soluta nostrum sed veniam repellendus blanditiis, eum iure autem!</p>
                        </div>
                        <div className="section-feature__features">
                            <FaMap className="section-feature__icon" />
                            <h3>find your way</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad minima nulla soluta nostrum sed veniam repellendus blanditiis, eum iure autem!</p>
                        </div>
                        <div className="section-feature__features">
                            <FaHeart className="section-feature__icon" />
                            <h3>live a heathier lift</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad minima nulla soluta nostrum sed veniam repellendus blanditiis, eum iure autem!</p>
                        </div>
                    </div>
                    {/* section-tour */}
                    <div className="section-tour">
                        <div className="section-tour__header">
                            <h2>Most Popular tours</h2>
                        </div>
                        <div className="body">
                            <div className="card">
                                <div className="card__front">
                                    <div className="card__picture card__picture--1">
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">
                                            the Sea Explorer
                                        </span>
                                    </h4>
                                    <div className="card__detail">
                                        <p>3 day tours</p>
                                        <p>Up to 30 people</p>
                                        <p>2 tour guides</p>
                                        <p>Sleep in cozy hotels</p>
                                        <p>Difficulty:easy</p>
                                    </div>
                                </div>
                                <div className="card__back card__back__1">
                                    <div className="card__price">
                                        <p>only</p>
                                        <p>$297</p>
                                        <button className="card__price__btn">Book Now!</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__front">
                                    <div className="card__picture card__picture--2">
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">
                                            the forest hiker
                                        </span>
                                    </h4>
                                    <div className="card__detail">
                                        <p>7 day tours</p>
                                        <p>Up to 40 people</p>
                                        <p>6 tour guides</p>
                                        <p>Sleep in provided tents</p>
                                        <p>Difficulty:madium</p>
                                    </div>
                                </div>
                                <div className="card__back card__back__2">
                                    <div className="card__price">
                                        <p>only</p>
                                        <p>$497</p>
                                        <button className="card__price__btn">Book Now!</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__front">
                                    <div className="card__picture card__picture--3">
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">
                                            the snow adventurer
                                        </span>
                                    </h4>
                                    <div className="card__detail">
                                        <p>5 day tours</p>
                                        <p>Up to 15 people</p>
                                        <p>3 tour guides</p>
                                        <p>Sleep in provided tents</p>
                                        <p>Difficulty:hard</p>
                                    </div>
                                </div>
                                <div className="card__back card__back__3">
                                    <div className="card__price">
                                        <p>only</p>
                                        <p>$897</p>
                                        <button className="card__price__btn">Book Now!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tour__btn">
                            <button className="tour__btn__btn btn-2-green">discover all tours</button>
                        </div>
                    </div>
                    {/* section-story */}
                    <div className="section-story">
                        <div className="video">
                            <video className="video__content" autoPlay muted loop>
                                <source src={require("../assets/image/video.mp4")} type="video/mp4" />
                                <source src={require("../assets/image/video.webm")} type="video/webm" />
                            </video>
                        </div>
                        <div className="headerStory">
                            <h2>WE MAKE PEOPLE GENUINELY HAPPY</h2>
                        </div>
                        <div className="storyBox">
                            <div className="storyBox__box">
                                < div className="storyBox__box__img">
                                    <img src={require("../assets/image/nat-8.jpg")} alt="storyImage" />
                                </div>
                                <div className="storyBox__box__text">
                                    <h3>I HAD THE BEST WEEK EVER WITH MY FAMILY</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos excepturi laudantium sunt dolores possimus quibusdam inventore, sed unde consequuntur mollitia debitis nesciunt odit ipsa provident quas quae aliquam! Deleniti delectus voluptatem doloribus aperiam!</p>
                                </div>
                            </div>
                            <div className="storyBox__box">
                                < div className="storyBox__box__img">
                                    <img src={require("../assets/image/nat-9.jpg")} alt="storyImage" />
                                </div>
                                <div className="storyBox__box__text">
                                    <h3>WOW! MY LIFE IS COMPLETELY DIFFERENT NOW</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos excepturi laudantium sunt dolores possimus quibusdam inventore, sed unde consequuntur mollitia debitis nesciunt odit ipsa provident quas quae aliquam! Deleniti delectus voluptatem doloribus aperiam!</p>
                                </div>
                            </div>
                        </div>
                        <div className="story_btn">
                            <button className="story_btn__btn greenBtn">Read All Storise <FaArrowRight className="btn_icon" /></button>
                        </div>
                    </div>
                    {/* section-book */}
                    <div className="section-book">
                        <div className="section-book__image">
                            <div className="input">
                                <h2>Start booking now</h2>
                                <div className="inputs">
                                    <input placeholder="Full Name :" className={"input-fild"} type="text" id="name" required />
                                    <input placeholder="Email Address :" className={"input-fild"} type="email" id="email" required />
                                </div>
                                <div className="check-box">
                                    <input className="checkbox-fild" type="checkbox" id="large" name="large" value="large" />
                                    <label className="checkbox-fild-lable" for="large">Large tour group</label>
                                    <input className="checkbox-fild" type="checkbox" id="small" name="small" value="small" />
                                    <label className="checkbox-fild-lable" for="small">Small tour group</label>
                                </div>
                                <div className="book-btn">
                                    <button className="book-btn btn-2-green ">Next Step</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                {/* Footer */}
                <footer className="footer">
                    <div className="footer-logo">
                        <img src={require("../assets/image/logo-green-1x.png")} alt="" />
                    </div>
                    <div className="footer-navigation">
                        <div className="footer-menu">
                            <ul className="footer-list">
                                <li className="footer-item"><a className="footer-link" href="#">Company</a></li>
                                <li className="footer-item"><a className="footer-link" href="#">Contact us</a></li>
                                <li className="footer-item"><a className="footer-link" href="#">Carrers</a></li>
                                <li className="footer-item"><a className="footer-link" href="#">Privacy Policy</a></li>
                                <li className="footer-item"><a className="footer-link" href="#">Terms</a></li>
                            </ul>
                        </div>
                        <div className="footer-text">
                            <div className="footer-text-area">
                                <p>
                                    Built my <a className="link" href="#"><i>JONAS SCHMEDTMANN</i></a> for this online course
                                 <a href="#" className="link"><i> ADVANSE CSS AND SASS</i></a> Copyright
                                 by Jonas Schmedtmann. You are 100% allowed to use this web page for
                                 both personal and commerial use , but NOT to claim it as you
                                  design. A credit to the original author , Jonas Schmedtmann,
                                  is of course highly appreciated!
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        )
    }
}

export default Challenge