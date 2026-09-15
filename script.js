javascript
/* =========================================================
   03TOON TIME - Interactive JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. MOBILE MENU
       ===================================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        const mobileMenu = document.createElement("div");
        mobileMenu.className = "mobile-menu";

        mobileMenu.innerHTML = `
    < div class="mobile-menu-inner" >
        ${navLinks.innerHTML}
            </div >
    `;

        navbar.appendChild(mobileMenu);

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("show");
            menuBtn.textContent = mobileMenu.classList.contains("show")
                ? "✕"
                : "☰";
        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("show");
                menuBtn.textContent = "☰";
            });
        });
    }


    /* =====================================================
       2. ACTIVE NAVIGATION LINK
       ===================================================== */

    const allNavLinks = document.querySelectorAll(
        ".nav-links a, .mobile-menu a"
    );

    allNavLinks.forEach(link => {
        link.addEventListener("click", () => {

            allNavLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });


    /* =====================================================
       3. SMOOTH SCROLLING
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId.length <= 1
            ) {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* =====================================================
       4. EPISODE FILTER
       ===================================================== */

    const filterButtons = document.querySelectorAll(".filter");
    const episodeCards = document.querySelectorAll(".episode-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const selectedShow = button.textContent.trim();

            episodeCards.forEach(card => {

                const showNameElement = card.querySelector(
                    ".episode-info .show"
                );

                const showName = showNameElement
                    ? showNameElement.textContent.trim()
                    : "";

                if (
                    selectedShow === "All" ||
                    showName === selectedShow
                ) {
                    card.style.display = "";
                    card.style.animation = "fadeIn 0.4s ease";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });


    /* =====================================================
       5. EPISODE / SHOW PLAY MODAL
       ===================================================== */

    const modal = document.createElement("div");

    modal.className = "toon-modal";

    modal.innerHTML = `
    < div class="toon-modal-overlay" ></div >

        <div class="toon-modal-box">

            <button class="modal-close" aria-label="Close">
                ✕
            </button>

            <div class="modal-icon">
                ▶
            </div>

            <span class="modal-label">
                03TOON TIME
            </span>

            <h2 class="modal-title">
                Adventure Loading...
            </h2>

            <p class="modal-description">
                Get ready for another amazing adventure!
            </p>

            <button class="modal-watch">
                ▶ START WATCHING
            </button>

        </div>
`;

    document.body.appendChild(modal);


    const modalTitle = modal.querySelector(".modal-title");
    const modalDescription = modal.querySelector(".modal-description");
    const modalClose = modal.querySelector(".modal-close");
    const modalOverlay = modal.querySelector(".toon-modal-overlay");
    const modalWatch = modal.querySelector(".modal-watch");


    function openModal(title, description) {

        modalTitle.textContent = title;
        modalDescription.textContent = description;

        modal.classList.add("show");

        document.body.style.overflow = "hidden";
    }


    function closeModal() {

        modal.classList.remove("show");

        document.body.style.overflow = "";
    }


    modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeModal();
        }

    });


    /* =====================================================
       6. SHOW PLAY BUTTONS
       ===================================================== */

    const showCards = document.querySelectorAll(".show-card");

    showCards.forEach(card => {

        const playButton = card.querySelector(".show-play");
        const titleElement = card.querySelector("h3");

        if (playButton && titleElement) {

            playButton.addEventListener("click", event => {

                event.preventDefault();
                event.stopPropagation();

                const title = titleElement.textContent.trim();

                openModal(
                    title,
                    `You're about to enter ${title}. Your next cartoon adventure is ready!`
                );
            });
        }
    });


    /* =====================================================
       7. EPISODE PLAY BUTTONS
       ===================================================== */

    episodeCards.forEach(card => {

        const playButton = card.querySelector(".episode-play");
        const titleElement = card.querySelector("h3");

        if (playButton && titleElement) {

            playButton.addEventListener("click", event => {

                event.preventDefault();
                event.stopPropagation();

                const title = titleElement.textContent.trim();

                openModal(
                    title,
                    "This episode is ready to play. Grab your snacks and enjoy the adventure!"
                );
            });
        }
    });


    /* =====================================================
       8. MODAL WATCH BUTTON
       ===================================================== */

    modalWatch.addEventListener("click", () => {

        modalWatch.textContent = "COMING SOON ✦";

        setTimeout(() => {
            modalWatch.textContent = "▶ START WATCHING";
        }, 1800);

    });


    /* =====================================================
       9. CHARACTER CARDS INTERACTION
       ===================================================== */

    const characterCards = document.querySelectorAll(
        ".character-card"
    );

    characterCards.forEach(card => {

        card.addEventListener("click", () => {

            characterCards.forEach(item => {
                item.classList.remove("selected");
            });

            card.classList.add("selected");

        });

    });


    /* =====================================================
       10. CHARACTER CAROUSEL ARROWS
       ===================================================== */

    const characterGrid = document.querySelector(
        ".characters-grid"
    );

    const previousButton = document.querySelector(
        ".character-prev"
    );

    const nextButton = document.querySelector(
        ".character-next"
    );


    if (
        characterGrid &&
        previousButton &&
        nextButton
    ) {

        nextButton.addEventListener("click", () => {

            characterGrid.scrollBy({
                left: 300,
                behavior: "smooth"
            });

        });


        previousButton.addEventListener("click", () => {

            characterGrid.scrollBy({
                left: -300,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       11. SEARCH BUTTON
       ===================================================== */

    const searchButton = document.querySelector(".search-btn");

    if (searchButton) {

        searchButton.addEventListener("click", () => {

            const searchTerm = prompt(
                "🔍 What are you looking for?\n\nTry: Kai, Meera, Tofu, Finn, Skybound Academy..."
            );

            if (!searchTerm) {
                return;
            }

            const search = searchTerm.toLowerCase().trim();

            const searchableElements = document.querySelectorAll(
                ".show-card, .character-card, .episode-card"
            );

            let foundElement = null;

            searchableElements.forEach(element => {

                const text = element.textContent.toLowerCase();

                if (!foundElement && text.includes(search)) {
                    foundElement = element;
                }

            });


            if (foundElement) {

                foundElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                foundElement.classList.add("search-highlight");

                setTimeout(() => {
                    foundElement.classList.remove(
                        "search-highlight"
                    );
                }, 2000);

            } else {

                alert(
                    `Sorry! We couldn't find "${searchTerm}". Try searching for a character or show name.`
                );

            }

        });

    }


    /* =====================================================
       12. VIEW ALL LINKS
       ===================================================== */

    document.querySelectorAll(".view-all").forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const text = link.textContent.toLowerCase();

            if (text.includes("shows")) {

                document.querySelector("#shows")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            } else if (text.includes("characters")) {

                document.querySelector("#characters")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }

        });

    });


    /* =====================================================
       13. FUN ZONE GAME CARDS
       ===================================================== */

    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach(card => {

        card.addEventListener("click", () => {

            const titleElement = card.querySelector("h3");

            const title = titleElement
                ? titleElement.textContent.trim()
                : "Fun Game";

            openModal(
                title,
                "This mini-game is coming soon! Get ready for some serious cartoon fun."
            );

        });

    });


    /* =====================================================
       14. SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".show-card, .character-card, .episode-card, .game-card, .about-container"
    );


    const observer = new IntersectionObserver(
        entries => {

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
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal-hidden");

        observer.observe(element);

    });


    /* =====================================================
       15. NAVBAR SHADOW ON SCROLL
       ===================================================== */

    window.addEventListener("scroll", () => {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


    /* =====================================================
       16. MARQUEE PAUSE ON HOVER
       ===================================================== */

    const marquee = document.querySelector(".marquee");

    if (marquee) {

        marquee.addEventListener("mouseenter", () => {
            marquee.style.animationPlayState = "paused";
        });

        marquee.addEventListener("mouseleave", () => {
            marquee.style.animationPlayState = "running";
        });

    }


    /* =====================================================
       17. CURRENT YEAR IN FOOTER
       ===================================================== */

    const footerYear = document.querySelector(".footer-year");

    if (footerYear) {

        footerYear.textContent = new Date()
            .getFullYear();

    }


    console.log(
        "🎨 03TOON TIME loaded successfully!"
    );

});

