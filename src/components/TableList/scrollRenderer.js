export const tableWidth = 400;
const wrapperSize = 1000;

const scrollRenderer = (state, scrollLeft) => {
  const diff = scrollLeft - state.scrolled;
  if (diff < tableWidth) return state;

  const added = Math.round(diff / tableWidth);

  return {
    shown: state.shown + added,
    scrolled: state.scrolled + (added * tableWidth)
  };
};


/*const scrollRenderer = (scrollLeft) => {
  console.log(scrollLeft);
  const center = (scrollLeft + wrapperSize / 2) / tableWidth;
  const centerMinus5 = center - 5;
  const start = centerMinus5 < 0 ? 0 : centerMinus5;
  const end = start + 10;

  console.log(start);
  return { start, end };
}*/
export default scrollRenderer;
