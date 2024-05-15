const URL: string = "http://localhost:4000/api";

export const getWebData = async () => {
  return fetch(`${URL}/get-web`, { method: "GET" })
    .then((res: any) => {
      return res.json();
    })
    .then((res: any) => {
      return res?.data;
    });
};
export const likeWebData = async (ID: string) => {
  return fetch(`${URL}/update-web-like/${ID}`, { method: "PATCH" })
    .then((res: any) => {
      return res.json();
    })
    .then((res: any) => {
      return res?.data;
    });
};
