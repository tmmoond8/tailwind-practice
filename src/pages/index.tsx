import type { NextPage } from 'next';
import NextImage from 'next/image';
import { SlidingBanner } from 'src/ components';
import banner01 from 'src/assets/images/banner_01.png';

const Home: NextPage = () => {
  const slides = useSlides();
  return (
    <main className=" text-3xl font-bold underline text-t">
      <SlidingBanner slides={slides} />
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="rounded-lg md:w-56"
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
            width="448"
            height="299"
            alt="Woman paying for a purchase"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
            Marketing
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-600">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;

function useSlides() {
  return [
    <div key="slide1" className="relative h-full w-full">
      <NextImage
        src={banner01}
        width="1440"
        height="530"
        sizes="100%"
        draggable={false}
      />
      <article className="absolute left-56 top-28">
        <h2 className="text-white text-5xl leading-tight">
          Collect And FLEXX
          <br /> Yeah, <br />
          That’s How You Freakin’
          <br /> COLLEXX
        </h2>
        <h4 className="text-white text-lg font-medium">
          Explore the world's first NFT Phygital marketplace
        </h4>
        <button className="bg-c_blue text-white text-sm py-3 px-4 rounded mt-4">
          Learn more
        </button>
      </article>
    </div>,
    <div key="slide1" className="relative h-full w-full">
      <NextImage
        src={banner01}
        width="1440"
        height="530"
        sizes="100%"
        draggable={false}
      />
      <article className="absolute left-56 top-28">
        <h2 className="text-white text-5xl leading-tight">
          22222222222222222
          <br /> Yeah, <br />
          That’s How You Freakin’
          <br /> COLLEXX
        </h2>
        <h4 className="text-white text-lg font-medium">
          Explore the world's first NFT Phygital marketplace
        </h4>
        <button className="bg-c_blue text-white text-sm py-3 px-4 rounded mt-4">
          Learn more
        </button>
      </article>
    </div>,
    <div key="slide1" className="relative h-full w-full">
      <NextImage
        src={banner01}
        width="1440"
        height="530"
        sizes="100%"
        draggable={false}
      />
      <article className="absolute left-56 top-28">
        <h2 className="text-white text-5xl leading-tight">
          33333333333333
          <br /> Yeah, <br />
          That’s How You Freakin’
          <br /> COLLEXX
        </h2>
        <h4 className="text-white text-lg font-medium">
          Explore the world's first NFT Phygital marketplace
        </h4>
        <button className="bg-c_blue text-white text-sm py-3 px-4 rounded mt-4">
          Learn more
        </button>
      </article>
    </div>,
    <div key="slide1" className="relative h-full w-full">
      <NextImage
        src={banner01}
        width="1440"
        height="530"
        sizes="100%"
        draggable={false}
      />
      <article className="absolute left-56 top-28">
        <h2 className="text-white text-5xl leading-tight">
          4444444444444444444
          <br /> Yeah, <br />
          That’s How You Freakin’
          <br /> COLLEXX
        </h2>
        <h4 className="text-white text-lg font-medium">
          Explore the world's first NFT Phygital marketplace
        </h4>
        <button className="bg-c_blue text-white text-sm py-3 px-4 rounded mt-4">
          Learn more
        </button>
      </article>
    </div>,
  ];
}
