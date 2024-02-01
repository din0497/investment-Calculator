import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function inputHandler(identifier, newValue) {
    setUserInput((prev) => {
      return { ...prev, [identifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={inputHandler} />
      {userInput.duration > 0 && <Results input={userInput} />}
    </>
  );
}

export default App;
