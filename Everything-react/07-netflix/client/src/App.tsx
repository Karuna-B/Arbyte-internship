import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./hooks/useAuth";

function App() {
  const { fetchUser } = useAuth();

  useEffect(() => {
    fetchUser;
  },[]);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
