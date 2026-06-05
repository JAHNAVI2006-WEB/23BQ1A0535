import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const register = async () => {
    try {
      const response = await axios.post(
        "http://4.224.186.213/evaluation-service/register",
        {
          email: "jahnavibolla06@gmail.com",
          name: "Bolla Jahnavi",
          mobileNumber: "9392475593",
          githubUsername: "JAHNAVI2006-WEB",
          rollNo: "23bq1a0535",
          accessCode: "QQdEYy"
        }
      );

      console.log("SUCCESS:", response.data);
      setMessage("Registration Successful");
    } catch (error) {
      console.log("ERROR:", error);
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);

      setMessage("Registration Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Affordmed Registration</h1>

      <button onClick={register}>
        Register
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;
