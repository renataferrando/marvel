import ApiService from "./ApiService";
const getSeries = (limit, offset, seriesQuery) => {
  return ApiService.get(
    `${process.env.REACT_APP_API_URL}series?${process.env.REACT_APP_TS}&${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_HASH}&limit=${limit}&offset=${offset}&${seriesQuery}`
  );
};

export default getSeries;
