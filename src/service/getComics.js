import ApiService from "./ApiService";
const getComics = (limit, offset, comicsQuery) => {
  return ApiService.get(
    `${process.env.REACT_APP_API_URL}comics?${process.env.REACT_APP_TS}&${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_HASH}&limit=${limit}&offset=${offset}&${comicsQuery}`
  );
};

export default getComics;
