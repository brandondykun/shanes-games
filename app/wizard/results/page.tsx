"use client";

import { useWizardsContext } from "@/app/context/WizardContext";

const WizardGameResults = () => {
  const { context } = useWizardsContext();

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
      {context.wonGame ? winningContent : losingContent}
      <div>
        <div>Points: {context.points}</div>
        <div>Question Number: {context.questionNumber}</div>
      </div>
    </main>
  );
};

export default WizardGameResults;
