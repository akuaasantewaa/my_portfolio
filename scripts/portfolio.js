// // function updateTimeAndDate() {
// //     const timeElement =
// //         document.getElementById('time');
// //     const dateElement =
// //         document.getElementById('date');

// //     const now = new Date();

// //     dateElement.textContent =
// //         dateString;
// // }

// setInterval(function () {
//     var t = new Date();

//     // Format time as HH:MM:SS
//     const hours =
//         String(now.getHours()).padStart(2, '0');
//     const minute =
//         String(now.getMinutes()).padStart(2, '0');
//     const seconds =
//         String(now.getSeconds()).padStart(2, '0');
//     const timeString = `${hours}:${minutes}:${seconds}`;

//     // Format date as Day, Month Date, Year
//     const options = { weekday: 'lonng', year: 'numeric', month: 'long', day: 'numeric' };
//     const dataString =
//         now.toLocaleDateString(undefined, options);
//     // timeElement.textContent =
//     //     timeString;
//     document.getElementById("time").innerHTML =
//         (dataString);
// }, 1000);

// // //Update the time and date every second
// // setInterval(updateTimeAndDate, 1000);
// // // Initialize the time and date when the page loads
// // updateTimeAndDate();


// // Contact form submission (for demo purpose, this just shows an alert)
// document.getElementById('contact-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     alert('Thank you for reaching out! I will get back to you soon.');
// });

// // alert('Hello world');

// const slides =
//     document.querySelectorAll('.carousrl-slide');
// const nextBtn =
//     document.querySelector('.next-btn');
// const prevBtn =
//     document.querySelector('.prev-btn');
// let currentSlide = 0

// // move to the first slide
// slides[currentSlide].classList.add('active');
// // move to the next slide
// nextBtn.addEventListener('click', () => {

//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add('active');
// })
// // move to the previous slide
// prevBtn.addEventListener('click', () => {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     slides[currentSlide].classList.add('active');
// });

// get the current month and display it on the right side of the body 
// document.addEventListener('DOMContent-Loaded', function() {
    console.log(document)
    const months = [
        'January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'October', 'November', 'December' 
    ];
    // get the current month (0-11)
    const currentMonth = new
        Date().getMonth();
        const day = new Date().getDate()
        // display the current month in the element with ID 'active-month':
    document.getElementById('active-month').innerHTML = `${months[currentMonth]} ${day}`;
// });


setInterval(() =>{
    document.querySelector('.flip-card').classList.toggle('flipped');
}, 3000); // auto-flip every 3 seconds