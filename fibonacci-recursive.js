function fibGenerator(n, currentSequence = [0, 1]) {
  
  if (currentSequence.length === n) {
    return currentSequence;

  } else {
    const nextFibNum = currentSequence[currentSequence.length - 1] + currentSequence[currentSequence.length - 2];
    currentSequence.push(nextFibNum);
    return fibGenerator(n, currentSequence);
  }
}