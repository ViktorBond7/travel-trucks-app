import clsx from "clsx";

const SvgIcon = ({ id, width, height, className }) => {
  return (
    <>
      <svg width={width} height={height} className={clsx(className)}>
        <use href={`/img/symbol-defs.svg#${id}`}></use>
      </svg>
    </>
  );
};

export default SvgIcon;
