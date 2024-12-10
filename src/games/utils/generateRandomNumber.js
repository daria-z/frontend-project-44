const floor = (number) => Math.floor(number);
const ceil = (number) => Math.ceil(number);
const random = () => Math.random();
export default (min = 1, max = 50) => floor(random() * (floor(max) - ceil(min) + 1) + ceil(min));
