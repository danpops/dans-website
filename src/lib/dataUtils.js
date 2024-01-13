export { getPageNumbers }

function getPageNumbers (totalPages, currentPage) {
  const result = []
  // Ensure currentPage is within valid range
  currentPage = Math.min(Math.max(currentPage, 1), totalPages)
  // Add two numbers before the current page
  for (let i = currentPage - 2; i < currentPage; i++) {
    i > 0 && result.push(i)
  }
  // Add the current page
  result.push(currentPage)
  // Add two numbers after the current page
  for (let i = currentPage + 1; i <= currentPage + 2; i++) {
    i <= totalPages && result.push(i)
  }
  return result
}
