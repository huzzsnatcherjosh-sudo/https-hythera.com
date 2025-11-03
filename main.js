// ANIMAX - Main JavaScript File
// Comprehensive anime streaming platform functionality

// Global variables and state management
let animeData = [];
let userWatchlist = [];
let currentUser = {
    name: "Anime Fan",
    avatar: "resources/user-avatars.png",
    preferences: {
        favoriteGenres: [],
        watchedAnime: [],
        ratings: {}
    }
};

// Anime database with comprehensive metadata
const animeDatabase = [
    {
        id: 1,
        title: "Sakura Magic Warriors",
        genre: "magical-girl",
        subGenre: "Fantasy",
        rating: 4.8,
        episodes: 24,
        status: "completed",
        year: 2023,
        description: "A group of magical girls must protect their city from dark forces while navigating the challenges of high school life.",
        image: "resources/magical-girl-1.png",
        mood: "happy",
        length: "short",
        featured: true
    },
    {
        id: 2,
        title: "Love in Tokyo",
        genre: "romance",
        subGenre: "Slice of Life",
        rating: 4.6,
        episodes: 12,
        status: "completed",
        year: 2024,
        description: "A heartwarming story about finding love and friendship in the bustling streets of Tokyo.",
        image: "resources/romantic-1.jpg",
        mood: "relaxing",
        length: "short",
        featured: false
    },
    {
        id: 3,
        title: "Crystal Guardians",
        genre: "magical-girl",
        subGenre: "Adventure",
        rating: 4.9,
        episodes: 36,
        status: "ongoing",
        year: 2024,
        description: "Ancient crystals grant magical powers to chosen warriors who must defend the world from ancient evils.",
        image: "resources/magical-girl-2.jpg",
        mood: "adventurous",
        length: "medium",
        featured: true
    },
    {
        id: 4,
        title: "Mecha Revolution",
        genre: "mecha",
        subGenre: "Sci-Fi",
        rating: 4.7,
        episodes: 48,
        status: "completed",
        year: 2023,
        description: "In a future where mechs rule the battlefield, one pilot must lead the resistance against tyranny.",
        image: "resources/mecha-robot.jpg",
        mood: "dark",
        length: "long",
        featured: true
    },
    {
        id: 5,
        title: "School Days Memories",
        genre: "slice-of-life",
        subGenre: "Comedy",
        rating: 4.5,
        episodes: 24,
        status: "completed",
        year: 2023,
        description: "Follow the daily adventures of a group of high school friends as they create unforgettable memories.",
        image: "resources/slice-of-life.jpg",
        mood: "happy",
        length: "short",
        featured: false
    },
    {
        id: 6,
        title: "Fantasy Realm Adventures",
        genre: "fantasy",
        subGenre: "Adventure",
        rating: 4.8,
        episodes: 52,
        status: "ongoing",
        year: 2024,
        description: "A young hero is transported to a magical realm where they must save the kingdom from darkness.",
        image: "resources/fantasy-art.jpg",
        mood: "adventurous",
        length: "long",
        featured: true
    },
    {
        id: 7,
        title: "Neon City Blues",
        genre: "sci-fi",
        subGenre: "Cyberpunk",
        rating: 4.6,
        episodes: 18,
        status: "completed",
        year: 2024,
        description: "In a dystopian future, a hacker uncovers a conspiracy that threatens the entire city.",
        image: "resources/characters-wallpaper.jpg",
        mood: "dark",
        length: "short",
        featured: false
    },
    {
        id: 8,
        title: "Emotional Journey",
        genre: "drama",
        subGenre: "Psychological",
        rating: 4.9,
        episodes: 22,
        status: "completed",
        year: 2023,
        description: "A deeply emotional story about healing, growth, and finding hope in the darkest moments.",
        image: "resources/drama-emotional.jpg",
        mood: "emotional",
        length: "short",
        featured: false
    },
    {
        id: 9,
        title: "Action Heroes United",
        genre: "action",
        subGenre: "Superhero",
        rating: 4.7,
        episodes: 36,
        status: "ongoing",
        year: 2024,
        description: "A team of young heroes with extraordinary powers must work together to save the world.",
        image: "resources/action-adventure.jpg",
        mood: "adventurous",
        length: "medium",
        featured: true
    },
    {
        id: 10,
        title: "Spring Romance",
        genre: "romance",
        subGenre: "School",
        rating: 4.4,
        episodes: 12,
        status: "completed",
        year: 2024,
        description: "A sweet love story that blooms during the cherry blossom season at a prestigious academy.",
        image: "resources/romantic-2.jpg",
        mood: "happy",
        length: "short",
        featured: false
    },
    {
        id: 11,
        title: "Cosmic Adventures",
        genre: "sci-fi",
        subGenre: "Space Opera",
        rating: 4.8,
        episodes: 42,
        status: "ongoing",
        year: 2024,
        description: "Explore the vast universe with a crew of adventurers seeking new worlds and civilizations.",
        image: "resources/adventure-2.jpg",
        mood: "adventurous",
        length: "medium",
        featured: false
    },
    {
        id: 12,
        title: "Mecha Warriors 2.0",
        genre: "mecha",
        subGenre: "Military",
        rating: 4.5,
        episodes: 28,
        status: "completed",
        year: 2023,
        description: "The next generation of mecha pilots must defend Earth from an alien invasion.",
        image: "resources/mecha-robot-2.jpg",
        mood: "dark",
        length: "medium",
        featured: false
    },
    {
        id: 13,
        title: "Magical Academy",
        genre: "magical-girl",
        subGenre: "School",
        rating: 4.6,
        episodes: 24,
        status: "completed",
        year: 2024,
        description: "At a secret academy for magical girls, students learn to master their powers and fight evil.",
        image: "resources/magical-girl-3.jpg",
        mood: "happy",
        length: "short",
        featured: false
    },
    {
        id: 14,
        title: "Tokyo Love Story",
        genre: "romance",
        subGenre: "Drama",
        rating: 4.7,
        episodes: 16,
        status: "completed",
        year: 2023,
        description: "A mature romance set in modern Tokyo about second chances and true love.",
        image: "resources/romantic-3.jpg",
        mood: "emotional",
        length: "short",
        featured: false
    },
    {
        id: 15,
        title: "Warrior Princess",
        genre: "fantasy",
        subGenre: "Adventure",
        rating: 4.8,
        episodes: 32,
        status: "ongoing",
        year: 2024,
        description: "A princess with legendary sword skills embarks on a quest to save her kingdom from darkness.",
        image: "resources/magical-girl-4.jpg",
        mood: "adventurous",
        length: "medium",
        featured: false
    }
];

