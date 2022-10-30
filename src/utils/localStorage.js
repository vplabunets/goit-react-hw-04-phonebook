export const getlocalStorage = (data, setData, localStorageOutput) => {
  if (!JSON.parse(localStorage.getItem(localStorageOutput))) {
    setData(JSON.parse(localStorage.getItem(data)));
  }
};

export const setLocalStorage = (data, localStorageInput) =>
  localStorage.setItem(localStorageInput, JSON.stringify(data));
