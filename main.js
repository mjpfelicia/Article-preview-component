const elementosIcons = document.querySelectorAll(".dadosdocliente-svg");

elementosIcons
    .forEach(element => element
        .addEventListener("click", (evento) => {
            const icons = document.querySelector(".icons");
            if (icons.style.display === 'flex') {
                return icons.style.display = 'none';
            } else {
                icons.style.display = 'flex';
            }

        }));