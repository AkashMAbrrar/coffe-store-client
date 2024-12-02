import React from "react";
import aboutImg from "../assets/coffeeCover.jpg";
import Header from "./Header";

const About = () => {
  return (
    <div>
      <Header></Header>
      <div className="hero bg-base-200 min-h-screen mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={aboutImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              About Cafe|Cut And Many More !
            </h1>
            <p className="py-6">
              This is the one of the Biggest Coffee Organization In the world
              which is providing services with most purity and faith. And we
              feel very proud to be a part of your life.
            </p>
            <button className="btn btn-outline hover:bg-orange-800">
              See More{">"}
            </button>
          </div>
        </div>
      </div>

      <div className="collapse bg-base-200 w-full mx-auto">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default About;
