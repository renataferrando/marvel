import ApiService from "./ApiService";

const GetSingleCharacter = (id) => {
  return ApiService.get(
    `${process.env.REACT_APP_API_URL}characters/${id}?${process.env.REACT_APP_TS}&${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_HASH}`
  );
};

export default GetSingleCharacter;
