export const setFilterInLocalStorage = (type, list) => {
  localStorage.setItem(type, JSON.stringify(list));
};

export const getFilterFromLocalStorage = (type) => {
  const theme = JSON.parse(localStorage.getItem(type));
  console.log({ theme });
  return theme;
};
