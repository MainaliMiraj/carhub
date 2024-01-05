"use client";
import Image from "next/image";
import { CustomButton } from ".";

function Hero() {
  const handleClick = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Easily locate, reserve, or lease a car!</h1>
        <p className="hero__subtitle">
          Simplify your experience when renting a car through our
          straightforward booking procedure.
        </p>
        <CustomButton
          title="Explore cars"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={() => {
            handleClick;
          }}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />

          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
