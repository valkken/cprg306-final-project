export default function QuestionCard({ 
  currentQuestion, 
  questionNumber, 
  totalQuestions, 
  handleAnswer 
}) {
  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      
      {/* Question Header */}
      <div className="mb-10">
        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-4">
          Question {questionNumber} / {totalQuestions}
        </p>
        <h2 className="text-3xl font-bold text-white leading-snug">
          {currentQuestion.question}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="flex flex-col gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              padding: "18px 24px",
              borderRadius: "8px",
              border: "2px solid white", // Distinct white border
            }}
            // HIGH CONTRAST BUTTONS
            // Default: Black BG, White Text, White Border
            // Hover: White BG, Black Text (Inverted)
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