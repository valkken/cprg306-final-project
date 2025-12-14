import React from "react";

export default function ResultsView({ score, total, user, onRetry, onHome }) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  let feedbackMessage = "";
  let feedbackColor = "text-red-500";

  if (percentage === 100) {
    feedbackMessage = "Perfect Score! You are a master.";
    feedbackColor = "text-green-400";
  } else if (percentage >= 80) {
    feedbackMessage = "Great job! You know your stuff.";
    feedbackColor = "text-cyan-400";
  } else if (percentage >= 50) {
    feedbackMessage = "Not bad! Review the course modules.";
    feedbackColor = "text-yellow-400";
  } else {
    feedbackMessage = "Keep practicing! You can do it.";
    feedbackColor = "text-red-500";
  }

  return (
    <div className="min-h-screen w-full bg-black text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Quiz Results</h1>

      {user && (
        <div className="flex flex-col items-center mb-8">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full mb-3 border-2 border-white"
            />
          )}
          <h2 className="text-xl font-bold">{user.displayName}</h2>
          <p className="text-gray-400">{user.email}</p>
        </div>
      )}

      <div className="mb-8 text-center">
        <div className="text-7xl font-extrabold text-white mb-2">
          {score} <span className="text-4xl text-gray-500">/ {total}</span>
        </div>
        <div className="text-3xl font-bold text-gray-300">{percentage}%</div>
      </div>

      <p className={`text-2xl font-bold mb-12 ${feedbackColor}`}>
        {feedbackMessage}
      </p>

      <div className="flex flex-col gap-5 w-full max-w-sm">
        <button
          onClick={onRetry}
          style={{ padding: "16px", borderRadius: "8px" }}
          className="bg-white text-black text-lg font-bold hover:bg-gray-200 transition-colors"
        >
          Try Again
        </button>

        <button
          onClick={onHome}
          style={{
            padding: "16px",
            borderRadius: "8px",
            border: "2px solid white",
          }}
          className="bg-black text-white text-lg font-bold hover:bg-white hover:text-black transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
