export default async function postData(url, data, setData) {
  try {
    console.log("running postData");
    let request = await fetch(url, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await request.json();
    if (request.status === 200) {
      setData(response);
      console.log(response);
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
}
