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

export const fetchDataDetails = async (
  url: string,
  apiKey: string,
  apiHost: string
) => {
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost,
    },
  });
  if (resp.ok) {
    const detailData = resp.json();
    return detailData;
  }
  throw new Error("Something went wrong :(");
};
