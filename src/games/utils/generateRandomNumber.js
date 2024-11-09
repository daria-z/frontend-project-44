/* eslint-disable no-param-reassign */
export default (min = 1, max = 50) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
