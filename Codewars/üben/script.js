function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld > sonYearsOld * 2) {
    for (let i = dadYearsOld; i > 0; i--) {
      if (i === sonYearsOld * 2) {
        return dadYearsOld - i;
      }
    }
  }
  if (dadYearsOld < sonYearsOld * 2) {
    for (let i = dadYearsOld; i < sonYearsOld * 2; i++) {
      if (i === sonYearsOld * 2) {
        return i - dadYearsOld;
      }
    }
  } else {
    return dadYearsOld;
  }
}
console.log(twiceAsOld(36, 8));
