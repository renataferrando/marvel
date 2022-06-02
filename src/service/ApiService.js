const get = async (url) => {
  return fetch(url, {
    method: "GET",
  }).then(handle);
};

const handle = async (response) => {
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((resolve, reject) => {
      let message;
      switch (response.status) {
        case 409:
          message = "empty parameter";
          break;
        default:
          message = "error inesperado";
      }
      reject(message);
    });
  }
};

export default { get };
