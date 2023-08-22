document.addEventListener("DOMContentLoaded", function () {
    const Redes = document.querySelectorAll(".Redes li");
    const RedesInfo = document.querySelectorAll(".Informacion-basica");

    Redes.forEach((Redes) => {
        Redes.addEventListener("click", () => {
            const target = Redes.getAttribute("data-target");
            RedesInfo.forEach((info) => {
                info.style.display = "none";
            });
            document.getElementById(target).style.display = "block";
        });
    });
});
