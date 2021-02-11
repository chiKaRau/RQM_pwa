export const shuffleMainColor = () => {
  return backgroundColorArray.sort(() => Math.random() - 0.5);
};

const backgroundColorArray = [
  "#ffcccc",
  "#ddccff",
  "#6699ff",
  "#00cc99",
  "#00cc66",
  "#ff6666",
  "#00b3b3",
  "#003333",
  "#ff5050",
  "#3366cc"
];
