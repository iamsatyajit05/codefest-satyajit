var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")

let btns = [
    btn1, btn2, btn3, btn4, btn5, btn6
]

btn1.setAttribute("id", "active");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        btn1.removeAttribute('id');
        btn2.removeAttribute('id');
        btn3.removeAttribute('id');
        btn4.removeAttribute('id');
        btn5.removeAttribute('id');
        btn6.removeAttribute('id');
        btns[i].setAttribute("id", "active");
    })
}

filterObjects("special");

function filterObjects(e) {
    var x, i;
    x = document.getElementsByClassName("box");
    if (e == "all") {
        e = "";
    }
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(e) > -1)
            addClass(x[i], "show")
    }
}

function addClass(e, name) {
    var i, a1, a2;
    a1 = e.className.split(" ");
    a2 = name.split(" ");
    for (i = 0; i < a2.length; i++) {
        if (a1.indexOf(a2[i] == -1)) {
            e.className += " " + a2[i]
        }
    }
}

function removeClass(e, name) {
    var i, a1, a2;
    a1 = e.className.split(" ");
    a2 = name.split(" ");
    for (i = 0; i < a2.length; i++) {
        while (a1.indexOf(a2[i]) > -1) {
            a1.splice(a1.indexOf(a2[i]), 1);
        }
    }
    e.className = a1.join(" ");
}

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

p1.addEventListener("mouseenter", () => {
    p1.src = "img/person11.png"
})
p1.addEventListener("mouseout", () => {
    p1.src = "img/person10.png"
})
p2.addEventListener("mouseenter", () => {
    p2.src = "img/person21.png"
})
p2.addEventListener("mouseout", () => {
    p2.src = "img/person20.png"
})
p3.addEventListener("mouseenter", () => {
    p3.src = "img/person31.png"
})
p3.addEventListener("mouseout", () => {
    p3.src = "img/person30.png"
})

let navlinks = document.getElementsByClassName("navlinks")

let check = document.getElementById("check")

for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", () => {
        check.checked = false
    })
}