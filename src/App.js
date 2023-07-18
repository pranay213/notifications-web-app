import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    localStorage.setItem("lastname", "Pranay");
  }, []);
  return <div>App</div>;
};

export default App;
