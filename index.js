const li = document.querySelectorAll('.nav-links');
const main = document.querySelector('main');

function renderSkills() {
    const beginner = `
        <div class="beginner">
            <p>Nybörjare</p>
        </div>
    `
    const intermediate = `
        <div class="intermediate">
            <p>Mellannivå</p>
        </div>
    `
    const advanced = `
        <div class="advanced">
            <p>Avancerad</p>
        </div>
    `

    const languageSettings = [
        {
            title: "JAVASCRIPT",
            alt: "javascript",
            svg: "public/javascript.svg",
            skill: intermediate
        },
        {
            title: "TYPESCRIPT",
            alt: "typescript",
            svg: "public/typescript.svg",
            skill: beginner
        },
        {
            title: "HTML5",
            alt: "html5",
            svg: "public/html5.svg",
            skill: advanced
        },
        {
            title: "CSS3",
            alt: "css3",
            svg: "public/css3.svg",
            skill: intermediate
        }
    ]

    const frameworkSettings = [
        {
            title: "REACT",
            alt: "react",
            svg: "public/react.svg",
            skill: beginner
        }
    ]

    const uiStylingSettings = [
        {
            title: "BOOTSTRAP",
            alt: "bootstrap",
            svg: "public/bootstrap.svg",
            skill: beginner
        },
        {
            title: "TAILWIND",
            alt: "tailwind",
            svg: "public/tailwind.svg",
            skill: beginner
        },
        {
            title: "SASS",
            alt: "sass",
            svg: "public/sass.svg",
            skill: beginner
        }
    ]

    const toolsTestingSettings = [
        {
            title: "GIT",
            alt: "git",
            svg: "public/git.svg",
            skill: beginner
        },
        {
            title: "GITHUB",
            alt: "github",
            svg: "public/github.svg",
            skill: beginner
        },
        {
            title: "FIGMA",
            alt: "figma",
            svg: "public/figma.svg",
            skill: beginner
        },
        {
            title: "POSTMAN",
            alt: "postman",
            svg: "public/postman.svg",
            skill: beginner
        },
    ]

    languageSettings.forEach((setting, i) => {
        document.querySelector('.skill-card.language').innerHTML += `
            <div class="skill-row">
                <img src="${setting.svg}" alt="${setting.alt}">
                <div class="skill-level">
                    <p>${setting.title}</p>
                    <div class="skill-bar">
                        ${setting.skill}
                    </div>
                </div>
            </div>
        `
    })

    frameworkSettings.forEach((setting, i) => {
        document.querySelector('.skill-card.framework').innerHTML += `
            <div class="skill-row">
                <img src="${setting.svg}" alt="${setting.alt}">
                <div class="skill-level">
                    <p>${setting.title}</p>
                    <div class="skill-bar">
                        ${setting.skill}
                    </div>
                </div>
            </div>
        `
    })

    uiStylingSettings.forEach((setting, i) => {
        document.querySelector('.skill-card.ui-styling').innerHTML += `
            <div class="skill-row">
                <img src="${setting.svg}" alt="${setting.alt}">
                <div class="skill-level">
                    <p>${setting.title}</p>
                    <div class="skill-bar">
                        ${setting.skill}
                    </div>
                </div>
            </div>
        `
    })

    toolsTestingSettings.forEach((setting, i) => {
        document.querySelector('.skill-card.tools-testing').innerHTML += `
            <div class="skill-row">
                <img src="${setting.svg}" alt="${setting.alt}">
                <div class="skill-level">
                    <p>${setting.title}</p>
                    <div class="skill-bar">
                        ${setting.skill}
                    </div>
                </div>
            </div>
        `
    })
}

