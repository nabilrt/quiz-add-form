const QuestionDetails = ({
  id,
  question,
  answers,
  correctAnswers,
  DeleteQuestion,
}) => {
  return (
    <div className="mt-4 flex flex-col border border-purple-300 shadow-lg p-4 w-full">
      <div className="flex justify-between">
        <p className="font-semibold text-xl">{question}</p>
        <p
          className="font-semibold cursor-pointer"
          onClick={() => DeleteQuestion(id)}
        >
          Delete
        </p>
      </div>

      <p className="p-2">Options</p>
      <div className="flex flex-wrap w-full  ">
        {answers.map((option, i) => {
          return (
            <div className="w-1/2 p-2 border border-blue-200 mb-2">
              {option}
            </div>
          );
        })}
      </div>

      <p className="p-2">Answers</p>
      <div className="flex flex-wrap   w-full">
        {correctAnswers.map((answer, i) => {
          return (
            <div className="w-1/2 p-2 border border-blue-200 mb-2">
              {answer}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionDetails;
