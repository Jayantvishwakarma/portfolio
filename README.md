# Trần Hữu Đạt - Personal Portfolio & Project Showcase

![Trần Hữu Đạt Portfolio Banner](assets/profile.PNG) <!-- THAY THẾ bằng ảnh chụp màn hình trang chủ portfolio của bạn -->

Welcome to the source code repository for my personal portfolio website! This site serves as a central hub to showcase my skills, projects, and professional resume. It's designed with a clean, responsive interface and enhanced with interactive elements to provide an engaging user experience.
This README is available in English and Vietnamese. Please expand the section for your preferred language.



<p align="center">
  <a href="https://github.com/TranHuuDat2004" target="_blank">
    <img src="https://img.shields.io/badge/GITHUB-TranHuuDat2004-yellow?style=for-the-badge&logo=github&logoColor=white" alt="Author: TranHuuDat2004"/>
  </a>
  <a href="https://tranhuudat2004.github.io/" target="_blank">
    <img src="https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=google-chrome" alt="Live Demo"/>
  </a>
  <a href="https://github.com/TranHuuDat2004/tranhuudat2004.github.io/releases/latest" target="_blank">
    <img src="https://img.shields.io/github/v/release/TranHuuDat2004/tranhuudat2004.github.io?style=for-the-badge&logo=github" alt="Latest Release"/>
  </a>

</p>


<details>
<summary><strong>English Version (Click to Expand)</strong></summary>

## ✨ Key Features

This portfolio website incorporates several key features:

*   **Comprehensive Multi-Page Layout:**
    *   **🏠 Home (`index.html`):** A welcoming landing page introducing myself, highlighting key skills through an interactive grid, and providing an overview of my capabilities.
    *   **📄 Resume (`resume.html`):** A detailed presentation of my professional experience, educational background, and notable achievements.
    *   **💡 Projects (`projects.html`):** A categorized showcase of my software development projects, complete with descriptions, tech stacks, and direct links to live demos and GitHub repositories. This page dynamically fetches project data from the GitHub API.
    *   **✉️ Contact (`contact.html`):** A user-friendly contact form (powered by SB Forms - *API token setup required for full functionality*) alongside direct contact information.
*   **🖱️ Interactive Custom Cursor:** A unique, custom-designed mouse cursor that follows user movement across all pages. It features dynamically cycling text (with fade-in/fade-out animations) that is **contextually tailored to each specific page** (Home, Resume, Projects, Contact), offering relevant greetings or information. The cursor also changes appearance when hovering over interactive elements.
*   **🌐 Bilingual Support (English/Vietnamese):** Users can seamlessly switch website content between English and Vietnamese using an intuitive language switcher located in the navigation bar. Language preferences are saved locally for a consistent experience.
*   **📱 Responsive Design:** Built with Bootstrap 5, ensuring the website adapts beautifully and functions optimally across various screen sizes, including desktops, tablets, and mobile devices.
*   **🛠️ Interactive Skills Display:** Technical skills are presented in an engaging, interactive grid format on the Home and Resume pages, where hovering reveals more information via the custom cursor.

## 🛠️ Technology Stack

This portfolio is built using a combination of modern front-end technologies:

*   **HTML5:** Semantic markup for structuring the content of all pages.
*   **CSS3:** Custom styling for visual appeal, layout management (Flexbox, Grid), and animations.
    *   **Bootstrap 5:** Leveraged for its robust responsive grid system, pre-styled UI components, and utility classes.
*   **JavaScript (ES6+):** Powers all dynamic functionalities:
    *   **Custom Cursor Logic:** Manages cursor movement, text cycling with fade effects, and context-aware text display (embedded in each HTML page).
    *   **Bilingual System:** Dynamically loads and applies language translations to page content.
    *   **GitHub API Integration (`js/github.js`):** Fetches and renders project information on the "Projects" page.
    *   **UI Interactions:** Handles events for the language switcher, interactive grids, and other dynamic elements.
