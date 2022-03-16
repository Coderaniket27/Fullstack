
import './App.css';
import Register from './comp/Register';
import Login from './comp/Login';
import { Link} from "react-router-dom";


// function getHeaders() {
//   return { 'Content-Type': 'application/json'
// };
// }

// async function getSettings() {
//   // let url = `http://localhost:3002/settings`;
//   let url = `http://localhost:3000/myapi`;
//   return httpService("GET", getHeaders(), "", url)
//       .then(response => {
//           if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
//               return Promise.reject();
//           return Promise.resolve(response.responseData);
//       }).catch(function (err) {
//           return Promise.reject(err);
//       });
// };

function App() {
  // useEffect (() => {
  //   getSettings();
  //   },[])
  return (
    <div >
      <nav>
      <Link to="/register">Register</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
     
     
    </div>
  );
}

export default App;
