import ApiService from "./ApiService";
const GetCharacters = (limit, offset, searchParams) => {
  return ApiService.get(
    `${process.env.REACT_APP_API_URL}characters?${process.env.REACT_APP_TS}&${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_HASH}&limit=${limit}&offset=${offset}&${searchParams}`
  );
};

export default GetCharacters;
