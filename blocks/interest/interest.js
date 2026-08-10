export default function decorate(block) {
  // The authored textarea content lands in the first (and only) cell
  const textEl = block.querySelector('div div');

  if (textEl) {
    textEl.classList.add('interest-text');
  }
}
