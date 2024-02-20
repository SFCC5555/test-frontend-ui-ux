const FiltersOptionModal = ({ setFilterOptionStatus, setFilters }) => {
  return (
    <div className="fixed top-0 h-screen w-full bg-black/50 z-10">
      <section className="absolute flex flex-col right-0 w-full sm:w-1/2 md:w-1/4 h-full bg-white">
        <div className="flex items-center justify-between px-8 py-4 text-xl font-semibold">
          <h2>
            <i className="bi bi-funnel-fill mr-1" /> Filters option
          </h2>
          <i
            onClick={() => setFilterOptionStatus(false)}
            className="bi bi-x-lg text-gray-500 cursor-pointer hover:opacity-50"
          />
        </div>
        <div className="text-blue-500 px-8 py-4 text-xl border-y-2">
          Freelancers found (2)
        </div>
        <div className="py-4 w-full border-t-2 flex justify-center">
          <button className="flex text-red-400 gap-2 border-2 border-red-400 rounded-md p-2 hover:opacity-80">
            Reset Filter
            <i className="bi bi-x-circle-fill" />
          </button>
        </div>
      </section>
    </div>
  );
};

export { FiltersOptionModal };
