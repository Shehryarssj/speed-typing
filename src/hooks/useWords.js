import { useCallback, useState } from "react";
import { faker } from "@faker-js/faker";

function generateWords(count) {
  return faker.random.words(count).toLowerCase();
}

function useWords(count) {
  const [words, setWords] = useState(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);

  return { words, updateWords };
}

export default useWords;
