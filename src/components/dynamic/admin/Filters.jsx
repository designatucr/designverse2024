import { TiPlus } from "react-icons/ti";

const Filters = ({ filters, setFilters, setObjects, objects, input }) => {
  const handleClick = (filter) => {
    const filterValues = {
      ...filters,
      [filter]: { ...filters[filter], state: !filters[filter].state },
    };
    setFilters(filterValues);

    setObjects &&
      setObjects(
        objects.map((a) => {
          let boolean = true;

          Object.values(filterValues).map(({ value, state }) => {
            if (
              a.status === value &&
              state &&
              a.name.toLowerCase().match(input.toLowerCase())
            ) {
              boolean = false;
            }
          });
          return { ...a, hidden: boolean };
        })
      );
  };

  return (
    <div className="w-fit grid grid-cols-6 gap-2">
      {Object.entries(filters).map(([filter, { state }], index) => (
        <div
          className="flex justify-center"
          key={index}
          onClick={() => handleClick(filter)}
          data-cy={filter + "-filter"}
        >
          <div
            className={`rounded-3xl hover:opacity-70 duration-300 ${
              state
                ? "text-white bg-design-brown-200"
                : "text-design-brown-300 bg-design-brown-100"
            } cursor-pointer flex items-center justify-center w-full`}
          >
            <p className="my-0 mx-1 px-2 py-[2px] whitespace-nowrap">
              {filter}
            </p>
            <TiPlus
              className={`duration-300 mt-[2px] mr-2 hover:opacity-80 ${
                state ? "-rotate-45" : ""
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filters;