*   **External Libraries & APIs:**
    *   [Bootstrap Icons](https://icons.getbootstrap.com/)
    *   [Google Fonts (Plus Jakarta Sans)](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
    *   [SB Forms](https://startbootstrap.com/solution/contact-forms) (for the contact form - *API token required*)
    *   [GitHub API](https://docs.github.com/en/rest) (for project data)
*   **Hosting:** Deployed as a static website via [GitHub Pages](https://pages.github.com/).


## 🚀 How to View / Local Setup

1.  **Live Site:**
    *   The portfolio is best viewed live at: [https://tranhuudat2004.github.io/](https://tranhuudat2004.github.io/)

2.  **Local Setup:**
    *   Clone this repository:
        ```bash
        git clone https://github.com/TranHuuDat2004/tranhuudat2004.github.io.git
        ```
        *(Replace with your actual repository URL if it's different)*
    *   Navigate into the cloned directory:
        ```bash
        cd tranhuudat2004.github.io
        ```
    *   Open any of the `.html` files (e.g., `index.html`) directly in your preferred web browser. No compilation or build steps are necessary as this is a static website.

    *   **Important Note for Contact Form:** The contact form on `contact.html` uses SB Forms. For it to send emails, you must:
        1.  Sign up at [https://startbootstrap.com/solution/contact-forms](https://startbootstrap.com/solution/contact-forms).
        2.  Obtain your unique API token.
        3.  Replace the placeholder `API_TOKEN_CUA_BAN` in the `data-sb-form-api-token` attribute of the `<form>` tag in `contact.html` with your actual token.

## 💡 Development Insights & Customizations

*   **Contextual Cursor Text:** The custom cursor's text changes based on the page being viewed, providing relevant, cycling messages. This is achieved by defining unique `autoTexts` arrays within the JavaScript embedded in each HTML page.
*   **Dynamic Language Switching:** A JavaScript-driven system allows users to toggle between English and Vietnamese content. The selected language is persisted in `localStorage`.
*   **GitHub Projects Showcase:** The `projects.html` page leverages the GitHub API to automatically fetch and display public repositories as project cards.

## 🌟 Future Enhancements (Ideas)

*   Implement a dark mode/light mode toggle.
*   Add a dedicated blog section.
*   Further optimize image loading and performance.

## 👤 Author & Contact

*   **Trần Hữu Đạt**
    *   **GitHub:** [@TranHuuDat2004](https://github.com/TranHuuDat2004)
    *   **LinkedIn:** [linkedin.com/in/tranhuudat2004](https://linkedin.com/in/tranhuudat2004) <!-- Full link -->
    *   **Email:** `huudat.peashooer@gmail.com`

---

<p align="center">
  Thank you for exploring my portfolio and its source code! Feel free to connect.
</p>

</details>

---

<details>
<summary><strong>Phiên bản Tiếng Việt (Nhấn để Mở rộng)</strong></summary>

## ✨ Các Tính năng Chính

Trang web portfolio này tích hợp một số tính năng chính:

*   **Bố cục Đa trang Toàn diện:**
    *   **🏠 Trang chủ (`index.html`):** Giới thiệu bản thân, làm nổi bật các kỹ năng chính thông qua một lưới tương tác và cung cấp cái nhìn tổng quan về khả năng của tôi.
    *   **📄 Hồ sơ (`resume.html`):** Trình bày chi tiết về kinh nghiệm chuyên môn, quá trình học vấn và những thành tích đáng chú ý.
    *   **💡 Dự án (`projects.html`):** Giới thiệu các dự án phát triển phần mềm của tôi theo danh mục, kèm theo mô tả, ngăn xếp công nghệ và liên kết trực tiếp đến demo trực tuyến cũng như kho lưu trữ GitHub. Trang này tự động tải dữ liệu dự án từ GitHub API.
    *   **✉️ Liên hệ (`contact.html`):** Một biểu mẫu liên hệ thân thiện với người dùng (sử dụng SB Forms - *cần thiết lập API token để hoạt động đầy đủ*) cùng với thông tin liên hệ trực tiếp.
*   **🖱️ Con trỏ Chuột Tùy chỉnh Tương tác:** Một con trỏ chuột được thiết kế tùy chỉnh độc đáo, theo dõi chuyển động của người dùng trên tất cả các trang. Nó hiển thị văn bản thay đổi động (với hiệu ứng fade-in/fade-out) được **điều chỉnh theo ngữ cảnh cho từng trang cụ thể** (Trang chủ, Hồ sơ, Dự án, Liên hệ), cung cấp các thông điệp chào mừng hoặc thông tin liên quan. Con trỏ cũng thay đổi giao diện khi di chuột qua các yếu tố tương tác.
*   **🌐 Hỗ trợ Song ngữ (Tiếng Anh/Tiếng Việt):** Người dùng có thể chuyển đổi liền mạch nội dung trang web giữa tiếng Anh và tiếng Việt bằng cách sử dụng bộ chọn ngôn ngữ trực quan trên thanh điều hướng. Tùy chọn ngôn ngữ được lưu cục bộ để mang lại trải nghiệm nhất quán.
*   **📱 Thiết kế Đáp ứng (Responsive):** Được xây dựng với Bootstrap 5, đảm bảo trang web hiển thị đẹp mắt và hoạt động tối ưu trên nhiều kích thước màn hình khác nhau, bao gồm máy tính để bàn, máy tính bảng và thiết bị di động.
*   **🛠️ Hiển thị Kỹ năng Tương tác:** Các kỹ năng kỹ thuật được trình bày dưới dạng lưới tương tác hấp dẫn trên trang Chủ và Hồ sơ, nơi việc di chuột qua sẽ hiển thị thêm thông tin thông qua con trỏ tùy chỉnh.

## 🛠️ Ngăn xếp Công nghệ

Portfolio này được xây dựng bằng sự kết hợp của các công nghệ front-end hiện đại:

*   **HTML5:** Đánh dấu ngữ nghĩa để cấu trúc nội dung của tất cả các trang.
*   **CSS3:** Tạo kiểu tùy chỉnh cho giao diện, quản lý bố cục (Flexbox, Grid) và hiệu ứng động.
    *   **Bootstrap 5:** Được tận dụng cho hệ thống lưới đáp ứng mạnh mẽ, các thành phần UI được tạo kiểu sẵn và các lớp tiện ích.
*   **JavaScript (ES6+):** Cung cấp năng lượng cho tất cả các chức năng động:
    *   **Logic Con trỏ Tùy chỉnh:** Quản lý chuyển động của con trỏ, thay đổi văn bản theo chu kỳ với hiệu ứng mờ dần và hiển thị văn bản theo ngữ cảnh (được nhúng trong từng trang HTML).
    *   **Hệ thống Song ngữ:** Tải và áp dụng các bản dịch ngôn ngữ động cho nội dung trang.
    *   **Tích hợp GitHub API (`js/github.js`):** Tìm nạp và hiển thị thông tin dự án trên trang "Dự án".
    *   **Tương tác UI:** Xử lý các sự kiện cho bộ chọn ngôn ngữ, lưới tương tác và các yếu tố động khác.
*   **Thư viện & API Bên ngoài:**
    *   [Bootstrap Icons](https://icons.getbootstrap.com/)
    *   [Google Fonts (Plus Jakarta Sans)](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
    *   [SB Forms](https://startbootstrap.com/solution/contact-forms) (cho biểu mẫu liên hệ - *yêu cầu API token*)
    *   [GitHub API](https://docs.github.com/en/rest) (cho dữ liệu dự án)
*   **Hosting:** Được triển khai dưới dạng trang web tĩnh thông qua [GitHub Pages](https://pages.github.com/).

## 🚀 Cách Xem / Thiết lập Cục bộ

1.  **Trang Trực tuyến:**
    *   Cách dễ nhất để xem portfolio là truy cập trang trực tuyến tại: [https://tranhuudat2004.github.io/](https://tranhuudat2004.github.io/)

2.  **Thiết lập Cục bộ:**
    *   Sao chép kho lưu trữ này:
        ```bash
        git clone https://github.com/TranHuuDat2004/tranhuudat2004.github.io.git
        ```
        *(Thay thế bằng URL kho lưu trữ thực tế của bạn nếu khác)*
    *   Điều hướng vào thư mục dự án vừa sao chép:
        ```bash
        cd tranhuudat2004.github.io
        ```
    *   Mở bất kỳ tệp `.html` nào (ví dụ: `index.html`) trực tiếp bằng trình duyệt web của bạn. Không cần các bước build đặc biệt vì đây là một trang web tĩnh.

    *   **Lưu ý Quan trọng cho Biểu mẫu Liên hệ:** Biểu mẫu liên hệ trên `contact.html` sử dụng SB Forms. Để nó hoạt động gửi email, bạn phải:
        1.  Đăng ký tại [https://startbootstrap.com/solution/contact-forms](https://startbootstrap.com/solution/contact-forms).
        2.  Lấy API token duy nhất của bạn.
        3.  Thay thế placeholder `API_TOKEN_CUA_BAN` trong thuộc tính `data-sb-form-api-token` của thẻ `<form>` trong `contact.html` bằng token thực tế của bạn.

## 💡 Điểm Nổi bật & Tùy chỉnh Phát triển

*   **Văn bản Con trỏ theo Ngữ cảnh:** Văn bản của con trỏ tùy chỉnh thay đổi dựa trên trang đang xem, cung cấp các thông điệp theo chu kỳ liên quan. Điều này đạt được bằng cách định nghĩa các mảng `autoTexts` duy nhất trong JavaScript được nhúng trong mỗi trang HTML.
*   **Chuyển đổi Ngôn ngữ Động:** Một hệ thống dựa trên JavaScript cho phép người dùng chuyển đổi giữa nội dung tiếng Anh và tiếng Việt. Ngôn ngữ được chọn sẽ được lưu trong `localStorage`.
*   **Giới thiệu Dự án từ GitHub:** Trang `projects.html` tận dụng GitHub API để tự động tải và hiển thị các kho lưu trữ GitHub công khai của tôi dưới dạng các thẻ dự án tương tác.

## 🌟 Các Cải tiến Tiềm năng (Ý tưởng)

*   Thêm chức năng chuyển đổi chế độ tối/sáng.
*   Tích hợp một mục blog riêng.
*   Tối ưu hóa thêm việc tải hình ảnh và hiệu suất.

## 👤 Tác giả & Liên hệ

*   **Trần Hữu Đạt**
    *   **GitHub:** [@TranHuuDat2004](https://github.com/TranHuuDat2004)
    *   **LinkedIn:** [linkedin.com/in/tranhuudat2004](https://linkedin.com/in/tranhuudat2004) <!-- Link đầy đủ -->
    *   **Email:** `huudat.peashooer@gmail.com`

---

<p align="center">
  Cảm ơn bạn đã ghé thăm portfolio và mã nguồn của tôi! Rất vui được kết nối.
</p>

</details>