function Circles({ left, middle, right }) {
  return (
    <div className="mb-1 mr-6 mt-5 flex justify-end gap-3">
      <div
        className={`h-3 w-3 rounded-full ${left} transition-all hover:scale-125`}
      ></div>
      <div
        className={`h-3 w-3 rounded-full ${middle} transition-all hover:scale-125`}
      ></div>
      <div
        className={`h-3 w-3 rounded-full ${right} transition-all hover:scale-125`}
      ></div>
    </div>
  );
}

export default Circles;
