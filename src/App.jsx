import axios from "axios";

function App() {
  const register = async () => {
    try {
      const response = await axios.post(
        "http://4.224.186.213/evaluation-service/register",
        {
          email: "jahnavibolla06@gmail.com",
          name: "Bolla Jahnavi",
          mobileNo: "9392475593",
          githubUsername: "JAHNAVI2006-WEB",
          rollNo: "23bq1a0535",
          accessCode: "QQdEYy"
        }
      );

      console.log(response.data);
      alert("Registration Successful");
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div>
      <h1>Affordmed Registration</h1>
      <button onClick={register}>Register</button>
    </div>
  );
}

export default App;