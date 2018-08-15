export default () => {
  return [].slice.call(document.getElementsByTagName("*")).reduce((a, b) => Math.max(a, +window.getComputedStyle(b).zIndex || 0), 0)
}
