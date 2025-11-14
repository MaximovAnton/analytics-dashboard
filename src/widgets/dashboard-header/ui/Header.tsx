export function Header() {
  return (
    <header className="w-full py-4 border-b border-white/10 backdrop-blur bg-white/5 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Analytics Dashboard</h1>
        <div className="text-sm opacity-70">
          Real-time data stream
        </div>
      </div>
    </header>
  );
}