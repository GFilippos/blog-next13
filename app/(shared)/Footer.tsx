import React from 'react';

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* First Column  */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which do not look even slightly believable.
          </p>
          <p>© GF Blog. All Rights Reserved.</p>
        </div>
        {/* Second Column  */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">random link</p>
          <p className="my-5">some other random link</p>
          <p>last random link</p>
          <p>© GF Blog. All Rights Reserved.</p>
        </div>
        {/* Third Column  */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Random text for contact info</p>
          <p>(1)4020-324-621</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
