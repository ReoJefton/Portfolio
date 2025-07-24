// Download Resume Button functionality
document.addEventListener('DOMContentLoaded', function () {
    var downloadBtn = document.getElementById('downloadResumeBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            const link = document.createElement('a');
            link.href = 'Reo%20JeftonResume%20Doc.docx';
            link.download = 'Reo_Jefton_Resume.docx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
// Smooth scroll with 100px offset for navbar links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.topNav a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                const y = target.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });
});
// Clicking a section link in the navbar opens the corresponding accordion if it is not already open.
document.addEventListener('DOMContentLoaded', function () {
    const sectionLinks = [
        { id: 'skills', selector: 'a[href="#home"]' },
        { id: 'experience', selector: 'a[href="#experience"]' },
        { id: 'education', selector: 'a[href="#education"]' },
        { id: 'projects', selector: 'a[href="#projects"]' }
    ];
    sectionLinks.forEach(({ id, selector }) => {
        const link = document.querySelector(selector);
        if (link) {
            link.addEventListener('click', function (e) {
                setTimeout(() => {
                    const section = document.getElementById(id);
                    if (section) {
                        const btn = section.querySelector('.accordion-toggle');
                        const content = section.querySelector('.accordion-content');
                        if (btn && content && !content.classList.contains('open')) {
                            btn.click();
                        }
                    }
                }, 100);
            });
        }
    });
});