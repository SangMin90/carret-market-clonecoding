export default function Home() {
  return (
    <main
      className="bg-gray-300 h-screen flex
        items-center justify-center p-5"
    >
      <div
        className="bg-white shadow-lg p-5
      rounded-3xl w-full max-w-screen-sm flex
      flex-col md:flex-row gap-2"
      >
        <input
          className="w-full rounded-full h-10
            bg-gray-200 sm:bg-red-100
            md:bg-green-100 lg:bg-cyan-100
            xl:bg-orange-100 2xl:bg-purple-100
            pl-5 ring ring-offset-2
            outline-none ring-transparent
           focus:ring-orange-500 transition-shadow
           placeholder:drop-shadow"
          type="text"
          placeholder="Search here"
        ></input>
        <button
          className="bg-black bg-opacity-80
          text-white py-2 rounded-full
          active:scale-90 transition-transform
          font-medium focus:scale-90 outline-none
          md:px-5"
        >
          Search
        </button>
      </div>
    </main>
  );
}
