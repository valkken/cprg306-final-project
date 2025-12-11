'use client';

export default function QuestionCard({ 
  questionData, 
  onAnswer, 
  selectedAnswer, 
  isProcessing 
}) {
  const { question, options, answer } = questionData;

  const getButtonStyle = (option) => {
    const base = "w-full p-6 text-left border-2 rounded-xl font-medium text-lg transition-all duration-200";

    if (selectedAnswer === option) {
      if (option === answer) {
        return `${base} bg-teal-50 border-teal-500 text-teal-800 shadow-md scale-[1.02]`;
      }
      return `${base} bg-red-50 border-red-500 text-red-800 opacity-90`;
    }

    if (selectedAnswer && option === answer) {
      return `${base} bg-teal-50 border-teal-500 text-teal-800 opacity-100`;
    }

    if (selectedAnswer) {
      return `${base} bg-slate-50 border-slate-100 text-slate-400 opacity-50`;
    }

    return `${base} bg-white border-slate-200 text-slate-700 hover:border-indigo-500 hover:shadow-lg hover:bg-slate-50 cursor-pointer active:scale-[0.98]`;
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
      <div className="bg-slate-50 p-8 md:p-12 border-b border-slate-200 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
          {question}
        </h2>
      </div>

      <div className="p-8 md:p-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option)}
              disabled={isProcessing}
              className={getButtonStyle(option)}
            >
              <span className="inline-block w-8 font-bold opacity-40">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}