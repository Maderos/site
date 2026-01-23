// typed animation
var typed = new Typed("#typed", {
    strings: ["MSN/APRN/FNP", "Medical Case Manager", "Clinical Professor", "Data Analyst", "Chemistry Textbook Author", "Pilot"],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 3000,
    showCursor: false,
    loop: true
});

// theme
function theme() {
    const darkBtn = document.getElementById('darkBtn');
    const lightBtn = document.getElementById('lightBtn');

    document.body.classList.toggle('light');

    if (document.body.classList.contains('light')) {
        darkBtn.style.display = 'block';
        lightBtn.style.display = 'none';
    } else {
        darkBtn.style.display = 'none';
        lightBtn.style.display = 'block';
    }
}

//menu tootle
const menuItems = document.querySelectorAll('.nav .item');

menuItems.forEach(item=> {
    item.addEventListener('click', () => {
        menuItems.forEach(item => item.classList.remove('avtive'));
        item.classList.add('active');
    });
});