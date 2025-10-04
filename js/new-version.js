// Gộp tất cả logic vào MỘT sự kiện DOMContentLoaded duy nhất
document.addEventListener('DOMContentLoaded', () => {

    // ======================================================
    // --- 1. LOGIC CHUNG & HEADER/PROGRESS BAR ---
    // ======================================================
    const header = document.querySelector('.main-header');
    const progressBar = document.querySelector('.scroll-progress-bar');
    const yearSpan = document.getElementById('currentYear');

    // Cập nhật năm hiện tại trong footer
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Theo dõi sự kiện cuộn trang
    window.addEventListener('scroll', () => {
        // Hiển thị header khi cuộn xuống
        if (window.scrollY > 100) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }

        // Cập nhật thanh tiến trình
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    });


    // ======================================================
    // --- 2. LOGIC ANIMATION KHI CUỘN TỚI ---
    // ======================================================
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // NÂNG CẤP OBSERVER NÀY
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Nếu phần tử đang ở trong màn hình (isIntersecting là true)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
            // Nếu phần tử KHÔNG còn ở trong màn hình (isIntersecting là false)
            else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Kích hoạt khi 10% của phần tử đi vào hoặc đi ra
    });

    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });


    // ======================================================
    // --- 3. LOGIC CHO THANH SKILL BAR (PHIÊN BẢN HYBRID) ---
    // ======================================================

    const skillsGrid = document.querySelector('.skills-grid');

    // Cập nhật lại toàn bộ hàm này
function initializeSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Logic của Observer sẽ được thay đổi
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const element = entry.target;
            const level = element.getAttribute('data-level');

            // Nếu phần tử đang ở trong màn hình (isIntersecting là true)
            if (entry.isIntersecting) {
                // Thì chạy animation đến mức % của nó
                element.style.width = level;
            } else {
                // Ngược lại, nếu nó đã ra ngoài màn hình, RESET nó về 0%
                element.style.width = '0%';
            }
        });
    }, { 
        threshold: 0.5 // Kích hoạt khi 50% của thanh skill hiện ra
    });

    skillLevels.forEach(level => {
        skillObserver.observe(level);
    });
}

    // Hàm hiển thị kỹ năng phiên bản nâng cao
    async function fetchAndDisplayHybridSkills() {
        if (!skillsGrid) return;

        // --- BƯỚC 1: ĐỊNH NGHĨA KỸ NĂNG CỐT LÕI VÀ ICON ---
        // Đây là danh sách các kỹ năng cơ bản của bạn.
        // 'percentage' ở đây là điểm cơ bản, sẽ được cộng thêm dựa vào GitHub.
        // Tách riêng HTML và CSS như bạn muốn.
        const skillsMap = new Map([
           
            ['CSS', { name: 'CSS', percentage: 40, icon: 'assets/icons/css.png' }],    
            ['Python', { name: 'Python', percentage: 65, icon: 'assets/icons/python.png' }],
            ['TypeScript', { name: 'TypeScript', percentage: 15, icon: 'assets/icons/typescript.png' }],
            ['React.js', { name: 'React.js', percentage: 76, icon: 'assets/icons/react.png' }],
            ['Tailwind', { name: 'Tailwind', percentage: 68, icon: 'assets/icons/Tailwind.png' }],
            ['Node.js', { name: 'Node.js', percentage: 70, icon: 'assets/icons/nodejs.png' }],
            ['npm', { name: 'npm', percentage: 75, icon: 'assets/icons/npm.png' }],
            ['Bootstrap', { name: 'Bootstrap', percentage: 70, icon: 'assets/icons/bootstrap.png' }],
            ['VS Code', { name: 'VS Code', percentage: 80, icon: 'assets/icons/VScode.png' }],
            ['MongoDB', { name: 'MongoDB', percentage: 50, icon: 'assets/icons/MongoDB.png' }],
            ['Material UI', { name: 'Material UI', percentage: 70, icon: 'assets/icons/Material UI.png' }],
            ['Git & GitHub', { name: 'Git & GitHub', percentage: 70, icon: 'assets/icons/github.png' }],
            ['Vite', { name: 'Vite', percentage: 70, icon: 'assets/icons/Vite.js.png' }],
            ['My_SQL', { name: 'My_SQL', percentage: 65, icon: 'assets/icons/MYSQL.png' }],
            ['Postman', { name: 'Postman', percentage: 70, icon: 'assets/icons/Postman.png' }],
            ['Vercel', { name: 'Vercel', percentage: 45, icon: 'assets/icons/Vercel.png' }],
            ['JavaScript', { name: 'JavaScript', percentage: 50, icon: 'assets/icons/javascript.png' }],
            ['HTML', { name: 'HTML', percentage: 70, icon: 'assets/icons/html.png' }],
             ['PHP', { name: 'PHP', percentage: 20, icon: 'assets/icons/php.png' }],
            ['Java', { name: 'Java', percentage: 25, icon: 'assets/icons/java1.png' }],
            ['Dart', { name: 'Dart', percentage: 20, icon: 'assets/icons/dart.png' }],


        ]);

        // Icon mặc định cho các ngôn ngữ không có trong danh sách trên
        const defaultIcon = 'assets/icons/default.png';

        const username = 'tranhuudat2004';
        const apiUrl = `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`;

        try {
            // --- BƯỚC 2: FETCH VÀ PHÂN TÍCH GITHUB ---
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);
            const repos = await response.json();

            const langStats = new Map();
            repos.forEach(repo => {
                if (repo.language) {
                    langStats.set(repo.language, (langStats.get(repo.language) || 0) + 1);
                }
            });

            // --- BƯỚC 3: TÍNH TOÁN & CẬP NHẬT PHẦN TRĂM ---
            langStats.forEach((count, lang) => {
                const factor = 2; // Mỗi repo ngôn ngữ đó sẽ cộng thêm 2%
                const maxBonus = 40; // Cộng tối đa 40% để tránh quá cao

                if (skillsMap.has(lang)) {
                    // Nếu ngôn ngữ đã có, cộng thêm %
                    const skill = skillsMap.get(lang);
                    const bonus = Math.min(count * factor, maxBonus);
                    skill.percentage = Math.min(skill.percentage + bonus, 95); // Giới hạn cuối cùng là 95%
                } else {
                    // Nếu là ngôn ngữ mới, thêm vào danh sách
                    skillsMap.set(lang, {
                        name: lang,
                        percentage: Math.min(10 + (count * factor), 50), // Ngôn ngữ mới có base 10%
                        icon: defaultIcon
                    });
                }
            });

            // --- BƯỚC 4: HIỂN THỊ KẾT QUẢ ---
            // Chuyển Map thành Array và sắp xếp theo % giảm dần
            const finalSkills = Array.from(skillsMap.values())
                .sort((a, b) => b.percentage - a.percentage);

            skillsGrid.innerHTML = ''; // Xóa thông báo loading

            finalSkills.forEach(skill => {
                const skillCardHTML = `
                <div class="skill-card glass-card animate-on-scroll">
                    <div class="skill-header">
                        <div class="skill-info">
                            <img src="${skill.icon}" alt="${skill.name} Icon" class="skill-icon-header">
                            <span class="skill-name">${skill.name}</span>
                        </div>
                        <span class="skill-percentage">${skill.percentage}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-level" data-level="${skill.percentage}%"></div>
                    </div>
                </div>
            `;
                skillsGrid.innerHTML += skillCardHTML;
            });

            // Kích hoạt lại animation cho các card và thanh skill vừa tạo
            const newAnimatedElements = skillsGrid.querySelectorAll('.animate-on-scroll');
            newAnimatedElements.forEach(el => animationObserver.observe(el));
            initializeSkillBars();

        } catch (error) {
            console.error("Failed to fetch skills:", error);
            skillsGrid.innerHTML = '<p class="skills-loading">Could not load skills from GitHub. Displaying default skills.</p>';
            // Có thể gọi một hàm hiển thị danh sách mặc định ở đây nếu muốn
        }
    }

    // Gọi hàm chính để bắt đầu
    fetchAndDisplayHybridSkills();


    // ======================================================
    // --- 4. LOGIC CHO MUSIC PLAYER ---
    // ======================================================
    const audio = document.getElementById('audio-source');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const songCover = document.getElementById('song-cover');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');


    let currentSongIndex = 0;
    let isPlaying = false;

    function loadSong(song) {
        if (song) {
            songTitle.textContent = song.title;
            songArtist.textContent = song.artist;
            songCover.src = song.coverPath;
            audio.src = song.audioPath;
        }
    }

    function playSong() {
        isPlaying = true;
        playPauseBtn.classList.replace('fa-play', 'fa-pause');
        audio.play();
    }

    function pauseSong() {
        isPlaying = false;
        playPauseBtn.classList.replace('fa-pause', 'fa-play');
        audio.pause();
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(playlist[currentSongIndex]);
        playSong();
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(playlist[currentSongIndex]);
        playSong();
    }

    // Gắn sự kiện cho các nút điều khiển nhạc
    playPauseBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
    nextBtn.addEventListener('click', nextSong);
    prevBtn.addEventListener('click', prevSong);
    audio.addEventListener('ended', nextSong);

    // Tải bài hát đầu tiên
    loadSong(playlist[currentSongIndex]);


    // ======================================================
    // --- 5. LOGIC CHO ACTIVE NAV INDICATOR ---
    // ======================================================
    const navLinks = document.querySelectorAll('.main-nav a');
    const navIndicator = document.querySelector('.nav-indicator');
    const sections = document.querySelectorAll('main section');

    function moveIndicator(targetLink) {
        if (!targetLink) {
            navIndicator.style.opacity = '0';
            return;
        }
        const linkRect = targetLink.getBoundingClientRect();
        const navRect = targetLink.parentElement.getBoundingClientRect();

        navIndicator.style.width = `${linkRect.width}px`;
        navIndicator.style.left = `${linkRect.left - navRect.left}px`;
        navIndicator.style.opacity = '1';

        navLinks.forEach(link => link.classList.remove('is-active'));
        targetLink.classList.add('is-active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => moveIndicator(e.currentTarget));
    });

    const navObserverOptions = {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    };

    const navSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const correspondingLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
                moveIndicator(correspondingLink);
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navSectionObserver.observe(section);
    });

    // Xử lý khi tải lại trang, di chuyển indicator đến vị trí đúng
    setTimeout(() => {
        let activeSectionVisible = false;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                const correspondingLink = document.querySelector(`.main-nav a[href="#${section.id}"]`);
                moveIndicator(correspondingLink);
                activeSectionVisible = true;
            }
        });

        // Nếu không có section nào active (ví dụ đang ở đầu trang), active #hero
        if (!activeSectionVisible && window.scrollY < window.innerHeight / 2) {
            const initialLink = document.querySelector('.main-nav a[href="#hero"]');
            moveIndicator(initialLink);
        }
    }, 200);

}); // <-- Dấu ngoặc đóng của sự kiện DOMContentLoaded duy nhất