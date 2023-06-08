import React from "react";
import { Link } from "react-router-dom";
import front from "./images/front.png";
import front2 from "./images/front2.png";
import front3 from "./images/front3.png";
import insta from "./images/insta.svg";
import twiter from "./images/twiter.svg";
import fb from "./images/fb.svg";
export default function About() {
  return (
    <div>
      <div className="container d-flex justify-content-center flex-column">
        <h1 className="d-flex justify-content-center">
          Tame your work, organize your life
        </h1>
        <h4 className="mt-3">
          Remember everything and tackle any project with your notes, tasks, and
          schedule all in one place.
        </h4>
      </div>
      <form className="d-flex justify-content-center mt-5">
        <Link className="btn btn-dark mx-1 custombtn" to="/login" role="button">
          Login
        </Link>
        <Link className="btn btn-dark mx-1" to="/signup" role="button">
          Sign up
        </Link>
      </form>
      <div className="container custom1 d-flex justify-content-center mt-4">
        <img src={front} alt="" />
      </div>
      <div className="container">
        <div className="details">
          <h2>Hit every deadline</h2>
          <p>
            Create and assign tasks inside your notes with due dates, flags, and
            reminders so nothing falls through the cracks.
          </p>
        </div>
        <div className="image">
          <img src={front2} alt="" width="100%" />
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="image">
          <img src={front3} alt="" width="100%" />
        </div>
        <div className="details">
          <h2>Go paperless</h2>
          <p>
            Scan important documents and keep them handy on all your devices.
            Save the information—not the clutter.
          </p>
        </div>
      </div>
      <hr />
      <div className="container d-flex justify-content-center flex-column">
        <h1>What people are saying</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-2">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title text-center">MacWorld</h5>
                  <p className="card-text">
                    If you’re looking for a cross-platform note-taking tool with
                    just enough frills, it’s hard to look beyond Rehan
                    Diaries.Best app for taking notes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title text-center">TechCrunch</h5>
                  <p className="card-text">
                    If you’re not using Rehan Diaries, you’re missing out.It
                    feels like there are endless ways to use The Rehan Diaries
                    use it for school, work and beyond.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="card h-100">
                <div className="card-body ">
                  <h5 className="card-title text-center">Zapier</h5>
                  <p className="card-text">
                    If you want a truly distraction-free environment then you
                    can’t do better than Rehan Diaries for your note-taking
                    needs.Best app for notes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
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
