import { useEffect, useRef } from "react";

const CHARS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン∑∆Ω⟨⟩∈∀∃";

export default function MatrixBg() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animId;
        let frame = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const fontSize = 14;
        let cols = Math.floor(canvas.width / fontSize);
        const drops = Array(cols).fill(1).map(() => Math.random() * -150);

        function draw() {
            frame++;
            // Only advance every 3 frames → 3× slower
            if (frame % 3 !== 0) {
                animId = requestAnimationFrame(draw);
                return;
            }

            // Longer fade → longer glowing trails
            ctx.fillStyle = "rgba(5, 7, 9, 0.04)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            cols = Math.floor(canvas.width / fontSize);
            while (drops.length < cols) drops.push(Math.random() * -150);

            ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

            for (let i = 0; i < cols; i++) {
                const y = drops[i] * fontSize;
                if (y < 0) { drops[i] += 0.5; continue; }

                const char = CHARS[Math.floor(Math.random() * CHARS.length)];

                // Head — bright white-green with strong glow
                ctx.fillStyle = "#e0ffe0";
                ctx.shadowColor = "#00ff41";
                ctx.shadowBlur = 14;
                ctx.fillText(char, i * fontSize, y);

                // Mid trail
                ctx.shadowBlur = 4;
                ctx.fillStyle = "rgba(0, 255, 65, 0.5)";
                ctx.fillText(
                    CHARS[Math.floor(Math.random() * CHARS.length)],
                    i * fontSize, y - fontSize
                );

                // Fading tail
                ctx.shadowBlur = 0;
                ctx.fillStyle = "rgba(0, 200, 50, 0.18)";
                ctx.fillText(
                    CHARS[Math.floor(Math.random() * CHARS.length)],
                    i * fontSize, y - fontSize * 2
                );

                // Reset
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.978) {
                    drops[i] = 0;
                }
                drops[i] += 0.5; // slower advance per tick
            }

            animId = requestAnimationFrame(draw);
        }

        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0, left: 0,
                width: "100%", height: "100%",
                zIndex: 0,
                opacity: 0.22,
                pointerEvents: "none",
            }}
        />
    );
}
