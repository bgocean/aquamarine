const pdfLinks = document.querySelectorAll('.pdf-link');
const pdfModal = document.getElementById("pdf-modal");
const pdfIframe = document.getElementById("pdf-iframe");
const closePdfModal = document.getElementById("close-pdf-modal");

pdfLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const pdfURL = this.getAttribute('href');

        pdfIframe.src = pdfURL;
        pdfModal.style.display = "flex";
    });
});

closePdfModal.addEventListener("click", () => {
    pdfIframe.src = "";
    pdfModal.style.display = "none";
});

$(function () {
    $(".menu a, .footer__menu a").on("click", function (e) {
        e.preventDefault();
        let id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 1500);
    });
});