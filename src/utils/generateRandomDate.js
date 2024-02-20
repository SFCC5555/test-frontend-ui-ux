const generateRandomDate = () => {
  const startDate = new Date(2010, 0, 1); // January 1, 2010
  const endDate = new Date(); // Current date

  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );

  // Format the date according to the desired format
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = randomDate.toLocaleDateString("en-US", options);

  return formattedDate;
};

export default generateRandomDate
