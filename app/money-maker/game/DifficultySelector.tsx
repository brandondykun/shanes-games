type Props = {
  setDifficulty: React.Dispatch<
    React.SetStateAction<"easy" | "medium" | "hard" | null>
  >;
  difficulty: "easy" | "medium" | "hard" | null;
};

const DifficultySelector = ({ setDifficulty, difficulty }: Props) => {
  const handleClick = (difficultyLevel: "easy" | "medium" | "hard") => {
    setDifficulty(difficultyLevel);
  };
  return (
    <div className="flex gap-4">
      <button
        onClick={() => handleClick("easy")}
        className={`border border-1  rounded-md px-4 py-2 uppercase ${
          difficulty === "easy"
            ? "border-lime-500 text-lime-500"
            : "border-gray-600 text-gray-400 hover:border-gray-300"
        }`}
      >
        Easy
      </button>
      <button
        onClick={() => handleClick("medium")}
        className={`border border-1 rounded-md px-4 py-2 uppercase ${
          difficulty === "medium"
            ? "border-lime-500 text-lime-500"
            : "border-gray-600 text-gray-400 hover:border-gray-300"
        }`}
      >
        Medium
      </button>
      <button
        onClick={() => handleClick("hard")}
        className={`border border-1 rounded-md px-4 py-2 uppercase ${
          difficulty === "hard"
            ? "border-lime-500 text-lime-500"
            : "border-gray-600 text-gray-400 hover:border-gray-300"
        }`}
      >
        Hard
      </button>
    </div>
  );
};

export default DifficultySelector;
