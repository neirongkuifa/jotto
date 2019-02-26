export function getLetterMatchCount(guessedWord, secretWord) {
  const gSet = new Set(guessedWord)
  const sSet = new Set(secretWord)
  return [...sSet].filter(letter => gSet.has(letter)).length
}
