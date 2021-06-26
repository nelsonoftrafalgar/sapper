export const encodeIcon = (str: string) => {
  const buf = []

  for (let i = str.length - 1; i >= 0; i--) {
    buf.unshift(['&#', str[i].charCodeAt(0), ';'].join(''))
  }

  return buf.join('')
}