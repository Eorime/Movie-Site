export const fetchData = async (
  url: string,
  apiKey: string,
  apiHost: string
) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost,
    },
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  throw new Error("Something went wrong :(");
};
