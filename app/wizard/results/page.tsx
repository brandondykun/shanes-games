"use client";

import { useWizardsContext } from "@/app/context/WizardContext";

const WizardGameResults = () => {
  const { points, questionNumber, wonGame } = useWizardsContext();

  const winningContent = (
    <div>
      <div>Congratulations!! You won the game!!!</div>
    </div>
  );

  const losingContent = (
    <div>
      <div>Oh no....you ran out of lives. You lose.</div>
    </div>
  );

  return (
    <main className="min-h-screen p-8 flex flex-col">
      <h1>Wizard Game Results</h1>
      {wonGame ? winningContent : losingContent}
      <div>
        <div>Points: {points}</div>
        <div>Question Number: {questionNumber}</div>
      </div>
    </main>
  );
};

export default WizardGameResults;
