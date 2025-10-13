export default function RollingFooter() {
  const text = "Getting started → Subscribe → Generate → Share → 16fps does the rest";
  const repeatedText = Array(20).fill(text).join(" • ");

  return (
    <footer className="py-6 border-t border-white/10 overflow-hidden">
      <div className="rolling-text whitespace-nowrap text-white/40 text-sm">
        {repeatedText}
      </div>
    </footer>
  );
}
