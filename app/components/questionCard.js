export default function QuestionCard({
  currentQuestion,
  questionNumber,
  totalQuestions,
  handleAnswer,
}) {
  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <div className="mb-10">
        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-4">
          Question {questionNumber} / {totalQuestions}
        </p>
        <h2 className="text-3xl font-bold text-white leading-snug">
          {currentQuestion.question}
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              padding: "18px 24px",
              borderRadius: "8px",
              border: "2px solid white",
            }}
            className="w-full text-left bg-black text-white text-lg font-semibold 
                       hover:bg-white hover:text-black 
                       transition-all duration-200"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
