const QuizQuestion = ({ quizQNA, handleInputChange, AddQuestion }) => {
  return (
    <div className="flex flex-col space-y-2 border border-slate-300 shadow-md p-4">
      <label htmlFor="">Question</label>
      <input
        type="text"
        className="py-2 px-6 border border-purple-400 w-1/2"
        name="question"
        value={quizQNA.question}
        onChange={handleInputChange}
      />
      <label htmlFor="">Answers</label>
      <input
        type="text"
        name="answers"
        className="py-2 px-6 border border-purple-400 w-1/2"
        value={quizQNA.answers}
        onChange={handleInputChange}
      />
      <label htmlFor="">Correct Answers</label>
      <input
        type="text"
        name="correctAnswers"
        className="py-2 px-6 border border-purple-400 w-1/2"
        value={quizQNA.correctAnswers}
        onChange={handleInputChange}
      />
      <button
        className="py-2 px-6 bg-purple-400 text-white"
        onClick={AddQuestion}
      >
        Submit
      </button>
    </div>
  );
};

export default QuizQuestion;
