function alphabetWar(fight) {
  let sum = 0;
  for (i = 0; i < fight.length; i++) {
    let char = fight[i];
    switch (char) {
      case "m":
        sum += 4;
        break;
      case "q":
        sum += 3;
        break;
      case "d":
        sum += 2;
        break;
      case "z":
        sum += 1;
        break;
      case "w":
        sum -= 4;
        break;
      case "p":
        sum -= 3;
        break;
      case "b":
        sum -= 2;
        break;
      case "s":
        sum -= 1;
        break;
      default:
        break;
    }
    if (sum < 0) {
      return "Left side wins!";
    }
    if (sum > 0) {
      return "Right side wins!";
    }
    if (sum === 0) {
      return "Let's fight again!";
    }
  }
}
console.log(alphabetWar(m));
