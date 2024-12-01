import React from "react";
import BannerImg from "../assets/coffeeCover.jpg";

const TopBanner = () => {
  return (
    <div
      className="hero min-h-screen mt-16"
      style={{
        backgroundImage: `url(${BannerImg})`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Keep Awake For Peace</h1>
          <p className="mb-5n font-semibold">
            Make Your Mood Better Nd Smooth With Historical Coffee.Feel Better
            and Be More Productive And Always Take Challenges In Your Daily
            Life.
          </p>
          <button className="btn mt-5 bg-orange-900 text-white font-semibold">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
