import React from "react";

export const vinhData = {
  firstName: "Vinh",
  lastName: "Hoang Nhu",
  title: "PN Training Manager",
};

export const myData = {
  firstName: "My",
  lastName: "Ngo",
  title: "PN Trainer",
};

const data = [vinhData, myData];

// TODO Edit the User component code to be able to display DIFFERENT users !
export function User({ data }) {
  return (
    <div id="user" data-testid="user">
      <h2>{data.firstName}</h2>
      <p>{data.title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>PNV React Team !!</h1>
      <p>Here are some PNV React masters, do you know them?</p>
      {data.map((e) => (
        <User data={e} />
      ))}
    </div>
  );
}

export default App;
