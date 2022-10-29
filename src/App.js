import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import ListAll from "./components/ListAll";
import axios from "axios";

function App() {
  const [users, setUser] = useState(null);

  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((result)=>{setUser(result.data)});
  },[]);

  return (
    <div>
      {users ? <ListAll users={users} />:<Loading />}
    </div>
  );
}

export default App;