import Footer from "@/components/Footer";
import MeetingTypeList from "@/components/MeetingTypeList";

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
        <div className="h-[300px] w-full rounded-[20px] bg-color-3 text-black bg-cover">
          <div className="flex h-full flex-col justify-center gap-[5rem] max-md:px-5 max-md::py-5 lg:p-11">
            <h2 className="glassmorphism2 max-w-[520px] rounded p-2 text-center text-base font-semibold">
              Dash video conferencing app powered by Stream.io
            </h2>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
              <p className="text-lg font-semibold lg:text-2xl">{date}</p>
            </div>
          </div>
        </div>
      </h1>

      <MeetingTypeList />
      <Footer/>
    </section>
  );
};
export default Home;
