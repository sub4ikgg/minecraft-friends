import copyToClipboard from '../hooks/useClipboard';

export default function CopyButton({ text, className = 'site-btn', onCopied, children }) {
  const handleClick = async () => {
    const ok = await copyToClipboard(text);
    if (onCopied) onCopied(ok);
  };
  return (
    <button type="button" className={className} onClick={handleClick} draggable={false}>
      {children}
    </button>
  );
}
