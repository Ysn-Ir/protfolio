import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const trailRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const trail = trailRef.current;
        let mx = 0, my = 0, tx = 0, ty = 0;

        document.addEventListener("mousemove", (e) => {
            mx = e.clientX;
            my = e.clientY;
            cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
        });

        function animateTrail() {
            tx += (mx - tx) * 0.12;
            ty += (my - ty) * 0.12;
            trail.style.transform = `translate(${tx - 16}px, ${ty - 16}px)`;
            requestAnimationFrame(animateTrail);
        }
        animateTrail();

        // Magnetic cursor on hover
        document.querySelectorAll(".btn, .project-card, .skill-card, .cert-card, .contact-link").forEach((el) => {
            el.addEventListener("mouseenter", () => (cursor.style.transform += " scale(2)"));
            el.addEventListener("mouseleave", () => (cursor.style.transform = cursor.style.transform.replace(" scale(2)", "")));
        });

        // Project card mouse tracking
        document.querySelectorAll(".project-card").forEach((card) => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty("--mx", ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + "%");
                card.style.setProperty("--my", ((e.clientY - rect.top) / rect.height * 100).toFixed(1) + "%");
            });
        });

        // Scroll reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add("visible"), i * 60);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });
        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

        // Animated counter
        function animateCount(el, target, suffix = "") {
            let current = 0;
            const step = target / 40;
            const timer = setInterval(() => {
                current = Math.min(current + step, target);
                el.textContent = Math.round(current) + suffix;
                if (current >= target) clearInterval(timer);
            }, 35);
        }

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const nums = entry.target.querySelectorAll(".stat-num");
                    nums[0] && animateCount(nums[0], 8, "+");
                    nums[1] && animateCount(nums[1], 5, "");
                    nums[2] && animateCount(nums[2], 3, "");
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsBar = document.querySelector(".stats-bar");
        if (statsBar) statsObserver.observe(statsBar);
    }, []);

    return (
        <>
            <div className="cursor" ref={cursorRef} />
            <div className="cursor-trail" ref={trailRef} />
        </>
    );
}
