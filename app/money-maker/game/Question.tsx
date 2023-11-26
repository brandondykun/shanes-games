import Button from "@/app/components/ui/Button";
import { getRandomInt } from "@/app/util/util";
import { useMemo, useState } from "react";

type Props = {
  difficulty: "easy" | "medium" | "hard";
  setTotalMoney: React.Dispatch<React.SetStateAction<number>>;
};

// easy = 1-50 -> $50
// medium = 50-100 -> $100
// hard = 100-1000 -> $1000

const Question = ({ difficulty, setTotalMoney }: Props) => {
  const [guessText, setGuessText] = useState("");

  const num1 = useMemo(() => {
    if (difficulty === "easy") {
      return getRandomInt(1, 50);
    } else if (difficulty === "medium") {
      return getRandomInt(50, 100);
    } else if (difficulty === "hard") {
      return getRandomInt(100, 1000);
    }
  }, [difficulty]);

  const num2 = useMemo(() => {
    if (difficulty === "easy") {
      return getRandomInt(1, 50);
    } else if (difficulty === "medium") {
      return getRandomInt(50, 100);
    } else if (difficulty === "hard") {
      return getRandomInt(100, 1000);
    }
  }, [difficulty]);

  const handleSubmit = () => {
    if (num1 && num2) {
      if (Number(guessText) === num1 + num2) {
        if (difficulty === "easy") {
          setTotalMoney((prev) => prev + 50);
        } else if (difficulty === "medium") {
          setTotalMoney((prev) => prev + 100);
        } else if (difficulty === "hard") {
          setTotalMoney((prev) => prev + 1000);
        }
      }
    }
  };

  return (
    <div className="text-2xl">
      <div className="flex flex-row gap-2 align-middle justify-center">
        <div>{num1}</div>
        <div>+</div>
        <div>{num2}</div>
        <div>=</div>
        <input
          value={guessText}
          onChange={(e) => setGuessText(e.target.value)}
          className="text-gray-950 px-4 py-2"
        />
      </div>
      <div className="flex justify-center pt-12">
        <Button text="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Question;
