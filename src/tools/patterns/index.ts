export function patternLettersNoSpaces(value: string) {
  const filteredValue = value.replace(/[^a-zA-Z]/g, '')

  return filteredValue
}

export function patternLettersDigitsSpaces(value: string) {
  const filteredValue = value.replace(/[^a-zA-Z0-9 ]/g, '')

  return filteredValue
}

export function patternEmail(value: string) {
  const filteredValue = value.replace(/[^a-zA-Z0-9@. ]/g, '')

  return filteredValue
}

export function patternLettersDigitsNoSpaces(value: string) {
  const filteredValue = value.replace(/\s+/g, '')

  return filteredValue
}
