type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function GlassCard({ children, className, onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:scale-[1.02] hover:bg-white/10 ${className}`}
    >
      {children}
    </div>
  );
}