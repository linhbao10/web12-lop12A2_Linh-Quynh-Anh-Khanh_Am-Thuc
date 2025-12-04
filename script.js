window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 600);
    }
});

// Fallback an toàn phòng khi sự kiện load bị treo
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.display !== 'none') {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 600);
    }
}, 3000);

function toggleMenu() {
    document.getElementById('mobileNav').classList.toggle('active');
}

function closeMenu() {
    document.getElementById('mobileNav').classList.remove('active');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const counters = entry.target.querySelectorAll('.num');
            counters.forEach(c => {
                const target = +c.getAttribute('data-target');
                let count = 0;
                const update = () => {
                    const inc = Math.ceil(target / 50);
                    if (count < target) {
                        count += inc;
                        c.innerText = count;
                        setTimeout(update, 30);
                    } else c.innerText = target;
                };
                update();
            });
        }
    });
}, {
    threshold: 0.1
});
document.querySelectorAll('[data-scroll]').forEach(el => observer.observe(el));


const btns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.dish-card');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        items.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 50);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});


const foodStories = {
    'pho-bo': {
        title: 'Phở Bò',
        content: 'Phở bò sinh ra từ miền Bắc những năm đầu thế kỷ XX. Nước dùng trong veo ninh từ xương ống suốt 12h, quế hồi thảo quả nướng thơm lừng tạo nên hương vị đặc trưng.'
    },
    'bun-bo-hue': {
        title: 'Bún Bò Huế',
        content: 'Đậm đà hương vị cố đô với mắm ruốc, sả và ớt cay nồng. Chân giò, chả cua và tiết luộc tạo nên tô bún đầy đặn.'
    },
    'hutieu-namvang': {
        title: 'Hủ Tiếu Nam Vang',
        content: 'Sự kết hợp tinh tế giữa ẩm thực Campuchia và Việt Nam, nước dùng ngọt thanh từ xương và tôm khô.'
    },
    'banh-canh-cua': {
        title: 'Bánh Canh Cua',
        content: 'Sợi bánh dai ngon, nước dùng sệt đậm đà vị hải sản từ cua đồng và cua biển.'
    },
    'mi-ga-quay': {
        title: 'Mì Gà Quay',
        content: 'Da gà giòn rụm, mì trứng dai ngon, thấm đẫm sốt tiêu đen đặc biệt.'
    },
    'hutieu-sate': {
        title: 'Hủ Tiếu Sa Tế',
        content: 'Hương vị Chợ Lớn đặc trưng với nước dùng đậm vị đậu phộng và ớt sa tế cay nồng.'
    },
    'bun-thit-nuong': {
        title: 'Bún Thịt Nướng',
        content: 'Thịt nướng than hoa thơm lừng ăn kèm rau sống và nước mắm chua ngọt thần thánh.'
    },
    'mi-quang': {
        title: 'Mì Quảng',
        content: 'Tinh hoa ẩm thực miền Trung với sợi mì vàng nghệ, tôm thịt rim đậm đà và bánh tráng nướng.'
    },
    'banh-mi': {
        title: 'Bánh Mì',
        content: 'Món ăn đường phố nổi tiếng thế giới với lớp vỏ giòn tan và nhân pate béo ngậy.'
    },
    'banhmi-xiumai': {
        title: 'Bánh Mì Xíu Mại',
        content: 'Đặc sản Đà Lạt với viên xíu mại mềm mại trong chén nước sốt nóng hổi, chấm bánh mì giòn.'
    },
    'banh-trang-tron': {
        title: 'Bánh Tráng Trộn',
        content: 'Món ăn vặt quốc dân với đủ vị chua cay mặn ngọt hòa quyện từ xoài xanh, bò khô, trứng cút.'
    },
    'ca-vien-chien': {
        title: 'Cá Viên Chiên',
        content: 'Ký ức tuổi thơ với những xiên que chiên giòn chấm tương đen, đặc biệt là phiên bản chiên nước mắm.'
    },
    'xoai-lac': {
        title: 'Xoài Lắc',
        content: 'Xoài chua giòn lắc cùng muối tôm cay nồng, kích thích vị giác.'
    },
    'pha-lau': {
        title: 'Phá Lấu',
        content: 'Nội tạng bò nấu nước dừa béo ngậy, chấm bánh mì là "hết sảy".'
    }
};


function openStory(id) {
    const story = foodStories[id];
    if (story) {
        const content = `<h2 class="story-modal-title">${story.title}</h2><div class="story-divider"><i class="fas fa-book-open"></i></div><p class="story-modal-text">${story.content}</p>`;
        document.getElementById('story-body-content').innerHTML = content;
        document.getElementById('story-modal').classList.add('active');
    }
}

function closeStory() {
    document.getElementById('story-modal').classList.remove('active');
}

const menuRandom = [{
        name: "Phở Bò",
        quote: "Nước dùng chữa lành tâm hồn."
    },
    {
        name: "Bún Bò Huế",
        quote: "Cay nồng đậm đà vị cố đô."
    },
    {
        name: "Cơm Tấm",
        quote: "Sườn nướng thơm lừng góc phố."
    },
    {
        name: "Bánh Mì",
        quote: "Giòn tan, ngập tràn topping."
    },
    {
        name: "Lẩu Thái",
        quote: "Chua cay hít hà, ấm lòng."
    },
    {
        name: "Bánh Tráng Trộn",
        quote: "Ăn chơi nhưng no thiệt."
    }
];

function openMysteryBox() {
    document.getElementById('mystery-modal').classList.add('active');
}

function closeMysteryBox() {
    document.getElementById('mystery-modal').classList.remove('active');
    document.getElementById('fortune-result').innerHTML = `<div class="placeholder"><i class="fas fa-utensils spin-slow"></i><p>Vũ trụ đang lắng nghe...</p></div>`;
}

function shakeFortune() {
    const display = document.getElementById('fortune-result');
    const icon = display.querySelector('i');
    if (icon) icon.className = 'fas fa-dice-d20 fa-spin';
    setTimeout(() => {
        const random = menuRandom[Math.floor(Math.random() * menuRandom.length)];
        display.innerHTML = `<div class="result-box w3-animate-zoom"><h3>✨ ${random.name} ✨</h3><p>"${random.quote}"</p></div>`;
    }, 1000);
}