import { YourNameStairCase, MovieDescription } from "../assets/Data";

export default function Sample2() {
  return (
    <>
      <section className="grid gap-8 md:grid-cols-3 md:text-justify bg-red-400">
        <h1 className="uppercase text-6xl text-center text-white underline decoration-double md:col-span-3 justify-self-auto md:order-1">
          Japan
        </h1>
        <img
          className="lg:w-fit md:w-fit h-100 sm:w-full sm:h-100 rounded-lg overflow-hidden p-8 md:col-span-2 md:order-2"
          src={YourNameStairCase}
          alt="YourNameStairCase.png"
        />
        <div className="p-5 md:order-1">
          <h1 className="mb-3 text-justify text-4xl font-medium ">Your Name</h1>
          <hr />
          <div className="mt-6">{MovieDescription}</div>
        </div>
      </section>
    </>
  );
}
