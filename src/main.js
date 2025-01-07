const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// ナビゲーションバーをトグル
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

// モーダルを表示
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

// モーダルを閉じる
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// モーダルの外側をクリックしてモーダルを閉じる
window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});
