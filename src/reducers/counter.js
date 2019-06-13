const counter = (state = 0, action) => {
  switch (action.type) {
    case 'DENUMBER':
      return state - 1;
    case 'ADDNUMBER':
      return state + 1;
    default:
      return state;
  }
};
export default counter;
