import { useState, useEffect } from "react";
import fetchData from "../api/fetchData";
import extraData from "../extraData.json";
import { DesignerCard } from "../components/DesignerCard";
import { FiltersOptionModal } from "../components/FiltersOptionModal";

const Freelancers = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [listingsPerPage, setListingsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [filtersOptionStatus, setFilterOptionStatus] = useState(false);
  const [filters, setFilters] = useState({});

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    fetchData(setData, setDesigners, setError);
  }, []);

  const changeListingsPerPage = (e) => {
    setListingsPerPage(e.target.value);
  };

  return (
    <>
      {filtersOptionStatus && (
        <FiltersOptionModal
          setFilterOptionStatus={setFilterOptionStatus}
          setFilters={setFilters}
        />
      )}
      <main className="pt-16 pb-4 px-8">
        <nav className="flex items-center justify-between">
          <h2 className="text-md sm:text-xl font-medium">
            Freelancers ({data?.total})
          </h2>
          <section className="flex items-center justify-between gap-3 text-sm">
            {!isSelected ? (
              <>
                <button
                  onClick={() => setFilterOptionStatus(true)}
                  className="flex gap-1 items-center bg-white main-color rounded-md px-3 py-2 hover:opacity-75"
                >
                  <i className="bi bi-funnel-fill mr-1 text-xl" />{" "}
                  <div className="hidden sm:block">Filters</div>
                </button>
                <button className="flex gap-1 items-center bg-white main-color rounded-md px-3 py-2 hover:opacity-75">
                  <i className="bi bi-layout-three-columns mr-1 text-lg" />{" "}
                  <div className="hidden sm:block">Manage Columns</div>
                </button>
                <button className="flex gap-1 items-center bg-main-color text-white rounded-md px-3 py-2 hover:opacity-75">
                  <i className="bi bi-person-plus-fill mr-1 text-xl" />
                  <div className="hidden sm:block">Add Contact</div>
                </button>
                <button className="flex gap-1 items-center bg-white main-color rounded-md px-3 py-2 hover:opacity-75">
                  <i className="bi bi-three-dots text-xl" />
                </button>
              </>
            ) : (
              <>
                <button className="flex gap-1 items-center bg-white main-color rounded-md px-3 py-2 hover:opacity-75">
                  <i className="bi bi-envelope-fill mr-1 text-xl" />
                  <div className="hidden sm:block">Send a Message</div>
                </button>
                <button className="flex gap-1 items-center bg-white main-color rounded-md px-3 py-2 hover:opacity-75">
                  <i className="bi bi-pencil-fill mr-1 text-lg" />
                  <div className="hidden sm:block">Edit</div>
                </button>
                <button className="flex gap-1 items-center bg-white main-color rounded-md px-3 py-2 hover:opacity-75">
                  <i className="bi bi-trash-fill mr-1 text-xl" />
                  <div className="hidden sm:block">Delete</div>
                </button>
                <button className="flex gap-1 items-center bg-white main-color rounded-md px-3 py-2 hover:opacity-75">
                  <i className="bi bi-inboxes-fill mr-1 text-xl" />
                  <div className="hidden sm:block">Archive</div>
                </button>
              </>
            )}
          </section>
        </nav>
        <section className="main-container self-center flex flex-col justify-between my-4 text-sm bg-white rounded-t-md ">
          <section className="overflow-auto rounded-t-md ">
            <div className="grid-container w-fit bg-blue-100 rounded-t-md items-center">
              <i
                className={`bi bi-${
                  isSelected ? "dash-square-fill text-blue-500" : "square"
                } text-lg text-center`}
              />
              {extraData?.fields.map((field) => (
                <div key={field} className=" text-gray-600 font-medium">
                  {field}
                </div>
              ))}
            </div>

            {data ? (
              designers
                ?.slice((page - 1) * listingsPerPage, page * listingsPerPage)
                .map((designer) => (
                  <DesignerCard
                    key={designer.id}
                    data={designer}
                    setIsSelected={setIsSelected}
                  />
                ))
            ) : (
              <p className="text-center mt-5 text-red-400 text-xl">{error}</p>
            )}
          </section>

          <div className="flex items-center justify-between bg-white text-gray-500 py-3 px-2 rounded-b-md">
            <div className="flex items-center gap-2">
              <i
                onClick={() => setPage(1)}
                className="bi bi-chevron-double-left cursor-pointer text-lg"
              />
              <i
                onClick={() => setPage(Math.max(page - 1, 1))}
                className="bi bi-chevron-left cursor-pointer text-lg"
              />
              <div className="bg-color w-8 py-2 text-center rounded-md">
                {page}
              </div>
              <i
                onClick={() =>
                  setPage(
                    Math.min(page + 1, Math.ceil(data?.total / listingsPerPage))
                  )
                }
                className="bi bi-chevron-right cursor-pointer text-lg"
              />
              <i
                onClick={() =>
                  setPage(Math.ceil(data?.total / listingsPerPage))
                }
                className="bi bi-chevron-double-right cursor-pointer text-lg"
              />
            </div>
            <div className="flex items-center gap-5">
              <div>{`Showing ${(page - 1) * listingsPerPage + 1} - ${
                page * listingsPerPage > data?.total
                  ? data?.total
                  : page * listingsPerPage
              } of ${data?.total}`}</div>
              <input
                onChange={changeListingsPerPage}
                type="number"
                value={listingsPerPage}
                min="1"
                max={data?.total}
                className="w-12 p-1 border-2 rounded-md"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export { Freelancers };
