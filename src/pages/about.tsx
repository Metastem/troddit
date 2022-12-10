/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import packageInfo from "../../package.json";
const VERSION = packageInfo.version;
const link = "text-th-link hover:underline hover:text-th-linkHover "
const AboutPage = ({ changelog }) => {
  return (
    <div className="h-screen mx-4 -mt-16">
      <Head>
        <title>troddit · about</title>
      </Head>
      <div className="h-full text-justify text-th-text ">
        <div className="flex flex-col justify-center max-w-xl min-h-full gap-4 mx-auto space-y-1 overflow-y-scroll scrollbar-none ">
          <p className="">
            Troddit is a web app for Reddit. Follow subreddits and users locally
            or login with your Reddit account to vote, comment, and manage your
            existing subscriptions.
          </p>

          <p className="">
            This is an independent site not affiliated with Reddit. All content
            on this site is retrieved from the public Reddit API.
          </p>
          
          <p className="">
            <Link href={"/changelog"}>
              <a className="flex flex-wrap justify-between pt-5 font-semibold hover:underline">
                <h4>v{VERSION}</h4>
                <h4>See Changelog</h4>
              </a>
            </Link>
          </p>
        </div>
        <div className="absolute left-0 w-full bottom-5 sm:bottom-20">
          <div className="flex items-center justify-between max-w-xl mx-4 sm:mx-auto">
            <a
              href="https://metastem.su/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="../logo/logo.png"
                alt="Try Metastem Search"
                className="h-10 transition-all rounded-md border-th-border hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
