document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       1. MOBILE MENU
    ========================================================= */

    const menuButton = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuButton && navbar) {

        menuButton.addEventListener("click", function () {

            let mobileMenu = document.querySelector(".mobile-menu");

            if (mobileMenu) {
                mobileMenu.remove();
                return;
            }

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

            navbar.appendChild(mobileMenu);

            mobileMenu.querySelectorAll("a").forEach(function (link) {

                link.addEventListener("click", function () {
                    mobileMenu.remove();
                });

            });

        });

    }


    /* =========================================================
       2. SMOOTH SCROLLING
    ========================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            /*
             * Prevent href="#" from jumping to the top
             */
            if (!targetId || targetId === "#") {
                event.preventDefault();
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


    /* =========================================================
       3. TOP SHOWS
       SKYBOUND / FOREST / PROJECT NEXT GEN
    ========================================================= */

    const showCards =
        document.querySelectorAll(".show-card");

    const episodeSection =
        document.querySelector("#episodes");

    const episodeFilters =
        document.querySelectorAll(
            ".episode-filters .filter"
        );


    showCards.forEach(function (card) {

        const titleElement =
            card.querySelector(".show-info h3");

        if (!titleElement) return;

        const showName =
            titleElement.textContent.trim();


        /*
         * Find matching episode filter
         */

        let matchingFilter = null;

        episodeFilters.forEach(function (button) {

            const buttonText =
                button.textContent.trim();

            if (
                buttonText.toLowerCase() ===
                showName.toLowerCase()
            ) {

                matchingFilter = button;

            }

        });


        /*
         * Explore Show button
         */

        const exploreButton =
            card.querySelector(".show-link");

        if (exploreButton) {

            exploreButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    goToShowEpisodes(
                        matchingFilter
                    );

                }
            );

        }


        /*
         * Play button
         */

        const playButton =
            card.querySelector(".show-play");

        if (playButton) {

            playButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    goToShowEpisodes(
                        matchingFilter
                    );

                }
            );

        }

    });


    /*
     * Go to episodes and select show
     */

    function goToShowEpisodes(filterButton) {

        if (!episodeSection) return;


        episodeSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });


        /*
         * Wait for scrolling before selecting filter
         */

        if (filterButton) {

            setTimeout(function () {

                filterButton.click();

            }, 500);

        }

    }


    /* =========================================================
       4. EPISODE FILTERING
    ========================================================= */

    const episodeCards =
        document.querySelectorAll(".episode-card");


    episodeFilters.forEach(function (button) {

        button.addEventListener("click", function () {

            /*
             * Active button
             */

            episodeFilters.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            /*
             * Selected show
             */

            const selectedShow =
                button.textContent
                    .trim()
                    .toLowerCase();


            episodeCards.forEach(function (card) {

                const showElement =
                    card.querySelector(
                        ".episode-info small"
                    );

                if (!showElement) return;


                const cardShow =
                    showElement.textContent
                        .trim()
                        .toLowerCase();


                /*
                 * ALL
                 */

                if (selectedShow === "all") {

                    card.style.display = "";

                    setTimeout(function () {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    }, 10);

                    return;

                }


                /*
                 * MATCHING SHOW
                 */

                if (cardShow === selectedShow) {

                    card.style.display = "";

                    setTimeout(function () {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    }, 10);

                }


                /*
                 * NON-MATCHING SHOW
                 */

                else {

                    card.style.opacity = "0";
                    card.style.transform = "translateY(10px)";

                    setTimeout(function () {

                        card.style.display = "none";

                    }, 200);

                }

            });

        });

    });


    /* =========================================================
       5. EPISODE PLAY BUTTONS
    ========================================================= */

    const episodePlayButtons =
        document.querySelectorAll(".episode-play");


    episodePlayButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();


            const card =
                button.closest(".episode-card");

            if (!card) return;


            const title =
                card.querySelector("h3")
                    ?.textContent
                    .trim();


            const show =
                card.querySelector(".episode-info small")
                    ?.textContent
                    .trim();


            alert(
                `▶ ${show}\n\n${title}\n\nThis episode is coming soon!`
            );

        });

    });


    /* =========================================================
       6. CHARACTER CARDS
    ========================================================= */

    const characterCards =
        document.querySelectorAll(".character-card");


    characterCards.forEach(function (card) {

        card.addEventListener("click", function () {

            characterCards.forEach(function (item) {

                item.classList.remove("selected");

            });

            card.classList.add("selected");

        });

    });


    /* =========================================================
       7. CHARACTER CAROUSEL
    ========================================================= */

    const characterGrid =
        document.querySelector(".characters-grid");

    const previousButton =
        document.querySelector(".character-prev");

    const nextButton =
        document.querySelector(".character-next");


    if (
        characterGrid &&
        previousButton &&
        nextButton
    ) {

        nextButton.addEventListener(
            "click",
            function () {

                characterGrid.scrollBy({
                    left: 300,
                    behavior: "smooth"
                });

            }
        );


        previousButton.addEventListener(
            "click",
            function () {

                characterGrid.scrollBy({
                    left: -300,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =========================================================
       8. FUN ZONE / GAMES
    ========================================================= */

    const gameCards =
        document.querySelectorAll(".game-card");


    gameCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const gameName =
                card.querySelector("h3")
                    ?.textContent
                    .trim();


            alert(
                `🎮 ${gameName || "Fun Zone"}\n\nThis game is coming soon!`
            );

        });

    });


    /* =========================================================
       9. SEARCH
    ========================================================= */

    const searchButton =
        document.querySelector(".search-btn");


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            function () {

                const searchTerm =
                    prompt(
                        "What would you like to find?"
                    );


                if (!searchTerm) return;


                const term =
                    searchTerm
                        .trim()
                        .toLowerCase();


                if (!term) return;


                const allSections =
                    document.querySelectorAll(
                        "section, footer"
                    );


                let found = false;


                allSections.forEach(function (section) {

                    if (
                        !found &&
                        section.textContent
                            .toLowerCase()
                            .includes(term)
                    ) {

                        section.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                        found = true;

                    }

                });


                if (!found) {

                    alert(
                        `"${searchTerm}" was not found on 03TOON TIME.`
                    );

                }

            }
        );

    }


    /* =========================================================
       10. NAVBAR SCROLL EFFECT
    ========================================================= */

    const mainNavbar =
        document.querySelector(".navbar");


    window.addEventListener(
        "scroll",
        function () {

            if (!mainNavbar) return;


            if (window.scrollY > 30) {

                mainNavbar.classList.add("scrolled");

            }

            else {

                mainNavbar.classList.remove("scrolled");

            }

        }
    );


    /* =========================================================
       11. ACTIVE NAVIGATION
    ========================================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    window.addEventListener(
        "scroll",
        function () {

            let currentSection = "";


            sections.forEach(function (section) {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            });


            navLinks.forEach(function (link) {

                link.classList.remove("active");


                if (
                    link.getAttribute("href") ===
                    `#${currentSection}`
                ) {

                    link.classList.add("active");

                }

            });

        }
    );


    /* =========================================================
       12. SCROLL REVEAL
    ========================================================= */

    const revealElements =
        document.querySelectorAll(
            ".show-card, .character-card, .episode-card, .game-card"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "reveal-visible"
                                );

                                entry.target.classList.remove(
                                    "reveal-hidden"
                                );


                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.1
                }
            );


        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal-hidden"
                );

                revealObserver.observe(
                    element
                );

            }
        );

    }


    /* =========================================================
       13. MARQUEE HOVER
    ========================================================= */

    const marquee =
        document.querySelector(".marquee");

    const marqueeContent =
        document.querySelector(
            ".marquee-content"
        );


    if (
        marquee &&
        marqueeContent
    ) {

        marquee.addEventListener(
            "mouseenter",
            function () {

                marqueeContent.style.animationPlayState =
                    "paused";

            }
        );


        marquee.addEventListener(
            "mouseleave",
            function () {

                marqueeContent.style.animationPlayState =
                    "running";

            }
        );

    }


    /* =========================================================
       14. FOOTER YEAR
    ========================================================= */

    const footerParagraph =
        document.querySelector(
            ".footer-bottom p"
        );


    if (footerParagraph) {

        footerParagraph.innerHTML =
            footerParagraph.innerHTML.replace(
                "2026",
                new Date().getFullYear()
            );

    }


    /* =========================================================
       15. ESCAPE KEY
       SAFETY: IF ANY OLD MODAL EXISTS
    ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                const modal =
                    document.querySelector(
                        ".toon-modal"
                    );


                if (modal) {
                    modal.remove();
                }


                /*
                 * Make absolutely sure the page
                 * is scrollable again.
                 */

                document.body.style.overflow = "";

            }

        }
    );


    /* =========================================================
       16. CLEAN UP ANY OLD MODAL
    ========================================================= */

    const existingModal =
        document.querySelector(
            ".toon-modal"
        );


    if (existingModal) {
        existingModal.remove();
    }


    /*
     * Make sure the page starts scrollable.
     */

    document.body.style.overflow = "";

});