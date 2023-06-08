import Image from "next/image";
import banner from "../public/image-header-mobile.jpg";
import bannerDesktop from "../public/image-header-desktop.jpg";

import { Lexend_Deca } from "next/font/google";

const lexdec = Lexend_Deca({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid place-content-center min-h-screen">
      <div className="flex flex-col md:flex-row-reverse max-w-5xl rounded-lg overflow-hidden m-10">
        <div className="relative aspect-video w-full">
          <div>
            <Image
              src={banner}
              alt="banner image"
              fill={true}
              className="object-cover md:hidden"
            />
            <Image
              src={bannerDesktop}
              fill={true}
              alt="banner image"
              className="object-cover hidden md:block"
            />
          </div>
          <div className="bg-primary-4 w-full h-full left-0 top-0 absolute z-10 opacity-50"></div>
        </div>
        <div className="bg-primary-2 p-16 gap-8 grid text-center md:text-left">
          <h1 className="text-4xl font-semibold text-neutral-1">
            Get <span className="text-primary-3">insights</span> that help your
            business grow.
          </h1>
          <p className="text-neutral-3 text-sm leading-6 ">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex justify-between flex-col gap-8 md:flex-row self-end">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-1">10k+</h2>
              <p
                className={`text-neutral-3 text-xs tracking-widest uppercase ${lexdec.className}`}
              >
                Companies
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-neutral-1">314</h2>
              <p
                className={`text-neutral-3 text-xs tracking-widest uppercase ${lexdec.className}`}
              >
                Templates
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-neutral-1">12M+</h2>
              <p
                className={`text-neutral-3 text-xs tracking-widest uppercase ${lexdec.className}`}
              >
                Queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
