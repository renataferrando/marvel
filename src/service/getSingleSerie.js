import ApiService from "./ApiService";

const getSingleSerie = (id) => {
  return ApiService.get(
    `${process.env.REACT_APP_API_URL}series/${id}?${process.env.REACT_APP_TS}&${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_HASH}`
  );
};

export default getSingleSerie;
