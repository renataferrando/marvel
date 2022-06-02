// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch(url);
//         const {
//           data: { results },
//         } = await response?.json();
//         setData(results);

//         setIsLoading(false);
//       } catch (error) {
//         setError(error);
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);

//   return { isLoading, data, error };
// };

// export default useFetch;
