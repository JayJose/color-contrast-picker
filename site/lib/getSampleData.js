export default async function getSampleData() {
  console.log("Getting sample data.");
  return (await fetch("http://0.0.0.0:8000/api/v0/picks/sample")).json();
}
