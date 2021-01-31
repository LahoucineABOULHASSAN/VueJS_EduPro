import { ref } from 'vue'
const handlePage = () => {
  const page = ref({
    previous: 2,
    next: 2,
    current: 1,
  })
  const pagination = (action) => {
    switch (action.type) {
      case 'PREVIOUS':
        if (page.value.current - 1 > 0) {
          page.value.current = page.value.current - 1
          page.value.next =
            page.value.current < action.num ? page.value.current + 1 : null
          page.value.previous =
            page.value.current > 1 ? page.value.current - 1 : null
        }
        return page
      case 'CURRENT':
        page.value.next =
          page.value.current < action.num ? page.value.current + 1 : null
        page.value.previous =
          page.value.current > 1 ? page.value.current - 1 : null
        return page.value
      case 'NEXT':
        if (page.value.current + 1 <= action.num) {
          page.value.current = page.value.current + 1
          page.value.next =
            page.value.current < action.num ? page.value.current + 1 : null
          page.value.previous =
            page.value.current > 1 ? page.value.current - 1 : null
        }
        return page
      default:
        return page
    }
  }
  return { page, pagination }
}
export default handlePage
