import Image from "next/image";
import CallNow from "./components/CallNow";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-5xl w-full">
        <div className="flex flex-row items-center gap-4">
          <Image
            src="/sunny_logo.jpg"
            alt="Sunny's Hair Studio Logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-5xl font-bold">Sunny & Crew Hair Services</h1>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg mt-2">
          For over 10 years, Sunny & Crew have been providing top-notch haircuts to men and women in Durham, NC.
            Whether you're looking for a fresh cut, vibrant color, or an elegant style, 
            we are here to make you shine!
          </p>
        </div>

        <div className="flex flex-col justify-evenly w-full sm:flex-row items-start sm:items-center gap-6 mt-[3rem]">
          <div className="max-w-sm">
            <strong>
              <p className="text-lg mt-2">
                Hours:
              </p>
            </strong> 
            <ul>
              <li>Monday: Closed</li>
              <li>Tuesday: 8AM - 4PM</li>
              <li>Wednesday: Closed</li>
              <li>Thursday: 8AM - 4PM</li>
              <li>Friday: 8AM - 4PM</li>
              <li>Saturday: 8AM - 3PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div className="flex-shrink-0"> 
            <Image
              src="/sunny.jpg"
              alt="Sunny's Hair Studio Hours"
              width={600}
              height={400}
            />
          </div>
        </div>

        <div className="line-with-text mt-[3rem]">
          <div className="line" />
          <span className="text text-xl">Services</span>
          <div className="line" />
        </div>

        <div className="text-center sm:text-left grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 justify-items-center w-full">
          <div>Men's cut | <span className="price">$21</span></div>
          <div>Women's cut | <span className="price">$30-35</span></div>
          <div>Boy's cut | <span className="price">$18</span></div>
          <div>Girl's cut | <span className="price">$23</span></div>
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-sm sm:text-base mt-2">
            📍 4235 University Dr, Durham<br />
            📞 (919) 401-6300<br />
          </p>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">&copy; 2024 Sunny's Hair Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
