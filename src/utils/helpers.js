export function formatPercentage(percentage) {
  return percentage.toFixed(0) + "%";
}

export function countErrors(actual, expected) {
  const expectedCharacters = expected.split("");
  return expectedCharacters.reduce((errors, expectedChar, i) => {
    const actualChar = actual[i];
    if (actualChar !== expectedChar) {
      errors++;
    }
    return errors;
  }, 0);
}

export function calculateAccuracyPercentage(errors, total) {
  if (total > 0) {
    const corrects = total - errors;
    return (corrects / total) * 100;
  }
  return 0;
}
