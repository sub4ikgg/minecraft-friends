export default async function copyToClipboard(text) {
  // Try modern async clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) {
      // fall through to legacy strategies
    }
  }

  // Fallback 1: hidden input + execCommand
  try {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = text;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.top = '0';
    input.style.left = '0';
    input.style.opacity = '0';
    input.style.pointerEvents = 'none';
    document.body.appendChild(input);
    input.focus();
    input.setSelectionRange(0, input.value.length);
    const ok = document.execCommand('copy');
    document.body.removeChild(input);
    if (ok) return true;
  } catch (_) {}

  // Fallback 2: contentEditable container
  try {
    const div = document.createElement('div');
    div.contentEditable = 'true';
    div.style.position = 'fixed';
    div.style.top = '0';
    div.style.left = '0';
    div.style.opacity = '0';
    div.style.pointerEvents = 'none';
    div.innerText = text;
    document.body.appendChild(div);
    const range = document.createRange();
    range.selectNodeContents(div);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    const ok = document.execCommand('copy');
    sel.removeAllRanges();
    document.body.removeChild(div);
    if (ok) return true;
  } catch (_) {}

  return false;
}
