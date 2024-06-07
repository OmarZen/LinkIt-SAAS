import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { AnimatedTooltip } from "@/components/global/animated-tooltip";
import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { clients, products, people } from "@/lib/constant";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center antialiased">
        <div className="max-w4xl mx-auto p-4 relative z-10 flex items-center justify-center flex-col"></div>
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With LinkIt
                </h1>
              </div>
            }
          >
          </ContainerScroll>
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section>
        <div className="flex flex-row items-center justify-center mb-10 w-full scale-150">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold text-neutral-600 dark:text-white">
              Our Team
            </h1>
            <p className="text-neutral-500 text-sm max-w-sm text-center dark:text-neutral-300">
              Get a glimpse of what our software is capable of. Just a heads up
              {"you'll"} never leave us after this!
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-60 pb-40 w-full scale-150">
          <AnimatedTooltip items={people} />
        </div>
      </section>
      <section>
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Hobby
                <h2 className="text-6xl ">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Pro Plan
                <h2 className="text-6xl ">$29</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Unlimited
                <h2 className="text-6xl ">$99</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
      <footer>
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col gap-28 items-center justify-center mt-20">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold text-neutral-600 dark:text-white">
              Ready to get started?
            </h1>
            <p className="text-neutral-500 text-sm max-w-sm text-center dark:text-neutral-300">
              Get a glimpse of what our software is capable of. Just a heads up
              {"you'll"} never leave us after this!
            </p>
            <Button
              size={'lg'}
              className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                Start For Free Today
              </span>
            </Button>
          </div>
          {/* Make here */}
          <div className="container mx-auto px-4 items-center justify-center">
            <div className="flex flex-wrap justify-between ml-16">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h2 className="text-lg font-semibold">About Us</h2>
                <p className="mt-2">
                  We are a team of passionate individuals committed to bringing you the best experience.
                </p>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h2 className="text-lg font-semibold">Quick Links</h2>
                <ul className="mt-2">
                  <li><a href="#" className="hover:underline">Home</a></li>
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Services</a></li>
                  <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h2 className="text-lg font-semibold">Contact Us</h2>
                <p className="mt-2">1234 Street Name, City, State, 12345</p>
                <p className="mt-2">Email: info@example.com</p>
                <p className="mt-2">Phone: (123) 456-7890</p>
                <div className="flex mt-4 space-x-4">
                  <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-sm">
              &copy; 2024 Your Company. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
