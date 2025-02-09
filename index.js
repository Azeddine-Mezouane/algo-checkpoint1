function analyzeSentence(sentence) {
  let characterCount = 0;
  let wordCount = 0;
  let vowelCount = 0;

  const vowels = "aeiouAEIOU";
  let isPreviousSpace = true;

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    characterCount++;

    if (vowels.includes(char)) {
      vowelCount++;
    }

    if (char === " ") {
      isPreviousSpace = true;
    } else if (isPreviousSpace) {
      wordCount++;
      isPreviousSpace = false;
    }

    if (char === ".") {
      break;
    }
  }

  console.log(`Longueur de la phrase : ${characterCount}`);
  console.log(`Nombre de mots : ${wordCount}`);
  console.log(`Nombre de voyelles : ${vowelCount}`);
}

analyzeSentence("Hello world this is a test.");
