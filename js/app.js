//*  ====================  MENU SHOW Y HIDDEN ====================
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close");

//*  ====================  MENU SHOW ====================
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}

//*  ====================  READ More/Less ====================
function toggleText() {

    const moreText = document.getElementById("moreText");
    const btn = document.getElementById("readBtn");

    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        btn.innerHTML = "Read More";
    } else {
        moreText.style.display = "inline";
        btn.innerHTML = "Read Less";
    }
}

//*  ====================  MENU HIDE ====================
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//*  =============== REMOVE MENU (MOBILE) ===============
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((item) => item.addEventListener("click", linkAction));

//*  ====================  SKILLS DROPDOWN ====================
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach((ele) => {
  ele.addEventListener("click", toggleSkills);
});

//*  ==================== QUALIFICATION TABS ====================
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification_active");
    });
    target.classList.add("qualificatin_active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification_active");
    });
    tab.classList.add("qualification_active");
  });
});

//*  ==================== SERVICES MODAL ====================
const modalViews = document.querySelectorAll(".services_modal"),
  modalBtns = document.querySelectorAll(".services_button"),
  modalCloses = document.querySelectorAll(".services_modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, index) => {
  modalBtn.addEventListener("click", () => {
    modal(index);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

//*  ==================== SCROLL SECTION ACTIVE LINK ====================
const sections = document.querySelectorAll("section[id");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

//*  ==================== CHANGE BACKGROUND HEADER ====================
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

//*  ==================== SHOW SCROLL UP ====================
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//*  ==================== DARK LIGHT THEME ====================
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

//*  ==================== ABOUT IMAGE CHANGE ====================

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const aboutImg1 = document.querySelector(".about_img");
const aboutImg2 = document.querySelector(".about_img2");
const aboutImg3 = document.querySelector(".about_img3");

aboutImg1.addEventListener("click", () => {
  aboutImg1.style.display = "none";
  aboutImg2.style.display = "block";
});
aboutImg2.addEventListener("click", () => {
  aboutImg2.style.display = "none";
  aboutImg3.style.display = "block";
});
aboutImg3.addEventListener("click", () => {
  aboutImg3.style.display = "none";
  aboutImg1.style.display = "block";
});

setInterval(() => {
  aboutImg1.style.display = "none";
  aboutImg2.style.display = "block";
  aboutImg3.style.display = "none";
}, 3000);
setInterval(() => {
  aboutImg1.style.display = "none";
  aboutImg2.style.display = "none";
  aboutImg3.style.display = "block";
}, 6000);
setInterval(() => {
  aboutImg1.style.display = "block";
  aboutImg2.style.display = "none";
  aboutImg3.style.display = "none";
}, 9000);

//*  ==================== REVEAL ON SCROLL ANIMATION ====================
const revealOnScroll = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 1000,
  reset: true,
});

// * ========== Main ==========
revealOnScroll.reveal(".home_img", { delay: 600 });
revealOnScroll.reveal(".home_title", { delay: 500 });
revealOnScroll.reveal(".home_subtitle", { delay: 400 });
revealOnScroll.reveal(".home_decription", { delay: 300 });
revealOnScroll.reveal(".home_social-icon", { delay: 300 });
revealOnScroll.reveal(".contact_button", { delay: 200 });
revealOnScroll.reveal(".read_more_btn", { delay: 200 });

// * ========== About ==========
revealOnScroll.reveal(".about_container", { delay: 200 });
revealOnScroll.reveal(".about_description", { delay: 100 });

const revealOnScroll2 = ScrollReveal({
  origin: "left",
  distance: "200px",
  duration: 1000,
  reset: true,
});

revealOnScroll2.reveal(".about_info", { delay: 300 });
revealOnScroll2.reveal(".about_buttons", { delay: 200 });

/* // * ========== Skills ==========
const revealOnScroll3 = ScrollReveal({
  origin: "",
  distance: "",
  duration: 1000,
  reset: true,
});
revealOnScroll3.reveal(".skills", { delay: 400 });
 */
// * ========== Qualification ==========

const revealOnScroll5 = ScrollReveal({
  origin: "right",
  distance: "100px",
  duration: 1500,
  reset: true,
});
revealOnScroll5.reveal(".qualification_button", { delay: 400 });
revealOnScroll5.reveal(".qualification_data", { delay: 300 });

/* // * ========== Services ==========

const revealOnScroll6 = ScrollReveal({
  origin: "",
  distance: "0",
  duration: 1000,
  reset: true,
});
revealOnScroll6.reveal(".services_content", { delay: 100 });

// * ========== Portfolio ==========
const revealOnScroll7 = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 1000,
  reset: true,
});
revealOnScroll7.reveal(".portfolio_img", { delay: 400 });
revealOnScroll7.reveal(".portfolio_description", { delay: 300 });
revealOnScroll7.reveal(".portfolio_title", { delay: 200 });
revealOnScroll7.reveal(".portfolio_data", { delay: 100 });
 */