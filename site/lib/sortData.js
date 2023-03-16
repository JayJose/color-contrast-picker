export function sortByRatio(arr) {
  arr.sort((a, b) => {
    return parseFloat(b.results.ratio) - parseFloat(a.results.ratio);
  });
  return arr;
}
