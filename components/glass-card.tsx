export default function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-sky-200/10 bg-white/[0.04] backdrop-blur-md shadow-[0_10px_40px_rgba(2,8,23,0.35)] ${className}`}>
      {children}
    </div>
  );
}
