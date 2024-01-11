import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuizQuestion from "./QuizQuestion";
import QuestionDetails from "./QuestionDetails";

function App() {
  const [quiz, setQuiz] = useState([]);
  const [quizQNA, setQuizQNA] = useState({
    question: "",
    answers: "",
    correctAnswers: "",
  });
  const [numberofQuestions, setNumberOfQuestions] = useState(0);

  const handleInputChange = (e) => {
    setQuizQNA({ ...quizQNA, [e.target.name]: e.target.value });
  };

  const AddQuestion = () => {
    const quizObject = {
      id: crypto.randomUUID(),
      question: quizQNA.question,
      answers: quizQNA.answers.split(",").map((answer) => answer.trim()),
      correctAnswers: quizQNA.correctAnswers
        .split(",")
        .map((answer) => answer.trim()),
    };
    setQuiz([...quiz, quizObject]);
    setQuizQNA({
      question: "",
      answers: "",
      correctAnswers: "",
    });

    setNumberOfQuestions((t) => t - 1); //
  };

  const DeleteQuestion = (id) => {
    const quizQuestions = [...quiz];
    const filteredQuestions = quizQuestions.filter((q) => q.id !== id);
    setQuiz([...filteredQuestions]);
  };

  return (
    <div className="p-4">
      <button
        className="py-2 px-6 bg-purple-400 text-white"
        onClick={() => setNumberOfQuestions((n) => n + 1)}
      >
        Add Questions
      </button>

      {Array.from({ length: numberofQuestions }, (_, i) => i + 1).map(
        (rating, i) => (
          <QuizQuestion
            quizQNA={quizQNA}
            handleInputChange={handleInputChange}
            AddQuestion={AddQuestion}
            key={i}
          />
        )
      )}

      {quiz.length > 0 &&
        quiz.map((quz) => {
          return <QuestionDetails {...quz} DeleteQuestion={DeleteQuestion} />;
        })}
    </div>
  );
}

export default App;