// Genre wheel data
const genres = [
    { name: 'Action', color: '#FF6B6B', angle: 0 },
    { name: 'Romance', color: '#FF8E53', angle: 30 },
    { name: 'Fantasy', color: '#FE6B8B', angle: 60 },
    { name: 'Sci-Fi', color: '#FF6F91', angle: 90 },
    { name: 'Comedy', color: '#C44569', angle: 120 },
    { name: 'Drama', color: '#F8B500', angle: 150 },
    { name: 'Slice of Life', color: '#6C5CE7', angle: 180 },
    { name: 'Magical Girl', color: '#A29BFE', angle: 210 },
    { name: 'Mecha', color: '#74B9FF', angle: 240 },
    { name: 'Adventure', color: '#00B894', angle: 270 },
    { name: 'Mystery', color: '#00CEC9', angle: 300 },
    { name: 'Horror', color: '#6C5CE7', angle: 330 }
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    animeData = [...animeDatabase];
    setupEventListeners();
    initializeParticles();
    initializeGenreWheel();
    initializeFeaturedCarousel();
    initializeScrollAnimations();
    loadUserData();
    populateWatchlist();
    animateStatistics();
    
    // Initialize with some default recommendations
    setTimeout(() => {
        generateRecommendations();
    }, 1000);
}

function setupEventListeners() {
    // Recommendation form
    const recommendationForm = document.getElementById('recommendationForm');
    if (recommendationForm) {
        recommendationForm.addEventListener('submit', handleRecommendationSubmit);
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Modal close on outside click
    const modal = document.getElementById('animeModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeWatchlist();
        }
    });
}

function initializeParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            color: Math.random() > 0.5 ? '#E91E63' : '#00BCD4'
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function initializeGenreWheel() {
    const genreWheel = document.getElementById('genreWheel');
    if (!genreWheel) return;
    
    const radius = 120;
    const centerX = 150;
    const centerY = 150;
    
    genres.forEach((genre, index) => {
        const angle = (genre.angle * Math.PI) / 180;
        const x = centerX + radius * Math.cos(angle - Math.PI / 2) - 40;
        const y = centerY + radius * Math.sin(angle - Math.PI / 2) - 40;
        
        const genreElement = document.createElement('div');
        genreElement.className = 'genre-item';
        genreElement.style.background = genre.color;
        genreElement.style.left = x + 'px';
        genreElement.style.top = y + 'px';
        genreElement.textContent = genre.name;
        genreElement.onclick = () => filterByGenre(genre.name.toLowerCase());
        
        genreWheel.appendChild(genreElement);
    });
    
    // Animate genre wheel rotation
    let rotation = 0;
    setInterval(() => {
        rotation += 0.5;
        genreWheel.style.transform = `rotate(${rotation}deg)`;
    }, 50);
}

function initializeFeaturedCarousel() {
    const featuredList = document.getElementById('featuredList');
    if (!featuredList) return;
    
    const featuredAnime = animeData.filter(anime => anime.featured);
    
    featuredAnime.forEach(anime => {
        const slide = document.createElement('li');
        slide.className = 'splide__slide';
        
        slide.innerHTML = `
            <div class="carousel-card" onclick="showAnimeDetails(${anime.id})">
                <img src="${anime.image}" alt="${anime.title}" class="carousel-image">
                <div class="carousel-overlay">
                    <h3 class="carousel-title">${anime.title}</h3>
                    <p class="carousel-description">${anime.description}</p>
                </div>
            </div>
        `;
        
        featuredList.appendChild(slide);
    });
    
    // Initialize Splide carousel
    if (typeof Splide !== 'undefined') {
        new Splide('#featured-splide', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            autoplay: true,
            interval: 4000,
            breakpoints: {
                768: {
                    perPage: 1
                }
            }
        }).mount();
    }
}

function initializeScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

function handleRecommendationSubmit(e) {
    e.preventDefault();
    generateRecommendations();
}

function generateRecommendations() {
    const genre = document.getElementById('genreSelect').value;
    const mood = document.getElementById('moodSelect').value;
    const length = document.getElementById('lengthSelect').value;
    
    let filteredAnime = [...animeData];
    
    // Apply filters
    if (genre) {
        filteredAnime = filteredAnime.filter(anime => 
            anime.genre === genre || anime.subGenre.toLowerCase().includes(genre)
        );
    }
    
    if (mood) {
        filteredAnime = filteredAnime.filter(anime => anime.mood === mood);
    }
    
    if (length) {
        filteredAnime = filteredAnime.filter(anime => anime.length === length);
    }
    
    // If no filters or no results, show random recommendations
    if (filteredAnime.length === 0) {
        filteredAnime = animeData.sort(() => 0.5 - Math.random()).slice(0, 6);
    } else {
        // Sort by rating and take top 6
        filteredAnime = filteredAnime
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 6);
    }
    
    displayRecommendations(filteredAnime);
}

function displayRecommendations(animeList) {
    const grid = document.getElementById('recommendationsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    animeList.forEach(anime => {
        const card = createAnimeCard(anime);
        grid.appendChild(card);
    });
    
    // Animate cards
    anime({
        targets: '.anime-card',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutQuart'
    });
}

function createAnimeCard(anime) {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.onclick = () => showAnimeDetails(anime.id);
    
    card.innerHTML = `
        <img src="${anime.image}" alt="${anime.title}" class="anime-thumbnail">
        <div class="anime-info">
            <h3 class="anime-title">${anime.title}</h3>
            <div class="anime-meta">
                <span class="anime-genre">${anime.subGenre}</span>
                <div class="anime-rating">
                    <span>★</span>
                    <span>${anime.rating}</span>
                </div>
            </div>
            <p class="anime-description">${anime.description}</p>
        </div>
    `;
    
    return card;
}

