import { createContext, useContext, useState } from "react";

type WizardsGameContextProps = {
  children: React.ReactNode;
};

type WizardsContextType = {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  livesRemaining: number;
  setLivesRemaining: React.Dispatch<React.SetStateAction<number>>;
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  num1: number | null;
  setNum1: React.Dispatch<React.SetStateAction<number | null>>;
  num2: number | null;
  setNum2: React.Dispatch<React.SetStateAction<number | null>>;
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  isGuessCorrect: boolean;
  setIsGuessCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  answerSubmitted: boolean;
  setAnswerSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  wonGame: boolean;
  setWonGame: React.Dispatch<React.SetStateAction<boolean>>;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

const WizardsGameContext = createContext<WizardsContextType>(null!);

export const WizardsGameContextProvider = ({
  children,
}: WizardsGameContextProps) => {
  const [points, setPoints] = useState(0);
  const [livesRemaining, setLivesRemaining] = useState(5);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);
  const [guess, setGuess] = useState("");
  const [isGuessCorrect, setIsGuessCorrect] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const value = {
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
    isGuessCorrect,
    setIsGuessCorrect,
    answerSubmitted,
    setAnswerSubmitted,
    wonGame,
    setWonGame,
    gameOver,
    setGameOver,
  };
  return (
    <WizardsGameContext.Provider value={value}>
      {children}
    </WizardsGameContext.Provider>
  );
};

export const useWizardsContext = () => {
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
    isGuessCorrect,
    setIsGuessCorrect,
    answerSubmitted,
    setAnswerSubmitted,
    wonGame,
    setWonGame,
    gameOver,
    setGameOver,
  } = useContext(WizardsGameContext);
  return {
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
    isGuessCorrect,
    setIsGuessCorrect,
    answerSubmitted,
    setAnswerSubmitted,
    wonGame,
    setWonGame,
    gameOver,
    setGameOver,
  };
};
