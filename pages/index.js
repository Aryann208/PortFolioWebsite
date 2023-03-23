import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import ProjectVJSImage1 from "./components/ExpandingCard.jpg";
import ProjectVJSImage2 from "./components/ProgressiveSteps.jpg";
import ProjectVJSImage3 from "./components/RotatingNavBar-1.jpg";
import ProjectVJSImage4 from "./components/RotatingNavBar-2.jpg";
import ProjectRJSImage1 from "./components/FoodOrder-1.jpg";
import ProjectRJSImage2 from "./components/FoodOrder-2.jpg";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import avatarPic from "../public/3D_Avatar_AT.png";
import classes from "./button.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-yellow-100 px-10">
        <section className=" min-h-screen">
          <nav className="py-5 mb-3 flex justify-between">
            <h1 className="text-xl font-burtons">WebDweebs</h1>
            <ul className="flex items-center ">
              <li className="mr-10">
                <a
                  target="_blank"
                  href="https://aryann208.github.io/React-Rundown-Projects-/"
                >
                 <strong className={classes.btn}>React Component Projects</strong>
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1tueZplt9LLTndSIxNVujkg9h8BMJWiLO/view?usp=share_link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80  overflow-hidden">
            <Image src={avatarPic} fill style={{ objectFit: "cover" }} />
          </div>
          <div className="text-center w-4/5 mx-auto py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium ">
              Aryan Trivedi
            </h2>
            <h3 className="text-2xl py-2">Front End Developer</h3>
            <p className="text-xl py-2 leading-8 text-gray-800 ">
              Hi , I am a Computer Science engineering student and Front end
              developer . I use <strong>React JS </strong> library to build my
              project and you can find some of my work in Project section in the
              navigation bar . This site is build using
              <strong> Next JS </strong>, a library for React itself and
              <strong> TailwindCSS</strong> for designing .
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aryan-trivedi-14279a190"
            >
              <AiFillLinkedin />
            </a>

            <a target="_blank" href="https://github.com/Aryann208">
              <AiFillGithub />
            </a>
            <AiFillYoutube />
          </div>
        </section>

        <section className="my-10 py-10 bg-gray-500">
          <div>
            <h2 className="text-5xl font-medium font-mono text-center   ">
              Projects
            </h2>
          </div>
          <div className=" bg-black w-11/12 mt-10 mx-auto">
            <h1 className="text-4xl font-mono text-center text-white py-3 ">
              React JS Project
            </h1>
            <div className="my-10 py-5 bg-gray-400">
              <h2 className=" ml-2 text-2xl text-white font-mono ">
                1. Food Order App ( React Foods)
              </h2>
              <p className="text-white ml-12 font-serif py-3  ">
                A React JS app that allows usre to place order from menu in
                desired quantity and after placing the order further modify
                using Cart button . The following project uses functionalities
                of React JS such as useState(), useEffect(),useContext().
              </p>
              <div className="w-11/12 mx-auto">
                <Image className="w-11/12" src={ProjectRJSImage1}></Image>
                <Image className="w-11/12" src={ProjectRJSImage2}></Image>
                <p className="text-white  font-serif py-3  ">
                  <div className={classes.btn_container}>
                    <a
                      target="_blank"
                      href="https://aryann208.github.io/FoodOrderReactApp/"
                    >
                      <button className={classes.btn}>Deployed Link</button>
                    </a>

                    <a
                      target="_blank"
                      href="https://github.com/Aryann208/Food-Order-React-App"
                    >
                      <button className={classes.btn}>Repo Link</button>
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-black w-11/12 mt-10 mx-auto">
            <h1 className="text-4xl font-mono text-center text-white py-3 ">
              Vanilla JavaScript Projects
            </h1>
            <div className="my-10 py-5 bg-gray-400">
              <h2 className=" ml-2 text-2xl text-white font-mono ">
                1. Expanding Cards
              </h2>
              <p className="text-white ml-12 font-serif py-3  ">
                In this designed component , Javascript is used to change the
                classes of different cards when the click event happens on the
                selected card leading to desired output .
              </p>
              <div className="w-11/12 mx-auto">
                <Image className="w-11/12" src={ProjectVJSImage1}></Image>
                <p className="text-white  font-serif py-3  ">
                  <div className={classes.btn_container}>
                    <a
                      target="_blank"
                      href="https://aryann208.github.io/Expanding-Cards/"
                    >
                      <button className={classes.btn}>Deployed Link</button>
                    </a>

                    <a
                      target="_blank"
                      href="https://github.com/Aryann208/Expanding-Cards.git"
                    >
                      <button className={classes.btn}>Repo Link</button>
                    </a>
                  </div>
                </p>
              </div>
            </div>
            <div className="my-10 py-5 bg-gray-400 rounded-2xl">
              <h2 className=" ml-2 text-2xl text-white font-mono ">
                2. Progress Steps
              </h2>
              <p className="text-white ml-12 font-serif py-3  ">
                In this designed component , Javascript is used to change the
                width and circle color with respect to current state of the step
              </p>
              <div className="w-11/12 mx-auto">
                <Image className="w-11/12" src={ProjectVJSImage2}></Image>
                <p className="text-white  font-serif py-3  ">
                  <div className={classes.btn_container}>
                    <a
                      target="_blank"
                      href="https://aryann208.github.io/Progress-Steps/"
                    >
                      <button className={classes.btn}>Deployed Link</button>
                    </a>

                    <a
                      target="_blank"
                      href="https://github.com/Aryann208/Progress-Steps"
                    >
                      <button className={classes.btn}>Repo Link</button>
                    </a>
                  </div>
                </p>
              </div>
            </div>
            <div className="my-10 py-5 bg-gray-400">
              <h2 className=" ml-2 text-2xl text-white font-mono ">
                3. Rotating NavBar
              </h2>
              <p className="text-white ml-12 font-serif py-3  ">
                In this designed component , Javascript is used to manipute and
                unhide the navbar that is placed under the main page . When the
                menu button is clicked the NavBar appears in slanting fashion .
              </p>
              <div className="w-11/12 mx-auto">
                <Image className="w-11/12" src={ProjectVJSImage3}></Image>
                <Image className="w-11/12 mt-5" src={ProjectVJSImage4}></Image>
                <p className="text-white  font-serif py-3  ">
                  <div className={classes.btn_container}>
                    <a
                      target="_blank"
                      href="https://aryann208.github.io/Rotating-Navbar/"
                    >
                      <button className={classes.btn}>Deployed Link</button>
                    </a>

                    <a
                      target="_blank"
                      href="https://github.com/Aryann208/Rotating-Navbar"
                    >
                      <button className={classes.btn}>Repo Link</button>
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-100 h-full  mt-20 bg-gray-600 flex ">
          <div className="  text-white bg-black w-full   ">
            <h3 className="text-4xl text-center p-5 font-medium font-serif">
              About Me
            </h3>
            <div className="px-10 mx-10">
              <p className="text-3xl  py-2 font-medium font-serif bg-white inline-block text-black rounded-full p-3 my-5">
                Education
              </p>
              <div className="p-3">
                <h2 className="text-2xl  font-medium font-serif">
                  Kalinga Institute of Industrial Technology
                </h2>
                <strong className="text-gray-400">2019- Ongoing</strong> <br />
                <strong className="mt-5 "> Bachelors in Technology</strong>
                <h2> Computer Science and System Engineering </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-5 ">
            <div className="flex align-center py-3 ">
              <div className=" bg-white w-7 h-7 flex justify-center items-center rounded-lg mx-3 ">
                <a target="_blank" href="https://github.com/Aryann208">
                  <AiFillGithub className=" text-2xl " />
                </a>
              </div>
              <span className="text-white">
                <a
                  target="_blank"
                  className="text-white"
                  href="https://github.com/Aryann208"
                >
                  Github Profile
                </a>
              </span>
            </div>

            <div className="flex align-center py-3 ">
              <div className=" bg-white w-7 h-7 flex justify-center items-center rounded-lg mx-3 ">
                <MdEmail className=" text-2xl " />
              </div>
              <span className="text-white"> aryantrivedi208@gmail.com</span>
            </div>

            <div className="flex align-center py-3">
              <div className=" bg-white w-7 h-7 flex justify-center items-center rounded-lg mx-3 ">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/aryan-trivedi-14279a190"
                >
                  <AiFillLinkedin className=" text-2xl " />
                </a>
              </div>
              <a
                target="_blank"
                className="text-white"
                href="https://www.linkedin.com/in/aryan-trivedi-14279a190"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
