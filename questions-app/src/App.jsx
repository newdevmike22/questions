import { useState } from "react";
import question from "./data";
import Questions from "./components/Questions";

const App = () => {
  const [questions, setQuestions] = useState(question);
  const [activeID, setActiveID] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveID = id === activeID ? null : id;
    setActiveID(newActiveID);
  };

  return (
    <main className="min-h-[100vh] flex justify-center items-center">
      <Questions 
        questions={questions} 
        activeID={activeID} 
        toggleQuestion={toggleQuestion}
      />
    </main>
  )
};

export default App;