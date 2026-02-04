import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[92vh] md:h-[91vh] lg:h-[90vh] 2xl:h-[89vh]">
      <ClipLoader size={50} color="#2563eb" />
    </div>
  );
};

export default Loading;
