const SvgIcon = ({ id, width, height, className }) => {
  const iconClass = className ? ` ${className}` : "";

  return (
    <>
      <svg width={width} height={height} className={iconClass}>
        <use href={`/img/symbol-defs.svg#${id}`}></use>
      </svg>
    </>
  );
};

export default SvgIcon;
