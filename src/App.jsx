
import './App.css'
import { useState } from 'react'
 

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleDownloadClick = (e) => {
    // Let the browser start the download, then clear focus/selection
    setTimeout(() => {
      try { e.currentTarget.blur(); } catch {}
      try {
        const sel = window.getSelection && window.getSelection();
        if (sel && sel.removeAllRanges) sel.removeAllRanges();
      } catch {}
    }, 100);
  };

  const handleCopyIP = async () => {
    const ip = '185.185.142.172:25565';
    try {
      await navigator.clipboard.writeText(ip);
    } catch (e) {}
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // simple anchor download is used; no JS handler needed

  return (
    <>
    <div className='content'>
      <div className="minecraft-header-wrapper">
        <img src="/bg-minecraft.png" alt="Minecraft background" className="minecraft-header" />
      </div>
      <h1>Minecraft для своих</h1>
      <p className="description">
        Атмосферный сервер с вечной зимой, сугробами, системой холода и жары,<br />
        улучшенными эффектами и возможностью выживать вместе с друзьями. Советую играть через <a href="https://prismlauncher.org/" target="_blank" rel="noopener noreferrer">Prism Launcher</a>. <br /><br />
      </p>
      <div className="button-group" style={{position: 'relative'}}>
        <a
          className="site-btn site-btn--secondary"
          href="https://t.me/sub4ikgg"
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
        >
          <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.5em'}}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="7" r="3" stroke="#fff" strokeWidth="2" />
              <path d="M3 16c1.5-3 10.5-3 12 0" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <path d="M13.5 8.5l2 2 3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Отправить заявку в Whitelist
          </span>
        </a>
        <a
        className="site-btn site-btn--static"
        href="/Winteroid.zip"
        download
        onClick={handleDownloadClick}
        tabIndex={-1}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        >
        <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.5em'}}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2V14" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          <path d="M5 9L10 14L15 9" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          <rect x="3" y="16" width="14" height="2" rx="1" fill="#fff"/>
          </svg>
          Скачать сборку
        </span>
        </a>
        <button type="button" className="site-btn" onClick={handleCopyIP} draggable={false}>
        <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.5em'}}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
          <rect x="7" y="3" width="6" height="4" rx="1" stroke="#fff" strokeWidth="2" fill="none"/>
          </svg>
          Скопировать IP
        </span>
        </button>
      </div>
      <div className="toast-container">
        <span
        className={`toast${showToast ? ' toast--visible' : ''}`}
        style={{display: 'inline-flex', alignItems: 'center', gap: '0.5em'}}
        >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="7" width="10" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
          <rect x="7" y="3" width="6" height="4" rx="1" stroke="#fff" strokeWidth="2" fill="none"/>
        </svg>
        IP скопирован!
        </span>
      </div>
      </div>
    </>
    )
}

export default App
