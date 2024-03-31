function superbowlWin(array) {
  let x = array.find((a) => a.result === "W");
  return x ? x["year"] : undefined;
}
