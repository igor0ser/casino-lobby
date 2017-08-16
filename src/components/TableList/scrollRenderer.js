const tableSize = 400;

const scrollRenderer = (state, scrollLeft) => {
  const diff = scrollLeft - state.scrolled;
  if (diff < tableSize) return state;

  const added = Math.round(diff / tableSize);

  return {
    shown: state.shown + added,
    scrolled: state.scrolled + (added * tableSize)
  };
};

export default scrollRenderer;
