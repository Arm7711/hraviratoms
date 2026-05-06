import { useState, useEffect, useRef } from "react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500&display=swap');

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes popIn {
  0% { opacity: 0; transform: scale(.4); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes slideRight {
  from { opacity: 0; transform: translateX(-18px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes bounceIn {
  0% { opacity: 0; transform: translateY(-22px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes blurIn {
  from { opacity: 0; filter: blur(10px); }
  to { opacity: 1; filter: blur(0); }
}

.text {
  font-family: 'Fraunces', serif;
  line-height: 18px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35em;
  color: black;
}

.word {
  opacity: 0;
  display: inline-block;
  will-change: transform, opacity;
}

.word-fade { animation: fadeUp 0.45s cubic-bezier(.22,1,.36,1) forwards; }
.word-pop { animation: popIn 0.42s cubic-bezier(.34,1.56,.64,1) forwards; }
.word-slide { animation: slideRight 0.36s cubic-bezier(.22,1,.36,1) forwards; }
.word-bounce { animation: bounceIn 0.52s cubic-bezier(.22,1,.36,1) forwards; }
.word-blur { animation: blurIn 0.5s ease forwards; }
`;

export default function TextAnimator({
  text = "Слова оживают сами при появлении",
  mode = "blur",
  className = '',
}) {
  const [tokens, setTokens] = useState([]);
  const containerRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          setTokens(text.trim().split(/\s+/));
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [text]);

  return (
    <div ref={containerRef} className="text">
      {tokens.length
        ? tokens.map((word, i) => (
            <span
              key={i}
              className={`word word-${mode} ${className}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {word}
            </span>
          ))
        : text}
    </div>
  );
}