function showAnimeDetails(animeId) {
    const anime = animeData.find(a => a.id === animeId);
    if (!anime) return;
    
    const modal = document.getElementById('animeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = anime.title;
    
    modalBody.innerHTML = `
        <div style="display: flex; gap: 2rem; margin-bottom: 2rem;">
            <img src="${anime.image}" alt="${anime.title}" style="width: 200px; height: 300px; object-fit: cover; border-radius: 10px;">
            <div>
                <div style="margin-bottom: 1rem;">
                    <strong>Genre:</strong> ${anime.subGenre}
                </div>
                <div style="margin-bottom: 1rem;">
                    <strong>Episodes:</strong> ${anime.episodes}
                </div>
                <div style="margin-bottom: 1rem;">
                    <strong>Status:</strong> ${anime.status}
                </div>
                <div style="margin-bottom: 1rem;">
                    <strong>Year:</strong> ${anime.year}
                </div>
                <div style="margin-bottom: 1rem;">
                    <strong>Rating:</strong> ${anime.rating}/5.0
                </div>
            </div>
        </div>
        <div style="margin-bottom: 2rem;">
            <h4 style="margin-bottom: 1rem; color: var(--accent);">Description</h4>
            <p>${anime.description}</p>
        </div>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn-primary" onclick="addToWatchlist(${anime.id})">
                Add to Watchlist
            </button>
            <button class="btn btn-secondary" onclick="startWatching(${anime.id})">
                Start Watching
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Animate modal
    anime({
        targets: '.modal-content',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
}

function closeModal() {
    const modal = document.getElementById('animeModal');
    
    anime({
        targets: '.modal-content',
        scale: [1, 0.8],
        opacity: [1, 0],
        duration: 200,
        easing: 'easeInQuart',
        complete: () => {
            modal.style.display = 'none';
        }
    });
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    
    if (query.length < 2) {
        displayRecommendations(animeData.slice(0, 6));
        return;
    }
    
    const filteredAnime = animeData.filter(anime => 
        anime.title.toLowerCase().includes(query) ||
        anime.description.toLowerCase().includes(query) ||
        anime.genre.toLowerCase().includes(query) ||
        anime.subGenre.toLowerCase().includes(query)
    );
    
    displayRecommendations(filteredAnime.slice(0, 6));
}

function filterByGenre(genre) {
    const filteredAnime = animeData.filter(anime => 
        anime.genre === genre || anime.subGenre.toLowerCase().includes(genre)
    );
    
    displayRecommendations(filteredAnime.slice(0, 6));
    
    // Scroll to recommendations
    document.getElementById('recommendations').scrollIntoView({
        behavior: 'smooth'
    });
}

function addToWatchlist(animeId) {
    const anime = animeData.find(a => a.id === animeId);
    if (!anime) return;
    
    const existingIndex = userWatchlist.findIndex(item => item.id === animeId);
    
    if (existingIndex === -1) {
        userWatchlist.push({
            ...anime,
            progress: 0,
            addedDate: new Date().toISOString(),
            status: 'plan-to-watch'
        });
        
        showNotification(`${anime.title} added to watchlist!`, 'success');
        populateWatchlist();
        saveUserData();
    } else {
        showNotification(`${anime.title} is already in your watchlist!`, 'info');
    }
    
    closeModal();
}

function removeFromWatchlist(animeId) {
    const animeIndex = userWatchlist.findIndex(item => item.id === animeId);
    if (animeIndex !== -1) {
        const anime = userWatchlist[animeIndex];
        userWatchlist.splice(animeIndex, 1);
        showNotification(`${anime.title} removed from watchlist!`, 'info');
        populateWatchlist();
        saveUserData();
    }
}

function startWatching(animeId) {
    const anime = animeData.find(a => a.id === animeId);
    if (!anime) return;
    
    // Simulate starting to watch
    showNotification(`Starting ${anime.title}...`, 'success');
    
    // Add to watchlist if not already there
    addToWatchlist(animeId);
    
    // Update progress
    const watchlistItem = userWatchlist.find(item => item.id === animeId);
    if (watchlistItem) {
        watchlistItem.status = 'watching';
        watchlistItem.progress = Math.min(watchlistItem.progress + 1, watchlistItem.episodes);
        populateWatchlist();
        saveUserData();
    }
    
    // Simulate video player (in a real app, this would navigate to the watch page)
    setTimeout(() => {
        showNotification('Video player would open here!', 'info');
    }, 1000);
    
    closeModal();
}

function toggleWatchlist() {
    const sidebar = document.getElementById('watchlistSidebar');
    sidebar.classList.toggle('open');
}

function closeWatchlist() {
    const sidebar = document.getElementById('watchlistSidebar');
    sidebar.classList.remove('open');
}

function populateWatchlist() {
    const content = document.getElementById('watchlistContent');
    if (!content) return;
    
    if (userWatchlist.length === 0) {
        content.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                <p>Your watchlist is empty.</p>
                <p>Add some anime to get started!</p>
            </div>
        `;
        return;
    }
    
    content.innerHTML = '';
    
    userWatchlist.forEach(item => {
        const watchlistItem = document.createElement('div');
        watchlistItem.className = 'watchlist-item';
        
        const progressPercentage = (item.progress / item.episodes) * 100;
        
        watchlistItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="watchlist-thumbnail">
            <div class="watchlist-info">
                <div class="watchlist-title">${item.title}</div>
                <div class="watchlist-progress">${item.progress}/${item.episodes} episodes • ${item.status}</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                </div>
            </div>
            <button class="btn btn-secondary" onclick="removeFromWatchlist(${item.id})" style="padding: 0.5rem; font-size: 0.8rem;">
                Remove
            </button>
        `;
        
        content.appendChild(watchlistItem);
    });
}

function showUserMenu() {
    // Simple user menu simulation
    const menuOptions = ['Profile', 'Settings', 'Logout'];
    const choice = prompt(`User Menu:\n${menuOptions.map((opt, i) => `${i + 1}. ${opt}`).join('\n')}\n\nEnter choice (1-3):`);
    
    if (choice === '1') {
        showNotification('Opening profile...', 'info');
    } else if (choice === '2') {
        showNotification('Opening settings...', 'info');
    } else if (choice === '3') {
        showNotification('Logging out...', 'info');
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function animateStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent.replace(/,/g, ''));
                animateNumber(target, 0, finalValue, 2000);
                observer.unobserve(target);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function loadUserData() {
    // Load from localStorage if available
    const savedWatchlist = localStorage.getItem('animax-watchlist');
    const savedUser = localStorage.getItem('animax-user');
    
    if (savedWatchlist) {
        try {
            userWatchlist = JSON.parse(savedWatchlist);
        } catch (e) {
            console.error('Error loading watchlist:', e);
        }
    }
    
    if (savedUser) {
        try {
            currentUser = { ...currentUser, ...JSON.parse(savedUser) };
        } catch (e) {
            console.error('Error loading user data:', e);
        }
    }
}

function saveUserData() {
    // Save to localStorage
    localStorage.setItem('animax-watchlist', JSON.stringify(userWatchlist));
    localStorage.setItem('animax-user', JSON.stringify(currentUser));
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced search with debouncing
const debouncedSearch = debounce(handleSearch, 300);

// Add smooth hover effects for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to anime cards
    const style = document.createElement('style');
    style.textContent = `
        .anime-card:hover .anime-thumbnail {
            transform: scale(1.05);
        }
        
        .btn:hover {
            transform: translateY(-2px);
        }
        
        .genre-item:hover {
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);
});

// Performance optimization
window.addEventListener('load', function() {
    // Preload critical images
    const criticalImages = [
        'resources/hero-anime.png',
        'resources/logo.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// Export functions for global access
window.ANIMAX = {
    showAnimeDetails,
    closeModal,
    addToWatchlist,
    removeFromWatchlist,
    startWatching,
    toggleWatchlist,
    filterByGenre,
    generateRecommendations
};
