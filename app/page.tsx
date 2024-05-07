export default function Home() {
  return (
    <main
      className="bg-gray-300 h-screen flex
        items-center justify-center p-5"
    >
      <div
        className="bg-white shadow-lg p-5
      rounded-3xl w-full max-w-screen-sm flex
      flex-col gap-4"
      >
        {["Nico", "Me", "You", "Yourself", ""].map((person, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="size-10 bg-blue-400 rounded-full" />
            <span
              className="text-lg font-medium empty:bg-gray-300
            empty:h-5 empty:w-20 empty:animate-pulse"
            >
              {person}
            </span>
            <div
              className="size-6 bg-red-500 rounded-full
                text-white flex items-center justify-center
                relative"
            >
              <span className="z-10">{index}</span>
              <div
                className="size-6 bg-red-500 rounded-full
                text-white flex items-center justify-center
                absolute animate-ping"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
