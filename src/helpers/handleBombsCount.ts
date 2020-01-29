import { encodeIcon } from './encodeIcon'
import { flagIcon } from '../assets/icons'

type UpdateCount = (count: number) => number

export const handleBombsCount = (nodes: NodeList, count: number, counter: HTMLParagraphElement, updateCount: UpdateCount) => {
  for (const node of nodes) {
    if (encodeIcon(node.textContent) === flagIcon) {
      const updatedCount = updateCount(count)
      counter.textContent = String(updatedCount)
      return updatedCount
    }
  }
  return count
}