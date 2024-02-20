import PropTypes from "prop-types";
import { useState } from "react";

const DesignerCard = ({ data, setIsSelected }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const {
    first_name,
    last_name,
    avatar,
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
    hired,
  } = data;

  const check = () => {
    setIsChecked((prev) => !prev);
    setIsSelected((prev) => (isChecked ? prev + 1 : prev - 1));
  };

  return (
    <div
      className={`grid-container w-fit items-center ${
        isChecked ? "bg-blue-50" : "bg-white"
      } border-b-2 text-gray-500 py-2`}
    >
      <i
        onClick={check}
        className={`bi bi-${
          isChecked
            ? "check-square-fill text-blue-500 hover:opacity-80"
            : "square hover:text-blue-500"
        } text-lg text-center cursor-pointer`}
      />

      <div className="flex items-center gap-3 text-blue-400">
        <img
          alt={`${first_name} ${last_name} avatar`}
          src={avatar}
          className="h-10 w-10 rounded-full"
        />
        {first_name} {last_name}
      </div>
      <div className="flex items-center gap-1">
        {specialty?.name === "" ? (
          <i className="bi bi-dash text-lg -translate-x-1" />
        ) : (
          <div className={`h-2 w-2 rounded-full ${specialty?.color}-bg`} />
        )}
        <div>{specialty?.name}</div>
      </div>
      <div>$ {hourlyRate}</div>
      <div
        className={`rounded-md text-white text-center w-18 ${resource?.color}-bg`}
      >
        {resource?.name}
      </div>
      {workArrangement === "Full-Time" ? (
        <i className="bi bi-check-lg text-green-400 text-2xl text-center" />
      ) : (
        <div>{workArrangement}</div>
      )}
      <div className="bg-yellow-50 w-14 py-1 rounded-md text-center">
        {jobSuccess}{" "}
        <i
          className={`bi bi-star${
            jobSuccess >= 4.8 ? "-fill" : jobSuccess >= 2 ? "-half" : ""
          } text-yellow-400`}
        />
      </div>
      <div className="flex items-center gap-2">
        <img
          alt={`${country?.name.common} flag`}
          src={country?.flags.png}
          className="w-5"
        />
        {country?.name.common}
      </div>
      <div>{date}</div>
      <i
        className={`bi bi-${
          verified ? "check-lg text-green-400 text-2xl" : "dash text-lg"
        } text-center`}
      />
      {hoursBilled === 0 ? (
        <i className="bi bi-dash text-lg" />
      ) : (
        <div>{hoursBilled}</div>
      )}

      {hoursBilled === 0 ? (
        <i className="bi bi-dash text-lg" />
      ) : (
        <div>$ {hoursBilled * hourlyRate}</div>
      )}
      {status?.name === "" ? (
        <i className="bi bi-dash text-lg" />
      ) : (
        <div
          className={`${status?.color}-bg-light ${status?.color}-text w-fit py-1 px-2 text-center font-medium rounded-xl`}
        >
          {status?.name}
        </div>
      )}
      {hoursWorked === 0 ? (
        <i className="bi bi-dash text-lg" />
      ) : (
        <div>{hoursWorked}</div>
      )}
      <div className="flex gap-3">
        <div
          className={`flex text-cyan-500 gap-2 ${
            hired
              ? "opacity-20 cursor-default"
              : "cursor-pointer hover:opacity-80"
          }`}
        >
          <i className="bi bi-envelope" /> Hire
        </div>
        <i
          onClick={() => setIsBookmarked((prev) => !prev)}
          className={`bi bi-bookmark ${
            isBookmarked ? "text-blue-500" : "text-black"
          } cursor-pointer`}
        />
      </div>
    </div>
  );
};

DesignerCard.propTypes = {
  data: PropTypes.object.isRequired,
  setIsSelected: PropTypes.any,
};

export { DesignerCard };
