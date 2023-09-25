import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

function App() {
  const { state, words, timeLeft, typed, errors, restart, totalTyped } =
    useEngine();
  return (
    <>
      <h1 className="text-primary-500 text-7xl pb-20">Speed Typing</h1>
      <CountdownTimer time={timeLeft} />
      <WordContainer>
        <UserTypings className="absolute" userInput={typed} words={words} />

        <GeneratedWords wordList={words} />
      </WordContainer>
      <RestartButton
        className="mx-auto mt-10 text-slate-500"
        handleRestart={restart}
      />
      <Results
        state={state}
        className="mt-10"
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
}

function GeneratedWords({ wordList }) {
  return <div className="text-slate-500">{wordList}</div>;
}

function CountdownTimer({ time }) {
  return <h2 className="text-primary-400 font-medium">Time: {time}</h2>;
}

function WordContainer({ children }) {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">
      {children}
    </div>
  );
}

export default App;
