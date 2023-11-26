"use client";

import { useState } from "react";
import DifficultySelector from "./DifficultySelector";
import Button from "@/app/components/ui/Button";
import Question from "./Question";

const MoneyMakerGame = () => {
  const [totalMoney, setTotalMoney] = useState(1);
  const [selectedGameType, setSelectedGameType] = useState<
    "addition" | "subtraction"
  >("addition");
  const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState<
    "easy" | "medium" | "hard" | null
  >(null);

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
      {selectedDifficultyLevel && (
        <div className="p-12 flex justify-center">
          <Question
            difficulty={selectedDifficultyLevel}
            setTotalMoney={setTotalMoney}
          />
        </div>
      )}
    </main>
  );
};

export default MoneyMakerGame;
