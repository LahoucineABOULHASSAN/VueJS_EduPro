import { computed } from 'vue'

const paginateData = computed((arr, part) => {
  const chunk_size = 3
  let parts = []
  let myChunk = []
  if (arr.length) {
    for (let index = 0; index < arr.length; index += chunk_size) {
      myChunk = arr.slice(index, index + chunk_size)
      parts.push(myChunk)
    }
    const res = parts[part - 1]
    return res
  }
})
export default paginateData
