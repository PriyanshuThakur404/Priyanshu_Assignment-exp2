const { useState, useEffect, useRef } = React;

function LiveWordCounter({ maxWords = 150 }) {
  const [text, setText] = useState('');
  const liveRef = useRef(null);

  const countWords = (str) => {
    if (!str) return 0;
    return str.trim().split(/\s+/).filter(Boolean).length;
  };

  const handleChange = (e) => {
    let value = e.target.value;
    const words = value.trim().split(/\s+/).filter(Boolean);
    if (words.length > maxWords) {
      value = words.slice(0, maxWords).join(' ');
    }
    setText(value);
  };

  const wordCount = countWords(text);
  const remaining = Math.max(0, maxWords - wordCount);
  const status = remaining === 0 ? 'over' : remaining <= Math.ceil(maxWords * 0.1) ? 'warning' : 'ok';

  useEffect(() => {
    if (liveRef.current) {
      liveRef.current.textContent = `${remaining} words remaining`;
    }
  }, [remaining]);

  return (
    <div className="counter">
      <label htmlFor="message" className="sr-only">Message</label>
      <textarea
        id="message"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        rows={6}
        aria-label="Message"
        className={wordCount >= maxWords ? 'full' : ''}
      />

      <div className="statusRow">
        <div className={`wordCount ${status}`}>{wordCount} / {maxWords} words</div>
      </div>

      <div className="sr-only" aria-live="polite" ref={liveRef} />
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <LiveWordCounter maxWords={150} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);