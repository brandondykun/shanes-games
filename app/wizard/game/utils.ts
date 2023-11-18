export const handleCorrectAnswer = (
  isSuperQuestion: boolean,
  setPoints: React.Dispatch<React.SetStateAction<number>>,
  setLivesRemaining: React.Dispatch<React.SetStateAction<number>>
) => {
  if (isSuperQuestion) {
    setPoints((prev) => prev + 5);
    setLivesRemaining((prev) => prev + 1);
  } else {
    setPoints((prev) => prev + 1);
  }
};

export const handleIncorrectAnswer = (
  isSuperQuestion: boolean,
  setLivesRemaining: React.Dispatch<React.SetStateAction<number>>
) => {
  if (isSuperQuestion) {
    setLivesRemaining((prev) => prev - 2);
  } else {
    setLivesRemaining((prev) => prev - 1);
  }
};

export const getIsSuperQuestion = (questionNumber: number) => {
  return questionNumber % 10 === 0;
};
