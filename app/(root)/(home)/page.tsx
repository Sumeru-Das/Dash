import Footer from "@/components/Footer";
import MeetingTypeList from "@/components/MeetingTypeList";
import { techLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(
    now
  );
  return (
    <section className="flex h-full flex-col gap-10">
      <h1 className="text-3xl font-bold">
        <div className="h-[300px] w-full rounded-[20px] bg-color-3 text-color-2 bg-cover">
          <div className="flex h-full flex-col justify-center gap-[5rem] max-md:px-5 max-md::py-5 lg:p-11">
            <h2 className="glassmorphism rounded p-4 w-fit text-left text-base font-semibold">
              Dash video conferencing app powered by Stream.io
            </h2>
            <div className="flex flex-col text-color-1 gap-2">
              <h1 className="text-4xl  font-extrabold lg:text-7xl">{time}</h1>
              <p className="text-lg  font-semibold lg:text-2xl">{date}</p>
            </div>
          </div>
        </div>
      </h1>

      <MeetingTypeList />
      <Footer />
    </section>
  );
};
export default Home;