li.forEach((li) => {
    li.addEventListener("click", (e) => {
        e.preventDefault();

        let section = e.target.hash;

        main.classList.add("fade-out");

        setTimeout(() => {
            if (section === "#profile") {
                main.innerHTML = `
                <div class="profile-section">
                    <h2>PROFIL</h2>
                    <p>
                    Jag är en frontendutvecklare under utbildning med fokus på JavaScript och React.
                    Har erfarenhet av att bygga responsiva webbapplikationer och jobba med API:er.
                    Söker LIA för att utvecklas vidare i en verklig utvecklingsmiljö och bidra med mitt driv och lärande.
                    </p>
                </div>
                `;
            } else if (section === "#education") {
                main.innerHTML = `
                <div class="education-section">
                    <h2>UTBILDNING</h2>
                    <div class="education-card">
                        <div class="education-title">
                            <div>
                                <h3>Frontend-utvecklare</h3>
                                <p>2025 - Pågående</p>
                            </div>
                            <p class="italic">Nackademin</p>
                        </div>
                        <div class="education-info">
                            <p>
                            Yrkeshögskoleutbildning med fokus på modern frontendutveckling. Utbildningen
                            omfattade utveckling av responsiva och användarvänliga webbapplikationer
                            med HTML, CSS och JavaScript samt ramverk och bibliotek som React. Arbetade
                            med versionshantering (Git), agila arbetsmetoder och projektbaserat arbete med 
                            verklighetsnära uppdrag.Fokus på tillgänglighet, prestanda och god kodstruktur.
                            </p>
                        </div>
                    </div>
                    <hr>
                    <div class="education-card">
                        <div class="education-title">
                            <div>
                                <h3>El & Energi</h3>
                                <p>2018 - 2020</p>
                            </div>
                            <p class="italic">Yrkeshögskolan</p>
                        </div>
                        <div class="education-info">
                            <p>
                            Studerade grundläggande kunskaper inom elteknik, elinstallationer och
                            energiteknik. Utvecklade praktiska färdigheter genom laborationer och praktik
                            samt stärkte samarbetsförmåga och problemlösning genom arbete i projekt och
                            grupp.
                            </p>
                        </div>
                    </div>
                </div>
                `;
            } else if (section === "#skills") { 
                main.innerHTML = `
                <div class="skill-section">
                    <h2>VERKTYG</h2>
                    <div class="skill-card language">
                        <h3>SPRÅK</h3>
                    </div>
                    <hr>
                    <div class="skill-card framework">
                        <h3>FRAMEWORKS</h3>
                    </div>
                    <hr>
                    <div class="skill-card ui-styling">
                        <h3>UI & STYLING</h3>
                    </div>
                    <hr>
                    <div class="skill-card tools-testing">
                        <h3>VERKTYG & TESTNING</h3>
                    </div>
                </div>
                `;
                renderSkills();
            } else if (section === "#experience") { 
                main.innerHTML = `
                <div class="experience-section">
                    <h2>ARBETSLIVSERFARENHET</h2>
                    <div class="experience-card">
                        <div class="experience-title">
                            <div>
                                <h3>Astrazeneca</h3>
                                <p>2021 - 2025</p>
                            </div>
                            <p class="italic">Maskinoperatör</p>
                        </div>
                        <div class="experience-info">
                            <ul>
                                <li>Övervakning och drift av produktionsmaskiner i en renrumsmiljö</li>
                                <li>kvalitetskontroller, dokumentation samt att säkerställa en effektiv och säker produktion enligt strikta riktlinjer</li>
                            </ul>
                        </div>
                    </div>
                    <hr>
                    <div class="experience-card">
                        <div class="experience-title">
                            <div>
                                <h3>Gateau</h3>
                                <p>2020 - 2021</p>
                            </div>
                            <p class="italic">Paketerare</p>
                        </div>
                        <div class="experience-info">
                            <ul>
                                <li>Paketering och sortering</li>
                                <li>Inventering</li>
                                <li>Bakning</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `;
            } else if (section === "#projects") { 
                main.innerHTML = `
                <div class="project-section">
                    <div class="warning-card">
                        <img src="public/warning.svg" alt="">
                        <div class="warning-text">
                            <h4>Under Konstruktion!</h4>
                            <p>Projektsidan byggs just nu. Kom tillbaka snart!</p>
                        </div>
                    </div>
                </div>
                `;
            }

            main.classList.remove("fade-out");
            main.classList.add("fade-in");

            setTimeout(() => {
            main.classList.remove("fade-in");
            }, 300);
        }, 300);
    });
});

const menuBtn = document.querySelector(".fa-bars");
const sidepanel = document.querySelector(".sidepanel");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
    sidepanel.classList.toggle("open");
    overlay.classList.toggle("active");
});

document.querySelectorAll(".sidepanel a").forEach((link) => {
    link.addEventListener("click", () => {
        sidepanel.classList.remove("open");
        overlay.classList.toggle("active");
    });
});

document.addEventListener("click", (e) => {
    if (!sidepanel.contains(e.target) && !menuBtn.contains(e.target)) {
        sidepanel.classList.remove("open");
        overlay.classList.toggle("active");
    }
});