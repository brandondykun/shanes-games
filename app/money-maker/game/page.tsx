"use client";

import { useState } from "react";
import DifficultySelector from "./DifficultySelector";

const MoneyMakerGame = () => {
  const [totalMoney, setTotalMoney] = useState(1);
  const [selectedGameType, setSelectedGameType] = useState<
    "addition" | "subtraction"
  >("addition");
  const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState<
    "easy" | "medium" | "hard" | null
  >(null);

  // easy = 1-50 -> $50
  // medium = 50-100 -> $100
  // hard = 100-1000 -> $1000

  // choice of addition or subtraction can change
  // if addition multiplication is sprinkled in randomly
  // if choose subtraction, division is sprinkled in randomly

  // make investment logic where you can spend money to make the next question worth more money
  // but if you get it wrong you lose the investment money

  return (
    <main className="min-h-screen p-8 flex flex-col">
      <div>${totalMoney}</div>
      <div className="flex flex-row gap-8">
        <DifficultySelector
          setDifficulty={setSelectedDifficultyLevel}
          difficulty={selectedDifficultyLevel}
        />
      </div>
    </main>
  );
};

export default MoneyMakerGame;
