import { useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const COLORS = [
  "hsl(36, 90%, 55%)",      // Golden
  "hsl(12, 80%, 65%)",      // Coral/Orange
  "hsl(340, 70%, 60%)",     // Rose Pink
  "hsl(280, 60%, 65%)",     // Purple
  "hsl(50, 90%, 60%)",      // Bright Yellow
  "hsl(290, 70%, 65%)",     // Magenta
  "hsl(45, 95%, 50%)",      // Bright Gold
];

const ConfettiPiece = ({ index, isMobile }: { index: number; isMobile: boolean }) => {
  const style = useMemo(() => {
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = (isMobile ? 3.5 : 3) + Math.random() * (isMobile ? 3 : 4);
    const size = (isMobile ? 4 : 6) + Math.random() * (isMobile ? 6 : 8);
    const color = COLORS[index % COLORS.length];
    const shape = Math.random() > 0.5 ? "50%" : "0";
    return {
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      borderRadius: shape,
    };
  }, [index, isMobile]);

  return (
    <div
      className="absolute top-0 opacity-80"
      style={{
        ...style,
        animation: `confetti-fall ${style.animationDuration} linear ${style.animationDelay} infinite`,
      }}
    />
  );
};

const Confetti = () => {
  const isMobile = useIsMobile();
  const pieces = useMemo(() => Array.from({ length: isMobile ? 20 : 40 }, (_, i) => i), [isMobile]);
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((i) => (
        <ConfettiPiece key={i} index={i} isMobile={isMobile} />
      ))}
    </div>
  );
};

export default Confetti;
