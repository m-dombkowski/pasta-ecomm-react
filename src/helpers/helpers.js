// for generating random IDs/keys

export const randomID = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const roundToTwo = (num) => {
  return +(Math.round(num + "e+2") + "e-2");
};

export const sortNameAToZ = (a, b) => {
  if (a.Name < b.Name) {
    return -1;
  }
  if (a.Name > b.Name) {
    return 1;
  }
  return 0;
};

export const sortNameZToA = (a, b) => {
  if (a.Name > b.Name) {
    return -1;
  }
  if (a.Name < b.Name) {
    return 1;
  }
  return 0;
};

export const sortPriceLowToHigh = (a, b) => {
  if (a.Price > b.Price) {
    return -1;
  }
  if (a.Price < b.Price) {
    return 1;
  }
  return 0;
};

export const sortPriceHighToLow = (a, b) => {
  if (a.Price < b.Price) {
    return -1;
  }
  if (a.Price > b.Price) {
    return 1;
  }
  return 0;
};
