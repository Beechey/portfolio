import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { MagicButton } from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { TypewriterEffectSmooth } from "../ui/TypingEffect";
import { HomeHeroWords } from "@/data";

const Hero = () => {
  const HomeHeroWords2 = [
    {
      text: "Transforming",
    },
    {
      text: "Ideas",
    },
    {
      text: "Into",
    },
    {
      text: "Great",
      className: "text-blue-500 dark:text-blue",
    },
    {
      text: "Products.",
      className: "text-blue-500 dark:text-blue",
    },
  ];

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Engineering the future
          </p> */}

          <TypewriterEffectSmooth
            words={HomeHeroWords}
            className="md:max-w-base md:tracking-wider"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-2xl">
            Hi! I&apos;m Matt, a machine learning engineer, researcher, and
            developer.
          </p>

          <a href="#about">
            <MagicButton
              title="Get my CV"
              icon={<FaLocationArrow />}
              position="left"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
