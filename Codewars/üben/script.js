function likeOrDislike(buttons) {
  for (i = 0; i < buttons.length; i++) {
    if (buttons[i] === buttons[i + 1]) {
      return;
    }
  }
}
console.log(
  likeOrDislike(
    "Like",
    "Like",
    "Dislike",
    "Like",
    "Like",
    "Like",
    "Like",
    "Dislike"
  )
); // Dislike
