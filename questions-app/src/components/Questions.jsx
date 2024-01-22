import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeID, toggleQuestion }) => {
    return (
      <section className="w-[90vw] my-[5rem] mx-auto bg-white rounded-md p-[2.5rem] max-w-[800px] shadow-lg">
        <h1 className="text-[3.052rem] text-center mb-[3rem] text-[#334155]">Questions</h1>
        {questions.map((question) => {
          return (
            <SingleQuestion 
              key={question.id} 
              {...question} 
              activeID={activeID} 
              toggleQuestion={toggleQuestion}
            />
          );
        })}
      </section>
    );
  };
  
  export default Questions;