"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import QuestionCard from "../components/QuestionCard";
import ResultsView from "../components/ResultsView";
import { questions as allQuestions } from "../data/questions";

export default function QuizPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  const QUESTIONS_PER_QUIZ = 15;

  const startQuiz = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, QUESTIONS_PER_QUIZ));
    setCurrentQuestionIndex(0);
    setScore(0);
    setLoading(false);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  const handleAnswerSelection = (selectedOption) => {
    const isCorrect = selectedOption === quizQuestions[currentQuestionIndex].correctAnswer;
    const newScore = isCorrect ? score + 1 : score;
    
    if (isCorrect) setScore(newScore);

    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  // Loading State - White text on Black
  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white font-bold text-xl">
      Loading Quiz...
    </div>
  );


  // Quiz View
  return (
    // STRICT BLACK BACKGROUND
    <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center">
      
      <h1 className="text-4xl font-bold mb-8 tracking-wide">TriviaMaster</h1>
      
      {/* User Info - High Contrast */}
      {user && (
        <div className="flex flex-col items-center mb-10">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full mb-3 border-2 border-white"
            />
          )}
          <p className="text-lg text-gray-300">
            Player: <span className="font-bold text-white">{user.displayName}</span>
          </p>
        </div>
      )}

      {/* Container for Question Card */}
      <div className="w-full max-w-3xl">
        {quizQuestions.length > 0 && (
          <QuestionCard
            currentQuestion={quizQuestions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={QUESTIONS_PER_QUIZ}
            handleAnswer={handleAnswerSelection}
          />
        )}
      </div>
    </div>
  );
}