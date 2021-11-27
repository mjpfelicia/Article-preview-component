const elementosIcons = document.querySelector(".dadosdocliente-svg");

elementosIcons.addEventListener("click", (evento) => {
    console.log({ elementosIcons });
    const icons = document.querySelector(".icons");
    if (icons.style.display === 'flex') {
        return icons.style.display = 'none';
    } else {
        icons.style.display = 'flex';
    }

})