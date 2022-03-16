// export const httpService = (method, headers, data, url) => {
//     const requestOptions = {
//         method: method,
//         headers: headers || {'Content-Type': 'application/json'},
//         "Access-Control-Allow-Origin": https://foo.example
//         "Access-Control-Allow-Methods": POST, GET, OPTIONS
//         "Access-Control-Allow-Headers": X-PINGOTHER, Content-Type
//         "Access-Control-Max-Age": 86400
//     };

//     if (method !== "GET")
//         requestOptions.body = JSON.stringify(data);

//     return fetch(url, requestOptions)
//         .then(function handleResponse(response) {
//             return response.text().then(text => {
//                 const data = text && JSON.parse(text);
//                 if (!data.success) {
//                     if (data.responseCode === 401 || data.responseCode === "401") {
//                         // history.push(screenPathConstants.LANDING_PAGE);
//                         // auto logout if 401 response returned from api
//                         // location.reload(true);



// }
//                     let error = (data && data.message) || response.statusText;
//                     if (data && data.responseCode === 3001)
//                         error = data
//                     // return Promise.reject(error);
//                     return data;
//                 }

//                 return data;
//             });
//         }).catch(function (err) {
//             return Promise.reject(err)
//         })

// };
