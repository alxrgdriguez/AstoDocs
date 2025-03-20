document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver(() => {
        const tocContainer = document.getElementById("toc");
        const headers = document.querySelectorAll("h2, h3");

        console.log("TOC Container:", tocContainer); // Verifica si el contenedor está presente
        console.log("Headers found:", headers); // Verifica si los encabezados están presentes

        if (tocContainer && headers.length > 0) {
            observer.disconnect(); // Detenemos el observador una vez que se genera el índice

            let tocHTML = "<ul>";

            headers.forEach((header) => {
                const headerText = header.textContent;
                const headerID = headerText.toLowerCase().replace(/\s+/g, "-");
                header.id = headerID;
                tocHTML += `<li><a href="#${headerID}">${headerText}</a></li>`;
            });

            tocHTML += "</ul>";
            console.log("Generated TOC HTML:", tocHTML); // Verifica el contenido generado
            tocContainer.innerHTML = tocHTML;
        }
    });

    // Observa cambios en el DOM para detectar cuando los elementos estén disponibles
    observer.observe(document.body, { childList: true, subtree: true });
});