/**
 * Sets up a counter that increments on each click of the provided element.
 *
 * @param {HTMLElement} element - The element to attach the counter to.
 * @return {void} This function does not return a value.
 */
export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
