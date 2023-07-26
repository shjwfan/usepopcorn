const average = (array: number[]) =>
  array.reduce((accumulator, value) => accumulator + value / array.length, 0);

export { average };
