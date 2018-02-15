function capitalize(word) {
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

function pluralize(word) {
  return word + "s";
}

export { capitalize }
