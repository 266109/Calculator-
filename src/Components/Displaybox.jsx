const Displaybox = ({ dispval }) => {
  return (
    <>
      <input
        className="form-control form-control-dark"
        type="text"
        name=""
        placeholder="Enter Here"
        value={dispval}
        readOnly
      />
    </>
  );
};

export default Displaybox;
