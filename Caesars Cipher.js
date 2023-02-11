function rot13(str) {
  let decoded = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      char = (char - 65 + 13) % 26 + 65;
    }
    decoded += String.fromCharCode(char);
  }
  return decoded;
}
rot13("SERR PBQR PNZC");
