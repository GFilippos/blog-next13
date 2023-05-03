import React from 'react';
import SocialLinks from './SocialLinks';
import Subscribe from './Subscribe';

const Sidebar = () => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">Subscribe and follow</h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">advert image</div>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">About the blog</h4>
      <div className="bg-wh-900 my-8">profile image</div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">Geoffrey Epstein</h4>
      <p className="text-wh-500 text-center text-sm">
        Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning
        signs had been ignored in favor of the possibility, however remote, that it could actually happen.
      </p>
    </section>
  );
};

export default Sidebar;
