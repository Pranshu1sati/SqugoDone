import React from "react";
// import { title } from "@/components/primitives";

import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-6">About Us</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-gradient-to-t from-gray-900 to-gray-600 bg-gradient-to-r border-solid">
          <Image
            quality={100}
            height={900}
            width={700}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,`}
            src="/A1.JPG"
            alt="About Us Image"
            id="image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <p className="text-2xl mt-0 md:mt-0">
          At Squgo your fitness and well-being are our top priority. We
          specialize in providing premium gym gear, including high-quality knee
          braces, ankle braces, and elbow braces, designed to support your
          active lifestyle. Our products are meticulously crafted with the dual
          goal of preventing injuries and enhancing your workout experience. We
          understand the importance of reliable and effective gear in your
          fitness journey, which is why we are committed to offering products
          that not only safeguard your joints but also boost your performance.
          At Squgo, we are more than just a brand; we are a community of fitness
          enthusiasts who care deeply about our customers&apos; health and
          success. Trust us to be your partner in pursuing a stronger, safer,
          and more empowered you.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
