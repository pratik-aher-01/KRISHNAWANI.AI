// components/QuoteBar.js
export default function QuoteBar() {
  const quote = "“Change is the law of the universe.” – Lord Krishna"; // Can be updated daily

  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-divineGold text-center py-2 shadow-glow text-sm italic">
      {quote}
    </div>
  );
}
