/**
 * AtayaHtml · Portfolio interaction layer
 * Powered by Bootstrap 5, AOS, GSAP + ScrollTrigger
 */

(function () {
    "use strict";

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ---------- Loader ---------- */
    const loader = document.getElementById("site-loader");
    window.addEventListener("load", () => {
        setTimeout(() => loader && loader.classList.add("is-hidden"), 600);
    });

    /* ---------- AOS ---------- */
    if (window.AOS) {
        AOS.init({
            duration: prefersReducedMotion ? 0 : 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
            disable: prefersReducedMotion ? true : false
        });
    }

    /* ---------- Theme toggle ---------- */
    const themeToggle = document.querySelector(".js-theme-toggle");
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("ataya-theme");

    if (savedTheme) {
        root.setAttribute("data-theme", savedTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const current = root.getAttribute("data-theme") || "dark";
            const next = current === "dark" ? "light" : "dark";
            root.setAttribute("data-theme", next);
            localStorage.setItem("ataya-theme", next);
        });
    }

    /* ---------- Nav scroll state + active link ---------- */
    const siteNav = document.querySelector(".js-site-nav");
    const navLinks = document.querySelectorAll(".site-nav__link[data-section]");
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (siteNav) {
                    siteNav.classList.toggle("is-scrolled", window.scrollY > 12);
                }

                const backTop = document.querySelector(".js-back-to-top");
                if (backTop) {
                    backTop.classList.toggle(
                        "is-visible",
                        window.scrollY > window.innerHeight * 0.6
                    );
                }

                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* Active section highlighting via IntersectionObserver */
    const sections = document.querySelectorAll(
        "section[id], main > section[id]"
    );

    if ("IntersectionObserver" in window && sections.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        navLinks.forEach((link) => {
                            link.classList.toggle(
                                "is-active",
                                link.dataset.section === id
                            );
                        });
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        sections.forEach((s) => observer.observe(s));
    }

    /* ---------- Mobile menu ---------- */
    const navToggle = document.querySelector(".js-nav-toggle");
    const navMenu = document.querySelector(".js-nav-menu");

    function closeMenu() {
        if (!navToggle || !navMenu) return;
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "開啟選單");
        navMenu.classList.remove("is-open");
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("is-open");
            navToggle.classList.toggle("is-open", isOpen);
            navToggle.setAttribute("aria-expanded", String(isOpen));
            navToggle.setAttribute(
                "aria-label",
                isOpen ? "關閉選單" : "開啟選單"
            );
        });

        navMenu.querySelectorAll("a").forEach((a) => {
            a.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", (e) => {
            if (!navMenu.classList.contains("is-open")) return;
            if (!siteNav.contains(e.target)) closeMenu();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeMenu();
        });
    }

    /* ---------- Typewriter for hero role ---------- */
    const typeEl = document.querySelector(".js-type");

    if (typeEl && !prefersReducedMotion) {
        const words = JSON.parse(typeEl.dataset.words || "[]");
        let wi = 0;
        let ci = 0;
        let deleting = false;

        function tick() {
            const word = words[wi];
            if (!word) return;

            if (deleting) {
                ci -= 1;
            } else {
                ci += 1;
            }

            typeEl.textContent = word.slice(0, ci);

            let delay = deleting ? 50 : 110;

            if (!deleting && ci === word.length) {
                delay = 1600;
                deleting = true;
            } else if (deleting && ci === 0) {
                deleting = false;
                wi = (wi + 1) % words.length;
                delay = 400;
            }

            setTimeout(tick, delay);
        }

        tick();
    } else if (typeEl) {
        const words = JSON.parse(typeEl.dataset.words || "[]");
        typeEl.textContent = words[0] || "";
    }

    /* ---------- Counter animation ---------- */
    const counters = document.querySelectorAll(".js-counter");

    if ("IntersectionObserver" in window && counters.length) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                if (el.dataset.counted === "true") return;

                const target = parseInt(el.dataset.target || "0", 10);
                const duration = prefersReducedMotion ? 0 : 1400;
                const start = performance.now();

                function frame(now) {
                    const progress = duration === 0
                        ? 1
                        : Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.round(target * eased).toString();

                    if (progress < 1) {
                        window.requestAnimationFrame(frame);
                    } else {
                        el.dataset.counted = "true";
                    }
                }

                window.requestAnimationFrame(frame);
                counterObserver.unobserve(el);
            });
        }, { threshold: 0.4 });

        counters.forEach((c) => counterObserver.observe(c));
    }

    /* ---------- Progress bar fill ---------- */
    const bars = document.querySelectorAll(".bar__fill");

    if ("IntersectionObserver" in window && bars.length) {
        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-animated");
                    barObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        bars.forEach((bar) => barObserver.observe(bar));
    }

    /* ---------- GSAP ScrollTrigger reveals ----------
     * Note: project-card and other AOS-managed elements are handled by AOS
     * alone to avoid double-animation conflicts. GSAP is reserved for items
     * that benefit from stagger or fine-grained timing without data-aos.
     */
    if (
        window.gsap &&
        window.ScrollTrigger &&
        !prefersReducedMotion
    ) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".badges__list .badge-pill").forEach((pill, i) => {
            gsap.from(pill, {
                opacity: 0,
                y: 16,
                duration: 0.5,
                ease: "power2.out",
                delay: Math.min(i * 0.04, 0.6),
                scrollTrigger: {
                    trigger: ".badges__list",
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        });
    }

    /* ---------- Smooth scroll for in-page anchors ---------- */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth",
                block: "start"
            });
        });
    });

    /* ---------- Back to top ---------- */
    const backToTop = document.querySelector(".js-back-to-top");
    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion ? "auto" : "smooth"
            });
        });
    }

    /* ---------- Footer year ---------- */
    const footerYear = document.getElementById("footer-year");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
})();
