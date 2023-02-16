const Image = ({ e, image }) => {
  return (
    <div className={` imageDiv ${image} ? ${image} :image1`}>
      <span className={`ec ${e} ? ${e} :es`}>e!</span>
    </div>
  );
};
export default Image;
