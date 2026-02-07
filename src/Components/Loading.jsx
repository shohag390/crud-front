import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[92vh] md:h-[91vh] lg:h-[90vh] 2xl:h-[89vh]">
      <div className="block sm:hidden">
        <HashLoader size={40} color="#2563eb" />
      </div>

      <div className="hidden sm:block md:hidden">
        <HashLoader size={55} color="#2563eb" />
      </div>

      <div className="hidden md:block">
        <HashLoader size={70} color="#2563eb" />
      </div>
    </div>
  );
};

export default Loading;
