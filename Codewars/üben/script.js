function killer(suspectInfo, dead) {
  for (let i = 0; i < suspectInfo.length; i++) {
    let subArray = suspectInfo[i];
    for (let j = 0; j < subArray.length; j++) {
      let element = subArray[j];
      if (element === dead) {
        return suspectInfo[i];
      }
    }
  }
}
console.log(
  killer(
    "James"[("Jacob", "Bill", "Lucas")],
    "Johnny"[("David", "Kyle", "Lucas")],
    "Peter"[("Lucy", "Kyle")],
    ["Lucas", "Bill"]
  )
);
