import React from "react";
import front from "./images/file.svg";
import front2 from "./images/search.svg";
import front3 from "./images/upd.svg";
import front4 from "./images/front4.svg";
import front5 from "./images/front5.svg";
import front6 from "./images/front6.svg";
import qoma from "./images/qoma.svg";
import insta from "./images/insta.svg";
import twiter from "./images/twiter.svg";
import fb from "./images/fb.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/Logo.jpg";

export default function Why() {
  const [quotes] = useState([
    "Rehan Diaries is a powerful tool that can help executives, entrepreneurs and creative people capture and arrange their ideas. All you have to do is use it.",
    "Rehan Diaries is a powerful tool for managing your tasks right alongside all of the information you work with every day.",
    "It feels like there are endless ways to use Rehan Diaries… Use it for school, work, life, and beyond.",
    "A few years ago, after my computer broke down and I lost all of the notes I had saved to my desktop, I finally decided to embrace the cloud and download Rehan Diaries. Since then, I haven’t looked back.",
    "You can even send emails to Rehan Diaries and gather all of the things you need in a single place.",
    "Consider Rehan Diaries to be your go-to hub for not just to-do lists but all of your notes. The organizational possibilities are expansive, and everything syncs across all of your devices that have the app enabled, so you’ll never miss a beat.",
  ]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div>
      <div className="container d-flex justify-content-center flex-column">
        <h1 className="d-flex justify-content-center fs-1">
          Why choose Rehan Diaries?
        </h1>
        <h4 className="mt-3">
          Rehan Diaries gives you everything you need to keep life
          organized—great note taking, project planning, and easy ways to find
          what you need, when you need it.
        </h4>
      </div>
      <div className="container d-flex justify-content-center flex-column">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-2">
              <div className="card shadow p-3 mb-5 bg-white rounded h-100">
                <div className="card-body">
                  <img src={front} alt="" />
                  <h5 className="card-title mt-3 fs-2">Keep it together</h5>
                  <p className="card-text">
                    Create a personal space for all your most important ideas
                    and information.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="card shadow p-3 mb-5 bg-white rounded h-100">
                <div className="card-body">
                  <img src={front2} alt="" />
                  <h5 className="card-title mt-3 fs-2">Find it fast</h5>
                  <p className="card-text">
                    Get the right note, right away with powerful search and
                    keyword tags.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="card shadow p-3 mb-5 bg-white rounded h-100 ">
                <div className="card-body ">
                  <img src={front3} alt="" />
                  <h5 className="card-title mt-2 fs-2">Take it anywhere</h5>
                  <p className="card-text">
                    Sync your notes to all your devices so they stay with you,
                    even if you’re offline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center flex-column">
        <h1 className="d-flex justify-content-center fs-1">
          Remember everything. Accomplish anything.
        </h1>
        <h4 className="mt-3">
          Rehan Diaries stands out to help you stay productive.
        </h4>
      </div>
      <div className="container d-flex justify-content-center flex-column">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-2">
              <div className="card shadow p-3 mb-5 bg-white rounded h-100">
                <div className="card-body">
                  <img src={front4} alt="" />
                  <h5 className="card-title mt-3 fs-2">
                    Flexible organization
                  </h5>
                  <p className="card-text">
                    Rehan Diaries doesn’t force you to organize a certain way.
                    Create a system of notebooks or don’t organize at all. Any
                    note is a quick search away.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="card shadow p-3 mb-5 bg-white rounded h-100">
                <div className="card-body">
                  <img src={front5} alt="" />
                  <h5 className="card-title mt-3 fs-2">Available everywhere</h5>
                  <p className="card-text">
                    Have an iPhone and a Windows computer? Android and Mac? Like
                    using Linux? Unlike most note-taking apps, Rehan Diaries
                    works on them all.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="card shadow p-3 mb-5 bg-white rounded h-100 ">
                <div className="card-body ">
                  <img src={front6} alt="" />
                  <h5 className="card-title mt-2 fs-2">Web application</h5>
                  <p className="card-text">
                    Many note-taking apps lack a fully functional web
                    application. Rehan Diaries Web offers a complete lineup of
                    features from any major browser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header text-center">
          <img src={qoma} alt="" />
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p className="text-center">{currentQuote}</p>
          </blockquote>
        </div>
        <div className="container d-flex justify-content-center flex-column">
          <h3 className="d-flex justify-content-center">
            Feel the calm of being more organized.
          </h3>
          <img
            className="logo mt-3 rounded"
            src={Logo}
            alt="The Rehan Diaries"
          />
          <Link className="btn btn-dark mx-1 mt-2" to="/signup" role="button">
            Let's get started
          </Link>
        </div>
      </div>
      <hr className="bold-line"></hr>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4 className="text-center">PRODUCT</h4>
              <ul className="list-unstyled ">
                <li>Why Rehan Diaries</li>
                <li>Rehan Diaries Free</li>
                <li>Rehan Diaries Personal</li>
                <li>Rehan Diaries Professional</li>
                <li>Rehan Diaries Teams</li>
                <li>Compare Plans</li>
                <li>Student Discount</li>
                <li>Download App</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="text-center">FEATURES</h4>
              <ul className="list-unstyled">
                <li>Web Clipper</li>
                <li>Templates</li>
                <li>Spaces</li>
                <li>Integrations</li>
                <li>Notes Sync</li>
                <li>PDF & Doc Search</li>
                <li>Search Handwriting</li>
                <li>Document Scanner</li>
                <li>Notebooks & Tags</li>
                <li>Tasks</li>
                <li>Calendar</li>
                <li>Home</li>
                <li>Search</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="text-center">RESOURCES</h4>
              <ul className="list-unstyled">
                <li>Resources</li>
                <li>Make Connections</li>
                <li>Become an Expert</li>
                <li>Find an Expert</li>
                <li>Early Access</li>
                <li>Affiliates</li>
                <li>Developers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="text-center">SUPPORT</h4>
              <ul className="list-unstyled">
                <li>Help & Learning</li>
                <li>Troubleshooting</li>
                <li>Forum</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="footer-logos">
              <a href="https://www.instagram.com/usamafarooqi.4/" target="blank"><img src={insta } alt="Instagram" /></a> 
              <a href="https://twitter.com/Usama_Farooqii" target="blank"><img src={twiter } alt="Twitter" /></a> 
              <a href="https://www.facebook.com/janjua.rajput.355" target="blank"><img src={ fb} alt="" /></a> 
            </div>
          </div>
        </div>
      </div>
      </footer>
      

    </div>
  );
}
