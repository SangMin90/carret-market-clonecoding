export default function Home() {
  return (
    <main
      className="bg-gray-300 h-screen flex
        items-center justify-center p-5"
    >
      <div
        className="bg-white shadow-lg p-5
      rounded-3xl w-full max-w-screen-sm flex
      flex-col md:flex-row gap-2 *:outline-none
      ring ring-transparent transition-shadow
      has-[:invalid]:ring-red-300"
      >
        <input
          className="w-full rounded-full h-10
            bg-gray-200 sm:bg-red-100
            md:bg-green-100 lg:bg-cyan-100
            xl:bg-orange-100 2xl:bg-purple-100
            pl-5 ring ring-offset-2 ring-transparent
            invalid:focus:ring-orange-500
            transition-shadow placeholder:drop-shadow
            peer"
          type="email"
          required
          placeholder="Email address"
        ></input>
        <span
          className="text-red-500 font-medium hidden
          peer-invalid:block"
        >
          Email is required
        </span>
        <button
          className="bg-black bg-opacity-80
          text-white py-2 rounded-full
          active:scale-90 transition-transform
          font-medium focus:scale-90 md:px-5
          peer-invalid:bg-gray-400"
        >
          Search
        </button>
      </div>
    </main>
  );
}
