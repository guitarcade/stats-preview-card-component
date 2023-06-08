import Image from "next/image";
import banner from "../public/image-header-desktop.jpg";

import { Lexend_Deca } from "next/font/google";

const lexdec = Lexend_Deca({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid place-content-center min-h-screen">
      <div className="flex max-w-[1100px] rounded-lg overflow-hidden">
        <div className="bg-primary-2 py-16 pl-16 pr-28 grid">
          <h1 className="text-4xl font-semibold text-neutral-1">
            Get <span className="text-primary-3">insights</span> that help your
            business grow.
          </h1>
          <p className="text-neutral-3 text-sm leading-6 ">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex justify-between self-end">
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
        <div className="relative">
          <Image src={banner} alt="banner image" className="max-w-[542px]" />
          <div className="bg-primary-4 w-full h-full left-0 top-0 absolute z-10 opacity-50"></div>
        </div>
      </div>
    </main>
  );
}
