import React from 'react';
import SocialLinks from './SocialLinks';
import Subscribe from './Subscribe';
import Image from 'next/image';
import Ad2 from '/public/assets/ad-2.png';
import AboutProfile from '/public/assets/about-profile.jpg';

const Sidebar = () => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">Subscribe and follow</h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <Image
        className="hidden md:block my-8 w-full"
        style={{ objectFit: 'cover' }}
        alt="advert-3"
        src={Ad2}
        placeholder="blur"
        width={500}
        height={1000}
      />
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">About the blog</h4>
      <div className="flex justify-center my-3">
        <Image
          style={{ width: '500px', height: '250px', objectFit: 'cover' }}
          alt="about-profile"
          src={AboutProfile}
          placeholder="blur"
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">Geoffrey Epstein</h4>
      <p className="text-wh-500 text-center text-sm">
        Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning
        signs had been ignored in favor of the possibility, however remote, that it could actually happen.
      </p>
    </section>
  );
};

export default Sidebar;
