// components/QuickSuggestions.js
export default function QuickSuggestions({ onSelect }) {
  const suggestions = ["Career Guidance", "Life Advice", "Motivation"];

  return (
    <div className="flex gap-2 justify-center p-2 bg-gradient-to-r from-purple-800 to-blue-800">
      {suggestions.map((text, i) => (
        <button
          key={i}
          onClick={() => onSelect(text)}
          className="px-3 py-1 rounded-full border border-divineGold text-divineGold hover:bg-divineGold hover:text-black transition shadow-glow text-sm"
        >
          {text}
        </button>
      ))}
    </div>
  );
            }
