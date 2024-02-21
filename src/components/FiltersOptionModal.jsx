import PropTypes from "prop-types";
import { useState } from "react";

const FiltersOptionModal = ({ setFilterOptionStatus, setFilters }) => {
  const [hourlyRateFilterMenuStatus, setHourlyRateFilterMenuStatus] =
    useState(false);
  const [statusFilterMenuStatus, setStatusFilterMenuStatus] = useState(false);
  const [fullTimeFilterMenuStatus, setFullTimeFilterMenuStatus] =
    useState(false);
  const [jobSuccessFilterMenuStatus, setJobSuccessFilterMenuStatus] =
    useState(false);
  const [locationFilterMenuStatus, setLocationFilterMenuStatus] =
    useState(false);
  const [verifiedFilterMenuStatus, setVerifiedFilterMenuStatus] =
    useState(false);
  const [resourceFilterMenuStatus, setResourceFilterMenuStatus] =
    useState(false);
  const [lastActivityFilterMenuStatus, setLastActivityFilterMenuStatus] =
    useState(false);
  const [earnedAmountFilterMenuStatus, setEarnedAmountFilterMenuStatus] =
    useState(false);
  const [hoursBilledFilterMenuStatus, setHoursBilledFilterMenuStatus] =
    useState(false);

  return (
    <div className="fixed top-0 h-screen w-full bg-black/50 z-10">
      <section className="absolute flex flex-col justify-between right-0 w-full sm:w-1/2 md:w-1/4 h-full bg-white">
        <div className="flex flex-col filters-section">
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
            <p className="text-xs text-gray-500 opacity-40 text-center mt-2">
              NOT WORKING FUNCTIONALITY
            </p>
            <p className="text-xs text-gray-500 opacity-40 text-center mt-2">
              (Develope in progress)
            </p>
          </div>
          <section className="overflow-y-auto py-2 px-8">
            <div className="flex flex-col justify-between gap-2 border-b-2 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Hourly Rate</h3>
                <div className="flex gap-2 ">
                  {hourlyRateFilterMenuStatus && (
                    <div className="text-blue-500 cursor-pointer">Clear</div>
                  )}
                  <i
                    onClick={() =>
                      setHourlyRateFilterMenuStatus((prev) => !prev)
                    }
                    className={`bi bi-chevron-${
                      hourlyRateFilterMenuStatus ? "up" : "down"
                    } text-gray-500 cursor-pointer`}
                  />
                </div>
              </div>
              {hourlyRateFilterMenuStatus && (
                <div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Less than $10</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>$11 - $75</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>$75 - $150</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>$151 +</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between gap-2 border-b-2 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Status</h3>
                <div className="flex gap-2 ">
                  {statusFilterMenuStatus && (
                    <div className="text-blue-500 cursor-pointer">Clear</div>
                  )}
                  <i
                    onClick={() => setStatusFilterMenuStatus((prev) => !prev)}
                    className={`bi bi-chevron-${
                      statusFilterMenuStatus ? "up" : "down"
                    } text-gray-500 cursor-pointer`}
                  />
                </div>
              </div>
              {statusFilterMenuStatus && (
                <div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Top Rated</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Rising Talend</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Contract Offered</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Blocked</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between gap-2 border-b-2 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Full-time?</h3>
                <div className="flex gap-2 ">
                  {fullTimeFilterMenuStatus && (
                    <div className="text-blue-500 cursor-pointer">Clear</div>
                  )}
                  <i
                    onClick={() => setFullTimeFilterMenuStatus((prev) => !prev)}
                    className={`bi bi-chevron-${
                      fullTimeFilterMenuStatus ? "up" : "down"
                    } text-gray-500 cursor-pointer`}
                  />
                </div>
              </div>
              {fullTimeFilterMenuStatus && (
                <div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Full-time</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between gap-2 border-b-2 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Job Success</h3>
                <div className="flex gap-2 ">
                  {jobSuccessFilterMenuStatus && (
                    <div className="text-blue-500 cursor-pointer">Clear</div>
                  )}
                  <i
                    onClick={() =>
                      setJobSuccessFilterMenuStatus((prev) => !prev)
                    }
                    className={`bi bi-chevron-${
                      jobSuccessFilterMenuStatus ? "up" : "down"
                    } text-gray-500 cursor-pointer`}
                  />
                </div>
              </div>
              {jobSuccessFilterMenuStatus && (
                <div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Less than 1</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>1 - 3</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>3 - 4</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>4 - 5</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between gap-2 border-b-2 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Location</h3>
                <div className="flex gap-2 ">
                  {locationFilterMenuStatus && (
                    <div className="text-blue-500 cursor-pointer">Clear</div>
                  )}
                  <i
                    onClick={() => setLocationFilterMenuStatus((prev) => !prev)}
                    className={`bi bi-chevron-${
                      locationFilterMenuStatus ? "up" : "down"
                    } text-gray-500 cursor-pointer`}
                  />
                </div>
              </div>
              {locationFilterMenuStatus && (
                <div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Africa</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Asia</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Europe</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>North America</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Oceania</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>South America</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between gap-2 border-b-2 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Verified</h3>
                <div className="flex gap-2 ">
                  {verifiedFilterMenuStatus && (
                    <div className="text-blue-500 cursor-pointer">Clear</div>
                  )}
                  <i
                    onClick={() => setVerifiedFilterMenuStatus((prev) => !prev)}
                    className={`bi bi-chevron-${
                      verifiedFilterMenuStatus ? "up" : "down"
                    } text-gray-500 cursor-pointer`}
                  />
                </div>
              </div>
              {verifiedFilterMenuStatus && (
                <div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Verified</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between gap-2 border-b-2 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Resource</h3>
                <div className="flex gap-2 ">
                  {resourceFilterMenuStatus && (
                    <div className="text-blue-500 cursor-pointer">Clear</div>
                  )}
                  <i
                    onClick={() => setResourceFilterMenuStatus((prev) => !prev)}
                    className={`bi bi-chevron-${
                      resourceFilterMenuStatus ? "up" : "down"
                    } text-gray-500 cursor-pointer`}
                  />
                </div>
              </div>
              {resourceFilterMenuStatus && (
                <div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Behance</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Dribbble</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>UpWork</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Pinterest</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between gap-2 border-b-2 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Last Activity</h3>
                <div className="flex gap-2 ">
                  {lastActivityFilterMenuStatus && (
                    <div className="text-blue-500 cursor-pointer">Clear</div>
                  )}
                  <i
                    onClick={() =>
                      setLastActivityFilterMenuStatus((prev) => !prev)
                    }
                    className={`bi bi-chevron-${
                      lastActivityFilterMenuStatus ? "up" : "down"
                    } text-gray-500 cursor-pointer`}
                  />
                </div>
              </div>
              {lastActivityFilterMenuStatus && (
                <div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Less than 2010</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>2010 - 2015</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>2015 - 2020</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>2020 +</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between gap-2 border-b-2 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Earned Amount</h3>
                <div className="flex gap-2 ">
                  {earnedAmountFilterMenuStatus && (
                    <div className="text-blue-500 cursor-pointer">Clear</div>
                  )}
                  <i
                    onClick={() =>
                      setEarnedAmountFilterMenuStatus((prev) => !prev)
                    }
                    className={`bi bi-chevron-${
                      earnedAmountFilterMenuStatus ? "up" : "down"
                    } text-gray-500 cursor-pointer`}
                  />
                </div>
              </div>
              {earnedAmountFilterMenuStatus && (
                <div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Less than $100</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>$100 - $1000</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>$1000 - $10000</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>$10000 +</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between gap-2 border-b-2 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Hours Billed</h3>
                <div className="flex gap-2 ">
                  {hoursBilledFilterMenuStatus && (
                    <div className="text-blue-500 cursor-pointer">Clear</div>
                  )}
                  <i
                    onClick={() =>
                      setHoursBilledFilterMenuStatus((prev) => !prev)
                    }
                    className={`bi bi-chevron-${
                      hoursBilledFilterMenuStatus ? "up" : "down"
                    } text-gray-500 cursor-pointer`}
                  />
                </div>
              </div>
              {hoursBilledFilterMenuStatus && (
                <div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>Less than 10</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>10 - 100</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>100 - 500</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <input type="checkbox" className="cursor-pointer" />
                    <p>$500 +</p>
                  </div>
                </div>
              )}
            </div>
          </section>
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

FiltersOptionModal.propTypes = {
  setFilterOptionStatus: PropTypes.any,
  setFilters: PropTypes.any,
};

export { FiltersOptionModal };
