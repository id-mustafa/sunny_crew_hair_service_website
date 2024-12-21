import Image from "next/image";
import CallNow from "./components/CallNow";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-5xl w-full">
        <div className="text-center sm:text-left mt-[3rem] mb-[3rem]">
          <p className="text-lg mt-2">
          For over 10 years, <strong>Sunny & Crew</strong> have been providing top-notch haircuts to men and women in Durham, NC.
            Whether you&apos;re looking for a fresh cut, vibrant color, or an elegant style, Sunny can make you shine! 
          <br/><br/><span><strong>Services by appointment only.</strong> Call below to schedule an apppointment.</span>
          </p>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div>
            <CallNow />
          </div>
        </div>




        <div className="flex flex-col justify-evenly w-full sm:flex-row items-center sm:items-start gap-6 mt-[10rem]">
          <div className="max-w-sm text-center sm:text-left mx-auto">
            <strong>
              <p className="text-xl mt-2">Sunny&apos;s Hours:</p>
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

          <div className="flex-shrink-0 mx-auto">
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
          <div>Men&apos;s cut | <span className="price">$30-35</span></div>
          <div>Women&apos;s cut | <span className="price">$40-45</span></div>
          <div>Medium Length Hair Keratin treatement | <span className="price">$300 </span></div>
          <div>Long Hair Keratin treatement | <span className="price">$400 </span></div>
          <div>Hair Dye | <span className="price">Flexible </span></div>
          <div>Semi-permanent micro-blading eyebrow tattoo | <span className="price">$300 (2 sessions)</span></div>
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">Contact Sunny</h2>
          <p className="text-sm sm:text-base mt-2">
          📍 4235 University Dr, Durham, NC 27707
          <span className="ml-2">
            <a
              href="https://www.google.com/maps?sca_esv=ec7dc56685c11165&biw=1680&bih=929&output=search&q=Sunny+%26+Crew+Hair+Services&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkW1DRbm01j6DCVS0r1sTxn7rqU1uhV7mfeoM5P4clGxahOScsLVsm0WLMq5F1C9PC1SZydHbDYrLfYTtX6W1_6yReHdANKkCLIUOUxMhUaXBzC2q8Vg5_0WeoPHfyiJO4seldI515VpNcXpUIsG0fBqhwQ0L4fG3PnaSjxCXvb_L8OMQA4XeQzGIPU_P7xma4nj9aQVg&entry=mc&ved=1t:200715&ictx=111"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Google Maps
            </a>
          </span>
          <br />
          📱 (443) 845-0744 (cell)
          <br />
          📞 (919) 401-6300 (business)
        </p>

        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">&copy; 2024 Sunny & Crew Hair Service. All rights reserved.</p>
      </footer>
    </div>
  );
}
