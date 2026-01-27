const SvgIcon = ({ id, width, height }) => {
  return (
    <>
      <svg width={width} height={height}>
        <use href={`/img/symbol-defs.svg#${id}`}></use>
      </svg>
    </>
  );
};

export default SvgIcon;
