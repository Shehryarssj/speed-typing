import classNames from "classnames";
import Caret from "./Caret";
import "classnames";

function UserTypings({ userInput, words, className }) {
  const chars = userInput.split("");
  return (
    <div className={className}>
      {chars.map((char, index) => {
        return (
          <Character
            key={`${char}_${index}`}
            char={char}
            actual={char}
            expected={words[index]}
          />
        );
      })}
      <Caret />
    </div>
  );
}

function Character({ char, actual, expected }) {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

  return (
    <span
      className={classNames({
        "text-red-500": !isCorrect && !isWhiteSpace,
        "text-primary-400": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  );
}

export default UserTypings;
