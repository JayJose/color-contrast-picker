export default function geRbgFromHex(hex) {
  let matches = hex.match(/.{1,2}/g);
  return [
    parseInt(matches[0], 16),
    parseInt(matches[1], 16),
    parseInt(matches[2], 16),
  ];
}
