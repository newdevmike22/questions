import { useState } from "react";
import question from "./data";
import Questions from "./components/Questions";

const App = () => {
  const [questions, setQuestions] = useState(question);

  return (
    <main className="min-h-[100vh] flex justify-center items-center">
      <Questions questions={questions} />
    </main>
  )
};

export default App;