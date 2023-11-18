"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { getRandomInt } from "../../util/util";
import Button from "../../components/ui/Button";
import { useWizardsContext } from "@/app/context/WizardContext";
import {
  handleCorrectAnswer,
  handleIncorrectAnswer,
  getIsSuperQuestion,
} from "./utils";

const WizardGame = () => {
  const { context: ctx } = useWizardsContext();

  const router = useRouter();

  useEffect(() => {
    if (ctx.questionNumber === 51) {
      ctx.setGameOver(true);
      ctx.setWonGame(true);
      router.push("/wizard/results");
    } else if (ctx.livesRemaining === 0) {
      ctx.setGameOver(true);
      ctx.setWonGame(false);
      router.push("/wizard/results");
    } else {
      const isSuperQuestion = getIsSuperQuestion(ctx.questionNumber);
      ctx.setGuess("");
      ctx.setAnswerSubmitted(false);
      ctx.setIsGuessCorrect(false);

      const min = isSuperQuestion ? 100 : 10;
      const max = isSuperQuestion ? 1000 : 100;
      ctx.setNum1(getRandomInt(min, max));
      ctx.setNum2(getRandomInt(min, max));
    }
  }, [ctx.questionNumber, router]);

  const handleGuess = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (ctx.num1 && ctx.num2) {
      const isSuperQuestion = getIsSuperQuestion(ctx.questionNumber);
      const isCorrect = Number(ctx.guess) === ctx.num1 + ctx.num2;
      ctx.setIsGuessCorrect(isCorrect);
      ctx.setAnswerSubmitted(true);

      if (isCorrect) {
        handleCorrectAnswer(
          isSuperQuestion,
          ctx.setPoints,
          ctx.setLivesRemaining
        );
      } else {
        handleIncorrectAnswer(isSuperQuestion, ctx.setLivesRemaining);
      }
    }
  };

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;
    if (
      e.target.value === "" ||
      (re.test(e.target.value) && e.target.value.length < 5)
    ) {
      ctx.setGuess(e.target.value);
    }
  };

  const result = useMemo(
    () => ctx.num1 && ctx.num2 && ctx.num1 + ctx.num2,
    [ctx.num1, ctx.num2]
  );

  const isSuperQuestion = getIsSuperQuestion(ctx.questionNumber);

  return (
    <main className="min-h-screen p-8 flex flex-col">
      <div className="flex justify-between items-center p-4 bg-neutral-900 rounded-lg">
        <div>
          <div>Points: {ctx.points}</div>
          <div>Lives Remaining: {ctx.livesRemaining}</div>
          <div>Question Number: {ctx.questionNumber}</div>
        </div>
        <div className="flex justify-center">
          <span className="text-4xl text">Wizard Game</span>
        </div>
      </div>
      <div className="p-8">
        <div
          className={`${
            isSuperQuestion ? "ml-0" : "-ml-[10000px]"
          } transition-all duration-500 text-neutral-200 text-center text-2xl`}
        >
          Oh no an angry troll has appeared!! It's a Boss Fight question! This
          is worth 5 points and an extra life!
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center p-6">
        <div
          className={`bg-neutral-900 p-12 rounded-lg border-solid border h-fit md:w-[450px] ${
            !ctx.answerSubmitted
              ? "border-neutral-700"
              : ctx.isGuessCorrect
              ? "border-green-500"
              : "border-red-700"
          }`}
        >
          <div className="flex text-5xl justify-center items-center gap-2">
            <div className="text-neutral-200">{ctx.num1}</div>
            <span>+</span>
            <div className="text-neutral-200">{ctx.num2}</div>
            <span>=</span>
            <form className="flex flex-col items-center" id="guess-form">
              <input
                value={ctx.guess}
                onChange={handleGuessChange}
                className="text-neutral-200 text-5xl px-2 py-2 w-36 bg-neutral-600 rounded-md"
              />
            </form>
          </div>
          <div className="flex justify-center pt-10">
            <Button
              text="Guess"
              form="guess-form"
              type="submit"
              onClick={handleGuess}
              className="w-32"
              disabled={!ctx.guess || ctx.answerSubmitted}
            />
          </div>
        </div>
        <div className="text-xl text-center pt-12">
          {ctx.answerSubmitted && ctx.isGuessCorrect && (
            <div className="text-neutral-200">
              Correct. You got {isSuperQuestion ? "5 points" : "1 point"}.
            </div>
          )}
          {ctx.answerSubmitted && !ctx.isGuessCorrect && (
            <div className="text-neutral-200">
              Incorrect. The correct answer is {result}. You now have{" "}
              {ctx.livesRemaining} {ctx.livesRemaining === 1 ? "life" : "lives"}{" "}
              remaining.
            </div>
          )}
        </div>
      </div>

      {/* <div className="text-neutral-200">{result}</div> */}
      <div className="flex justify-end">
        <Button
          text="Next"
          onClick={() => ctx.setQuestionNumber((prev) => prev + 1)}
          disabled={!ctx.answerSubmitted}
          className="w-24"
        />
      </div>
    </main>
  );
};

export default WizardGame;
