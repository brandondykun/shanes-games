"use client";

import { useEffect, useMemo } from "react";
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
  const {
    points,
    setPoints,
    livesRemaining,
    setLivesRemaining,
    questionNumber,
    setQuestionNumber,
    num1,
    setNum1,
    num2,
    setNum2,
    guess,
    setGuess,
    answerSubmitted,
    setAnswerSubmitted,
    setWonGame,
    setGameOver,
  } = useWizardsContext();

  const router = useRouter();

  useEffect(() => {
    setNum1(getRandomInt(1, 100));
    setNum2(getRandomInt(1, 100));
  }, []);

  const handleGuess = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (num1 && num2) {
      const isSuperQuestion = getIsSuperQuestion(questionNumber);
      setAnswerSubmitted(true);
      const isCorrect = Number(guess) === num1 + num2;
      if (isCorrect) {
        handleCorrectAnswer(isSuperQuestion, setPoints, setLivesRemaining);
      } else {
        handleIncorrectAnswer(isSuperQuestion, setLivesRemaining);
      }
    }
  };

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;
    if (
      e.target.value === "" ||
      (re.test(e.target.value) && e.target.value.length < 5)
    ) {
      setGuess(e.target.value);
    }
  };

  const handleNextClick = () => {
    setQuestionNumber((prev) => prev + 1);
    setAnswerSubmitted(false);
    setGuess("");
    if (questionNumber === 50) {
      setGameOver(true);
      setWonGame(true);
      router.push("/wizard/results");
    } else if (livesRemaining === 0) {
      setGameOver(true);
      setWonGame(false);
      router.push("/wizard/results");
    } else {
      const isSuperQuestion = getIsSuperQuestion(questionNumber + 1);
      const min = isSuperQuestion ? 100 : 10;
      const max = isSuperQuestion ? 1000 : 100;
      setNum1(getRandomInt(min, max));
      setNum2(getRandomInt(min, max));
    }
  };

  const result = useMemo(() => num1 && num2 && num1 + num2, [num1, num2]);

  const isSuperQuestion = getIsSuperQuestion(questionNumber);

  const isCorrect =
    num1 && num2 && answerSubmitted && Number(guess) === num1 + num2;

  return (
    <main className="min-h-screen p-8 flex flex-col">
      <div className="flex justify-between items-center p-4 bg-neutral-900 rounded-lg">
        <div>
          <div>Points: {points}</div>
          <div>Lives Remaining: {livesRemaining}</div>
          <div>Question Number: {questionNumber}</div>
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
          Oh no an angry troll has appeared!! It&apos;s a Boss Fight question!
          This is worth 5 points and an extra life!
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center p-6">
        <div
          className={`bg-neutral-900 p-12 rounded-lg border-solid border h-fit md:w-[450px] ${
            !answerSubmitted
              ? "border-neutral-700"
              : isCorrect
              ? "border-green-500"
              : "border-red-700"
          }`}
        >
          <div className="flex text-5xl justify-center items-center gap-2">
            <div className="text-neutral-200">{num1}</div>
            <span>+</span>
            <div className="text-neutral-200">{num2}</div>
            <span>=</span>
            <form className="flex flex-col items-center" id="guess-form">
              <input
                value={guess}
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
              disabled={!guess || answerSubmitted}
            />
          </div>
        </div>
        <div className="text-xl text-center pt-12">
          {answerSubmitted && isCorrect && (
            <div className="text-neutral-200">
              Correct. You got {isSuperQuestion ? "5 points" : "1 point"}.
            </div>
          )}
          {answerSubmitted && !isCorrect && (
            <div className="text-neutral-200">
              Incorrect. The correct answer is {result}. You now have{" "}
              {livesRemaining} {livesRemaining === 1 ? "life" : "lives"}{" "}
              remaining.
            </div>
          )}
        </div>
      </div>

      {/* <div className="text-neutral-200">{result}</div> */}
      <div className="flex justify-end">
        <Button
          text="Next"
          onClick={handleNextClick}
          disabled={!answerSubmitted}
          className="w-24"
        />
      </div>
    </main>
  );
};

export default WizardGame;
