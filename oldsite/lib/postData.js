export default async function postData(url, data) {
  console.log("running postData");
  const res = await fetch(url, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("postData execution failed");
  }

  return res.json();
}
