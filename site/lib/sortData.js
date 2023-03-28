export function sortByRatio(arr) {
  arr.sort((a, b) => {
    return parseFloat(b.data.ratio) - parseFloat(a.data.ratio);
  });
  return arr;
}
