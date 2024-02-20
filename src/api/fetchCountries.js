const fetchCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      throw new Error(`Network error: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error.message || "There was an error getting the data");
  }
};

export default fetchCountries;
