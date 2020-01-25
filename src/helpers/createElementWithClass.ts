export const createElementWithClass = (elementName: string, className: string) => {
  const element = document.createElement(elementName)
  element.classList.add(className)
  return element
}