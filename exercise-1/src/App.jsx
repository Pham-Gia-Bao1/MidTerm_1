import React, { useState } from "react";



export const userData = {
  firstName: "Gia Bao", // feel free to replace the name value
  lastName: "Ogor", // feel free to replace the name value
  title: "PN React JS Killer", // feel free to replace the title value
};

// Edit the User component code to output the userData data
export function User({data}) {
  // const [data, userData] = useState()
  return (
    <div id="user" data-testid="user">
      <h2>{data.firstName}</h2>
      <p>{data.title}</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>WELCOME !!</h1>
      <p>PNV students are you ready to React Course ? You got this 💪</p>
      <User data={userData} />
    </div>
  );
}

export default App;
