// Sample movie data (you can replace this with real movie data)
const movies = [
    { title: '2 States', image: 'https://wallpapercave.com/wp/wp8807385.jpg' },
    { title: 'Kala', image: 'https://c4.wallpaperflare.com/wallpaper/89/717/68/rajnikanth-kaala-kaala-karikaalan-tamil-wallpaper-preview.jpg ' },
    { title: 'Rockstar', image: 'https://wallpapercave.com/dwp1x/wp2281974.jpg ' },
    { title: 'Happy New Year', image: 'https://wallpapercave.com/dwp1x/wp6423854.jpg ' },
    { title: 'Love', image: 'https://source.unsplash.com/600x400/?bollywood cinema' },
    { title: 'War', image: 'https://www.mapsofindia.com/ci-moi-images/my-india/2019/09/war.jpg ' },
    { title: 'Dhoom 3', image: 'https://wallpapercave.com/dwp1x/wp8807417.jpg ' },
    { title: 'Bullet Raja', image: 'https://wallpapercave.com/dwp1x/wp8807421.jpg ' }
    // Add more movie objects as needed
];

// Function to create movie cards and populate the carousel
function populateCarousel() {
    const carouselContainer = document.querySelector('.movie-carousel');

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
        `;
        carouselContainer.appendChild(movieCard);
    });

    // Initialize Slick carousel
    $('.movie-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}

// Call the populateCarousel function when the window has finished loading
window.onload = populateCarousel;
