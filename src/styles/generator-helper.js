export const pluralize = (word) => {
  if (word.match(/(s|x|z|ch|sh)$/)) {
    return word + 'es'
  } else if (word.match(/([^aeiou])y$/)) {
    return word.replace(/y$/, 'ies')
  } else if (word.match(/(f|fe)$/)) {
    return word.replace(/(f|fe)$/, 'ves')
  } else {
    return word + 's'
  }
}
