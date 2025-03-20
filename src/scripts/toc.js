document.addEventListener("DOMContentLoaded", function () {
    const tocContainer = document.getElementById("toc");
    if (!tocContainer) return;

    const headers = document.querySelectorAll(".prose h2, .prose h3");
    if (headers.length === 0) return;

    let tocHTML = "<ul>";

    headers.forEach((header) => {
        const headerText = header.textContent;
        const headerID = headerText.toLowerCase().replace(/\s+/g, "-");
        header.id = headerID;
        tocHTML += `<li><a href="#${headerID}">${headerText}</a></li>`;
    });

    tocHTML += "</ul>";
    tocContainer.innerHTML = tocHTML;
});
