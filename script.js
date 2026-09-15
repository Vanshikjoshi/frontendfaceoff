/* =========================================================
   03TOON TIME
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            let mobileMenu = document.querySelector(".mobile-menu");

            if (!mobileMenu) {

                mobileMenu = document.createElement("div");
                mobileMenu.className = "mobile-menu";

                mobileMenu.innerHTML = `
                    <a href="#home">Home</a>
                    <a href="#shows">Shows</a>
                    <a href="#characters">Characters</a>
                    <a href="#episodes">Episodes</a>
                    <a href="#games">Games</a>
                    <a href="#about">About</a>
                `;

                document.querySelector(".navbar").appendChild(mobileMenu);

                mobileMenu.querySelectorAll("a").forEach(link => {

                    link.addEventListener("click", () => {
                        mobileMenu.remove();
                    });

                });

            } else {

                mobileMenu.remove();

            }

        });

    }


    /* =====================================================
       SMOOTH SCROLLING
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       EPISODE FILTERS
    ===================================================== */

    const filterButtons = document.querySelectorAll(".episode-filters .filter");
    const episodeCards = document.querySelectorAll(".episode-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            /* Remove active from every button */
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            /* Add active to clicked button */
            button.classList.add("active");

            const selectedShow = button.textContent
                .trim()
                .toLowerCase();

            episodeCards.forEach(card => {

                const showNameElement =
                    card.querySelector(".episode-info small");

                if (!showNameElement) return;

                const showName = showNameElement.textContent
                    .trim()
                    .toLowerCase();

                /* ALL */
                if (selectedShow === "all") {

                    card.style.display = "";

                }

                /* SKYBOUND ACADEMY */
                else if (
                    selectedShow === "skybound academy" &&
                    showName === "skybound academy"
                ) {

                    card.style.display = "";

                }

                /* FOREST GUARDIANS */
                else if (
                    selectedShow === "forest guardians" &&
                    showName === "forest guardians"
                ) {

                    card.style.display = "";

                }

                /* PROJECT NEXT GEN */
                else if (
                    selectedShow === "project next gen" &&
                    showName === "project next gen"
                ) {

                    card.style.display = "";

                }

                /* OTHERWISE HIDE */
                else {

                    card.style.display = "none";

                }

            });

        });

    });


    /* =====================================================
       SHOW PLAY BUTTONS
    ===================================================== */

    const showPlayButtons = document.querySelectorAll(".show-play");

    showPlayButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".show-card");

            if (!card) return;

            const title = card.querySelector("h3")?.textContent.trim();

            openWatchModal(title || "03TOON TIME");

        });

    });


    /* =====================================================
       EPISODE PLAY BUTTONS
    ===================================================== */

    const episodePlayButtons =
        document.querySelectorAll(".episode-play");

    episodePlayButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".episode-card");

            if (!card) return;

            const title =
                card.querySelector("h3")?.textContent.trim();

            const show =
                card.querySelector("small")?.textContent.trim();

            openWatchModal(
                `${show || "03TOON TIME"} — ${title || "Episode"}`
            );

        });

    });


    /* =====================================================
       WATCH MODAL
    ===================================================== */

    function openWatchModal(title) {

        closeModal();

        const modal = document.createElement("div");

        modal.className = "toon-modal";

        modal.innerHTML = `
            <div class="toon-modal-overlay"></div>

            <div class="toon-modal-box">

                <button class="toon-modal-close">
                    ×
                </button>

                <div class="toon-modal-icon">
                    ▶
                </div>

                <span>03TOON TIME</span>

                <h2>${title}</h2>

                <p>
                    Your adventure is about to begin!
                </p>

                <button class="toon-watch-button">
                    ▶ Watch Now
                </button>

            </div>
        `;

        document.body.appendChild(modal);

        document.body.style.overflow = "hidden";

        modal
            .querySelector(".toon-modal-close")
            .addEventListener("click", closeModal);

        modal
            .querySelector(".toon-modal-overlay")
            .addEventListener("click", closeModal);

        modal
            .querySelector(".toon-watch-button")
            .addEventListener("click", () => {

                alert(
                    "Coming soon! This episode will be available here."
                );

            });

    }


    function closeModal() {

        const modal = document.querySelector(".toon-modal");

        if (modal) {
            modal.remove();
        }

        document.body.style.overflow = "";

    }


    /* =====================================================
       CHARACTER CARDS
    ===================================================== */

    const characterCards =
        document.querySelectorAll(".character-card");

    characterCards.forEach(card => {

        card.addEventListener("click", () => {

            characterCards.forEach(item => {
                item.classList.remove("selected");
            });

            card.classList.add("selected");

        });

    });


    /* =====================================================
       CHARACTER CAROUSEL
    ===================================================== */

    const characterGrid =
        document.querySelector(".characters-grid");

    const prevButton =
        document.querySelector(".character-prev");

    const nextButton =
        document.querySelector(".character-next");

    if (characterGrid && prevButton && nextButton) {

        nextButton.addEventListener("click", () => {

            characterGrid.scrollBy({
                left: 300,
                behavior: "smooth"
            });

        });

        prevButton.addEventListener("click", () => {

            characterGrid.scrollBy({
                left: -300,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       GAME CARDS
    ===================================================== */

    const gameCards =
        document.querySelectorAll(".game-card");

    gameCards.forEach(card => {

        card.addEventListener("click", () => {

            const gameName =
                card.querySelector("h3")?.textContent.trim();

            openGameModal(gameName || "Game");

        });

    });


    function openGameModal(gameName) {

        closeModal();

        const modal = document.createElement("div");

        modal.className = "toon-modal";

        modal.innerHTML = `
            <div class="toon-modal-overlay"></div>

            <div class="toon-modal-box">

                <button class="toon-modal-close">
                    ×
                </button>

                <div class="toon-modal-icon">
                    🎮
                </div>

                <span>03TOON TIME FUN ZONE</span>

                <h2>${gameName}</h2>

                <p>
                    Get ready to play! This game is coming soon.
                </p>

                <button class="toon-watch-button">
                    Let's Play!
                </button>

            </div>
        `;

        document.body.appendChild(modal);

        document.body.style.overflow = "hidden";

        modal
            .querySelector(".toon-modal-close")
            .addEventListener("click", closeModal);

        modal
            .querySelector(".toon-modal-overlay")
            .addEventListener("click", closeModal);

        modal
            .querySelector(".toon-watch-button")
            .addEventListener("click", () => {

                alert(
                    `${gameName} will be available soon!`
                );

            });

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    const searchButton =
        document.querySelector(".search-btn");

    if (searchButton) {

        searchButton.addEventListener("click", () => {

            const searchTerm = prompt(
                "What would you like to find on 03TOON TIME?"
            );

            if (!searchTerm) return;

            const term = searchTerm.toLowerCase();

            const sections = document.querySelectorAll(
                "section, article"
            );

            let found = false;

            sections.forEach(element => {

                if (
                    element.textContent
                        .toLowerCase()
                        .includes(term)
                ) {

                    if (!found) {

                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                        found = true;

                    }

                }

            });

            if (!found) {

                alert(
                    `Sorry! We couldn't find "${searchTerm}".`
                );

            }

        });

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".show-card, .character-card, .episode-card, .game-card, .about-container"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.1
            }
        );

        revealElements.forEach(element => {

            element.classList.add("reveal-hidden");

            observer.observe(element);

        });

    }


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


    /* =====================================================
       MARQUEE PAUSE ON HOVER
    ===================================================== */

    const marquee =
        document.querySelector(".marquee");

    const marqueeContent =
        document.querySelector(".marquee-content");

    if (marquee && marqueeContent) {

        marquee.addEventListener("mouseenter", () => {
            marqueeContent.style.animationPlayState = "paused";
        });

        marquee.addEventListener("mouseleave", () => {
            marqueeContent.style.animationPlayState = "running";
        });

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const footerYear =
        document.querySelector(".footer-bottom p");

    if (footerYear) {

        footerYear.innerHTML =
            footerYear.innerHTML.replace(
                "2026",
                new Date().getFullYear()
            );

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(
            ".nav-links a"
        );

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    });

});