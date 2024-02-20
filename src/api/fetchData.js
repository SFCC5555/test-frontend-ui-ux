import extraData from "../extraData.json";
import generateRandomDate from "../utils/generateRandomDate";
import fetchCountries from "./fetchCountries";

let page = 1;
let totalPages = 1;

const fetchData = async (setData, setDesigners, setError) => {
  try {
    if (page > totalPages) {
      page = 1;
      totalPages = 1;
      const countries = await fetchCountries();
      setDesigners((prev) =>
        prev.map((d) => {
          const specialty =
            extraData.specialties[
              Math.floor(Math.random() * extraData.specialties.length)
            ];

          const hourlyRate = Math.floor(Math.random() * (300 - 50 + 1)) + 50;

          const resource =
            extraData.resources[
              Math.floor(Math.random() * extraData.resources.length)
            ];

          const workArrangement =
            extraData.workArrangement[
              Math.floor(Math.random() * extraData.workArrangement.length)
            ];

          const jobSuccess = parseFloat((Math.random() * 5).toFixed(1));

          const country =
            countries[Math.floor(Math.random() * countries.length)];

          const date = generateRandomDate();

          const verified = Math.random() < 0.5;

          const hoursBilled = Math.floor(Math.random() * 1000);

          const status =
            jobSuccess >= 4.8
              ? extraData.status[Math.floor(Math.random() * 2)]
              : extraData.status[
                  Math.floor(Math.random() * (extraData.status.length - 2)) + 2
                ];

          const hoursWorked = Math.floor(Math.random() * 1000);

          const hired = Math.random() < 0.2;
          return {
            ...d,
            specialty,
            hourlyRate,
            resource,
            workArrangement,
            jobSuccess,
            country,
            date,
            verified,
            hoursBilled,
            status,
            hoursWorked,
            hired
          };
        })
      );
      return;
    }

    const response = await fetch(`https://reqres.in/api/users?page=${page}`);

    if (!response.ok) {
      throw new Error("Unable to retrieve the data");
    }

    const result = await response.json();
    totalPages = result.total_pages;

    setData(result);
    setDesigners((prev) => [...prev, ...result.data]);
    page++;

    // Calls fetchData recursively for the next page
    await fetchData(setData, setDesigners, setError);
  } catch (error) {
    setError("Network Error");
  }
};

export default fetchData;
