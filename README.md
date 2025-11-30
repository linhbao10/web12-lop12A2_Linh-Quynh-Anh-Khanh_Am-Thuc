<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VietTaste | Tinh Hoa Ẩm Thực Việt</title>
  
  <!-- Font chữ -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
  
  <!-- Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
  
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- MÀN HÌNH CHỜ -->.    
  <div id="preloader">
    <div class="loader-content">
      <span class="loader-text">VietTaste</span>
      <div class="loader-line"></div>
    </div>
  </div>

  <!-- BACKGROUND NGHỆ THUẬT -->
  <div class="fixed-bg"></div>

  <!-- NAVIGATION -->
  <nav class="navbar">
    <div class="container nav-container">
      <a href="#" class="brand">VIET<span class="text-gold">TASTE</span>.</a>
      
      <ul class="nav-menu" id="navMenu">
        <li><a href="#hero" class="nav-link active" onclick="closeMenu()">Trang Chủ</a></li>
        <li><a href="#menu" class="nav-link" onclick="closeMenu()">Thực Đơn & Câu Chuyện</a></li>
        <li><a href="#video" class="nav-link" onclick="closeMenu()">Video</a></li>
        <li><a href="#lien-he" class="nav-link" onclick="closeMenu()">Liên Hệ</a></li>
      </ul>

      <div class="nav-actions">
        <button onclick="openMysteryBox()" class="btn-random glow-effect">
          <i class="fas fa-utensils"></i> Ăn gì hôm nay?
        </button>
        
        <div class="hamburger" onclick="toggleMenu()">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  </nav>

  <!-- MENU MOBILE OVERLAY -->
  <div class="mobile-nav-overlay" id="mobileNav">
    <span class="close-nav" onclick="toggleMenu()">&times;</span>
    <a href="#hero" onclick="toggleMenu()">Trang Chủ</a>
    <a href="#menu" onclick="toggleMenu()">Thực Đơn & Câu Chuyện</a>
    <a href="#video" onclick="toggleMenu()">Video</a>
    <a href="javascript:void(0)" onclick="openMysteryBox(); toggleMenu()">Gieo Quẻ Ăn Uống</a>
  </div>

  <main>
    <!-- HERO SECTION -->
    <section id="hero" class="hero-section">
      <div class="container hero-grid">
        <div class="hero-content" data-scroll>
          <div class="hero-badge">
            <i class="fas fa-star"></i> Ẩm Thực Di Sản
          </div>
          <!-- ĐÃ CHỈNH SỬA ĐỂ KHÔNG BỊ RỚT CHỮ -->
          <h1 class="hero-title">
            Hương Vị <br> <span class="text-gradient no-wrap"> Việt Nam </span>
          </h1>
          <p class="hero-desc">
            Chào mừng đến với VietTaste. Nơi lưu giữ và tôn vinh những món ăn truyền thống Việt Nam, đậm đà bản sắc, tinh tế trong từng nguyên liệu.
          </p>
          <div class="hero-btns">
            <a href="#menu" class="btn-primary">Khám Phá Ngay</a>
            <a href="#video" class="btn-outline">Xem Video</a>
          </div>
        </div>

        <div class="hero-visual" data-scroll>
          <div class="bowl-frame">
            <div class="badge-float">
              <span>Top 1</span> 2025
            </div>
            <div class="bowl-border">
              <img src="https://media.urbanistnetwork.com/urbanistvietnam/articleimages/2025/02/20/giavi/giaviweb1b.jpg" alt="Ẩm thực Việt">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS SECTION -->
    <section class="stats-section">
      <div class="container stats-grid" data-scroll>
        <div class="stat-item">
          <span class="num" data-target="100">0</span>
          <span class="label">Năm Lịch Sử</span>
        </div>
        <div class="stat-item">
          <span class="num" data-target="63">0</span>
          <span class="label">Tỉnh Thành</span>
        </div>
        <div class="stat-item">
          <span class="num" data-target="3000">0</span>+
          <span class="label">Món Ngon</span>
        </div>
      </div>
    </section>

    <!-- MENU SECTION (KẾT HỢP CÂU CHUYỆN) -->
    <section id="menu" class="section">
      <div class="container">
        <div class="section-header text-center" data-scroll>
          <p class="sub-heading">Thực Đơn Tuyển Chọn</p>
          <h2 class="heading">Tinh Hoa Ba Miền</h2>
          <p class="section-desc">Bấm vào từng món để khám phá câu chuyện văn hóa đằng sau.</p>
          <div class="divider"><i class="fas fa-utensils"></i></div>
        </div>

        <div class="filter-container" data-scroll>
          <button class="filter-btn active" data-filter="all">Tất Cả</button>
          <button class="filter-btn" data-filter="nuoc">Món Nước</button>
          <button class="filter-btn" data-filter="kho">Món Khô</button>
          <button class="filter-btn" data-filter="banhmi">Bánh Mì</button>
          <button class="filter-btn" data-filter="anvat">Ăn Vặt</button>
        </div>

        <div class="menu-grid">
          <!-- Món Nước -->
          <div class="dish-card" data-category="nuoc" data-scroll onclick="openStory('pho-bo')"><div class="dish-img"><img src="https://png.pngtree.com/thumb_back/fh260/background/20240328/pngtree-pho-bo-vietnamese-soup-with-pork-and-rice-noodles-image_15645564.jpg" alt="Phở Bò"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Phở Bò</h3><p class="dish-tag">Hà Nội</p></div></div>
          <div class="dish-card" data-category="nuoc" data-scroll onclick="openStory('bun-bo-hue')"><div class="dish-img"><img src="https://static.vinwonders.com/production/bun-bo-hue-1.jpg" alt="Bún Bò Huế"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Bún Bò Huế</h3><p class="dish-tag">Cố Đô</p></div></div>
          <div class="dish-card" data-category="nuoc" data-scroll onclick="openStory('hutieu-namvang')"><div class="dish-img"><img src="https://i-giadinh.vnecdn.net/2023/05/15/Bc8Thnhphm18-1684125639-9811-1684125654.jpg" alt="Hủ Tiếu Nam Vang"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Hủ Tiếu Nam Vang</h3><p class="dish-tag">Miền Nam</p></div></div>
          <div class="dish-card" data-category="nuoc" data-scroll onclick="openStory('banh-canh-cua')"><div class="dish-img"><img src="https://www.cleanipedia.com/images/5iwkm8ckyw6v/6ZzmagCQkHADBgZ1QvYO4F/3f6ceffac0e9f93f3667a3be7d23b835/dG9uZy1ob3AtMy1jYWNoLW5hdS1iYW5oLWNhbmgtY3VhLW5nb24tYmF0LWJhaS1jdWMtaGFwLWRhbi10YWktbmhhLmpwZw/1200w/b%C3%A1t-s%C3%BAp-h%E1%BA%A3i-s%E1%BA%A3n-v%E1%BB%9Bi-cua%2C-m%E1%BB%B1c%2C-v%C3%A0-c%C3%A1c-lo%E1%BA%A1i-th%E1%BB%B1c-ph%E1%BA%A9m-kh%C3%A1c..jpg" alt="Bánh Canh Cua"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Bánh Canh Cua</h3><p class="dish-tag">Sài Gòn</p></div></div>
          
          <!-- Món Khô -->
          <div class="dish-card" data-category="kho" data-scroll onclick="openStory('mi-ga-quay')"><div class="dish-img"><img src="https://img.mservice.com.vn/common/u/2e02fb5fe4f64fb55bc713540643c6f8eae702d101cea8c59afc49cfc505fc37/fbe3c2c9-7d14-4b18-8ce5-7aff42d47d22cm7qx13y.jpg" alt="Mì Gà Quay"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Mì Gà Quay</h3><p class="dish-tag">Sài Gòn</p></div></div>
          <div class="dish-card" data-category="kho" data-scroll onclick="openStory('bun-thit-nuong')"><div class="dish-img"><img src="https://static.vinwonders.com/production/bun-thit-nuong-ha-noi-2.jpg" alt="Bún Thịt Nướng"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Bún Thịt Nướng</h3><p class="dish-tag">Miền Nam</p></div></div>
          <div class="dish-card" data-category="kho" data-scroll onclick="openStory('hutieu-sate')"><div class="dish-img"><img src="https://dulichviet.com.vn/images/bandidau/top-4-quan-hu-tieu-sa-te-nai-ngon-nuc-tieng-tai-sai-gon-danh-cho-ban.jpg" alt="Hủ Tiếu Sa Tế"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Hủ Tiếu Sa Tế</h3><p class="dish-tag">Chợ Lớn</p></div></div>
          <div class="dish-card" data-category="kho" data-scroll onclick="openStory('mi-quang')"><div class="dish-img"><img src="https://img-global.cpcdn.com/recipes/b2f9c9f32d302a2a/680x781cq80/mi-qu%E1%BA%A3ng-ga-tom-tr%E1%BB%A9ng-recipe-main-photo.jpg" alt="Mì Quảng"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Mì Quảng</h3><p class="dish-tag">Miền Trung</p></div></div>
          
          <!-- Bánh Mì -->
          <div class="dish-card" data-category="banhmi" data-scroll onclick="openStory('banh-mi')"><div class="dish-img"><img src="https://media.istockphoto.com/id/1323340232/photo/banh-mi-viet-nam-viet-nam-traditional-sandwiches.jpg?s=612x612&w=0&k=20&c=2ziGdTLcOet9pIlOmawk744cCzgmP8bGVr3kQ9QedSE=" alt="Bánh Mì"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Bánh Mì Thịt</h3><p class="dish-tag">Đường Phố</p></div></div>
          <div class="dish-card" data-category="banhmi" data-scroll onclick="openStory('banhmi-xiumai')"><div class="dish-img"><img src="https://feedthepudge.com/wp-content/uploads/2025/04/Banh-mi-Xa-Xiu-2.webp" alt="Bánh Mì Xíu Mại"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Bánh Mì Xíu Mại</h3><p class="dish-tag">Đà Lạt</p></div></div>
          
          <!-- Ăn Vặt -->
          <div class="dish-card" data-category="anvat" data-scroll onclick="openStory('banh-trang-tron')"><div class="dish-img"><img src="https://i-giadinh.vnecdn.net/2023/08/05/mon-7-1691221823-6409-1691221866.jpg" alt="Bánh Tráng Trộn"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Bánh Tráng Trộn</h3><p class="dish-tag">Ăn Vặt</p></div></div>
          <div class="dish-card" data-category="anvat" data-scroll onclick="openStory('ca-vien-chien')"><div class="dish-img"><img src="https://tranphust.edu.vn/uploads/blog/2025/01/02/d1d3acf9c3c818394192fa64cab53a69220b8ef5-1735763528.webp" alt="Cá Viên Chiên"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Cá Viên Chiên</h3><p class="dish-tag">Vỉa Hè</p></div></div>
          <div class="dish-card" data-category="anvat" data-scroll onclick="openStory('xoai-lac')"><div class="dish-img"><img src="https://heyyofoods.com/wp-content/uploads/2023/07/1-1.jpg" alt="Xoài Lắc"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Xoài Lắc</h3><p class="dish-tag">Gen Z</p></div></div>
          <div class="dish-card" data-category="anvat" data-scroll onclick="openStory('pha-lau')"><div class="dish-img"><img src="https://truongnauan.com/test_disk/photos/shares/nguyen-lieu-nau-an/pha-lau-la-gi/pha-lau-bo.jpg" alt="Phá Lấu"><div class="dish-overlay"><span class="click-hint">Xem câu chuyện</span></div></div><div class="dish-info"><h3>Phá Lấu</h3><p class="dish-tag">Ăn Vặt</p></div></div>
        </div>
      </div>
    </section>

    <!-- VIDEO SECTION -->
    <section id="video" class="section video-section" data-scroll>
      <div class="video-bg-overlay"></div>
      <div class="container video-content">
        <div class="play-btn-outer">
          <a href="https://www.youtube.com/watch?v=Feu-DN-UleE" target="_blank" class="play-btn-inner">
            <i class="fas fa-play"></i>
          </a>
        </div>
        <h2>Nghệ Thuật Ẩm Thực</h2>
        <p>Cảm nhận nhịp sống và hương vị qua từng khung hình</p>
        
        <div class="video-grid-layout">
          <div class="video-item">
            <iframe src="https://www.youtube.com/embed/Feu-DN-UleE" frameborder="0" allowfullscreen></iframe>
            <span>Hành trình Phở</span>
          </div>
          <div class="video-item">
            <iframe src="https://www.youtube.com/embed/faPoKO386iM" frameborder="0" allowfullscreen></iframe>
            <span>Bánh Mì Sài Gòn</span>
          </div>
          <div class="video-item">
            <iframe src="https://www.youtube.com/embed/9aGxiKWL4TM" frameborder="0" allowfullscreen></iframe>
            <span>Ẩm thực đường phố</span>
          </div>
        </div>
      </div>
    </section>

    <!-- LIÊN HỆ -->
    <section id="lien-he" class="section contact-section">
      <div class="container">
        <div class="contact-box" data-scroll>
          <div class="contact-info">
            <h3>Kết Nối Với Chúng Tôi</h3>
            <p>"Uống nước nhớ nguồn" - VietTaste luôn trân trọng ý kiến của bạn.</p>
            <ul>
              <li><i class="fas fa-map-marker-alt"></i> 123 Đường Ẩm Thực, Quận 1, TP.HCM</li>
              <li><i class="fas fa-envelope"></i> hello@viettaste.vn</li>
              <li><i class="fas fa-phone"></i> 0909 123 456</li>
            </ul>
          </div>
          <div class="contact-form-wrapper">
            <form>
              <div class="form-group">
                <input type="text" placeholder="Tên của bạn" required>
              </div>
              <div class="form-group">
                <input type="text" placeholder="Món ăn bạn yêu thích" required>
              </div>
              <div class="form-group">
                <textarea placeholder="Lời nhắn gửi..." rows="4" required></textarea>
              </div>
              <button class="btn-submit">Gửi Tin Nhắn <i class="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer-logo">VietTaste</div>
      <p>Gửi trọn tình yêu vào từng món ăn.</p>
      <p class="copyright">© 2025 Tinh Hoa Ẩm Thực Việt Nam.</p>
    </div>
  </footer>

  <!-- MODAL: CÂU CHUYỆN MÓN ĂN (STORY POPUP) -->
  <div id="story-modal" class="modal">
    <div class="modal-backdrop" onclick="closeStory()"></div>
    <div class="modal-content story-content w3-animate-zoom">
      <span class="close-modal" onclick="closeStory()">&times;</span>
      <div class="story-body" id="story-body-content">
        <!-- Nội dung sẽ được JS điền vào đây -->
      </div>
    </div>
  </div>

  <!-- MODAL: HỘP GIEO QUẺ (MYSTERY BOX) -->
  <div id="mystery-modal" class="modal">
    <div class="modal-backdrop" onclick="closeMysteryBox()"></div>
    <div class="modal-content w3-animate-zoom mystery-content">
      <span class="close-modal" onclick="closeMysteryBox()">&times;</span>
      <div class="corner c-tl"></div><div class="corner c-tr"></div>
      <div class="corner c-bl"></div><div class="corner c-br"></div>

      <div class="modal-header">
        <p class="modal-sub">Hôm Nay Ăn Gì?</p>
        <h2 class="modal-title">Gieo Quẻ Ẩm Thực</h2>
      </div>

      <div id="fortune-result" class="fortune-box">
        <div class="placeholder">
          <i class="fas fa-utensils spin-slow"></i>
          <p>Hãy để vũ trụ chọn món cho bạn...</p>
        </div>
      </div>

      <button onclick="shakeFortune()" class="btn-shake">
        <i class="fas fa-random"></i> Xin Keo
      </button>
    </div>
  </div>

  <!-- SCRIPT -->
  <script>
    window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      if(preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 600);
      }
    });
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if(preloader && preloader.style.display !== 'none') {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 600);
      }
    }, 3000);

    function toggleMenu() { document.getElementById('mobileNav').classList.toggle('active'); }
    function closeMenu() { document.getElementById('mobileNav').classList.remove('active'); }

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
              if(count < target) { count += inc; c.innerText = count; setTimeout(update, 30); }
              else c.innerText = target;
            };
            update();
          });
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-scroll]').forEach(el => observer.observe(el));

    const btns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.dish-card');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        items.forEach(item => {
          if(filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block'; setTimeout(() => item.style.opacity = '1', 50);
          } else {
            item.style.opacity = '0'; setTimeout(() => item.style.display = 'none', 300);
          }
        });
      });
    });

    const foodStories = {
      'pho-bo': { title: 'Phở Bò', content: 'Phở bò sinh ra từ miền Bắc những năm đầu thế kỷ XX. Nước dùng trong veo ninh từ xương ống suốt 12h, quế hồi thảo quả nướng thơm lừng tạo nên hương vị đặc trưng.' },
      'bun-bo-hue': { title: 'Bún Bò Huế', content: 'Đậm đà hương vị cố đô với mắm ruốc, sả và ớt cay nồng. Chân giò, chả cua và tiết luộc tạo nên tô bún đầy đặn.' },
      'hutieu-namvang': { title: 'Hủ Tiếu Nam Vang', content: 'Sự kết hợp tinh tế giữa ẩm thực Campuchia và Việt Nam, nước dùng ngọt thanh từ xương và tôm khô.' },
      'banh-canh-cua': { title: 'Bánh Canh Cua', content: 'Sợi bánh dai ngon, nước dùng sệt đậm đà vị hải sản từ cua đồng và cua biển.' },
      'mi-ga-quay': { title: 'Mì Gà Quay', content: 'Da gà giòn rụm, mì trứng dai ngon, thấm đẫm sốt tiêu đen đặc biệt.' },
      'hutieu-sate': { title: 'Hủ Tiếu Sa Tế', content: 'Hương vị Chợ Lớn đặc trưng với nước dùng đậm vị đậu phộng và ớt sa tế cay nồng.' },
      'bun-thit-nuong': { title: 'Bún Thịt Nướng', content: 'Thịt nướng than hoa thơm lừng ăn kèm rau sống và nước mắm chua ngọt thần thánh.' },
      'mi-quang': { title: 'Mì Quảng', content: 'Tinh hoa ẩm thực miền Trung với sợi mì vàng nghệ, tôm thịt rim đậm đà và bánh tráng nướng.' },
      'banh-mi': { title: 'Bánh Mì', content: 'Món ăn đường phố nổi tiếng thế giới với lớp vỏ giòn tan và nhân pate béo ngậy.' },
      'banhmi-xiumai': { title: 'Bánh Mì Xíu Mại', content: 'Đặc sản Đà Lạt với viên xíu mại mềm mại trong chén nước sốt nóng hổi, chấm bánh mì giòn.' },
      'banh-trang-tron': { title: 'Bánh Tráng Trộn', content: 'Món ăn vặt quốc dân với đủ vị chua cay mặn ngọt hòa quyện từ xoài xanh, bò khô, trứng cút.' },
      'ca-vien-chien': { title: 'Cá Viên Chiên', content: 'Ký ức tuổi thơ với những xiên que chiên giòn chấm tương đen, đặc biệt là phiên bản chiên nước mắm.' },
      'xoai-lac': { title: 'Xoài Lắc', content: 'Xoài chua giòn lắc cùng muối tôm cay nồng, kích thích vị giác.' },
      'pha-lau': { title: 'Phá Lấu', content: 'Nội tạng bò nấu nước dừa béo ngậy, chấm bánh mì là "hết sảy".' }
    };

    function openStory(id) {
      const story = foodStories[id];
      if(story) {
        const content = `<h2 class="story-modal-title">${story.title}</h2><div class="story-divider"><i class="fas fa-book-open"></i></div><p class="story-modal-text">${story.content}</p>`;
        document.getElementById('story-body-content').innerHTML = content;
        document.getElementById('story-modal').classList.add('active');
      }
    }
    function closeStory() { document.getElementById('story-modal').classList.remove('active'); }

    const menuRandom = [
      {name: "Phở Bò", quote: "Nước dùng chữa lành tâm hồn."},
      {name: "Bún Bò Huế", quote: "Cay nồng đậm đà vị cố đô."},
      {name: "Cơm Tấm", quote: "Sườn nướng thơm lừng góc phố."},
      {name: "Bánh Mì", quote: "Giòn tan, ngập tràn topping."},
      {name: "Lẩu Thái", quote: "Chua cay hít hà, ấm lòng."},
      {name: "Bánh Tráng Trộn", quote: "Ăn chơi nhưng no thiệt."}
    ];
    function openMysteryBox() { document.getElementById('mystery-modal').classList.add('active'); }
    function closeMysteryBox() { 
      document.getElementById('mystery-modal').classList.remove('active');
      document.getElementById('fortune-result').innerHTML = `<div class="placeholder"><i class="fas fa-utensils spin-slow"></i><p>Vũ trụ đang lắng nghe...</p></div>`;
    }
    function shakeFortune() {
      const display = document.getElementById('fortune-result');
      const icon = display.querySelector('i');
      if(icon) icon.className = 'fas fa-dice-d20 fa-spin';
      setTimeout(() => {
        const random = menuRandom[Math.floor(Math.random() * menuRandom.length)];
        display.innerHTML = `<div class="result-box w3-animate-zoom"><h3>✨ ${random.name} ✨</h3><p>"${random.quote}"</p></div>`;
      }, 1000);
    }
  </script>
</body>
</html>