document
  .querySelector('.btn-primary[href="#"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("modal").style.display = "flex";
  });

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

// Закриття модалки по кліку за межами
window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
