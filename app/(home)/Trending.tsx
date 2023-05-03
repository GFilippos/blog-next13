import Link from 'next/link';
import React from 'react';

type TrendingCardProps = { className?: string };

const TrendingCard = ({ className }: TrendingCardProps) => {
  return (
    <Link
      href="/"
      //    href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
    >
      <div className="z-0 relative w-full h-full bg-wh-500">image</div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">category</h4>
        <div className="text-wh-100 mt-2">Post title</div>
      </div>
    </Link>
  );
};

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">TRENDING</div>
        <p className="text-sm">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old.
        </p>
      </div>

      {/* flex option  */}
      {/* <div className="flex justify-between gap-3 my-3">
        <div className="basis-1/2 bg-wh-500 h-96"></div>
        <div className="flex flex-col basis-1/2 gap-3 h-96">
          <div className="basis-1/2 bg-wh-500"></div>
          <div className="flex basis-1/2 gap-3">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="basis-1/2 bg-wh-500"></div>
          </div>
        </div>
      </div> */}

      {/* grid option  */}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard className="col-span-2 row-span-2 bg-wh-500 "></TrendingCard>
        <TrendingCard className="col-span-2 row-span-1 bg-wh-500 "></TrendingCard>
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500 "></TrendingCard>
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500 "></TrendingCard>
      </div>

      <p className="text-sm">
        The headphones were on. They had been utilized on purpose. She could hear her mom yelling in the background, but
        couldn't make out exactly what the yelling was about.
      </p>
    </section>
  );
};

export default Trending;
