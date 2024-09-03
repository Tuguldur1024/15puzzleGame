const Cube = (props) => {
  const { number, color = "#111527" } = props;
  return (
    <div className="flex p-7 bg-[#111527] text-white text-center justify-center">
      {number}
    </div>
  );
};

export default Cube;
