
  document.addEventListener("DOMContentLoaded", () => {
    const marker = document.querySelector(".marker");

    marker.addEventListener("click", () => {
      const info = marker.getAttribute("data-info");
      const dialog = document.getElementById("dialog");
      const content = document.getElementById("dialog-content");
      content.textContent = info;
      dialog.style.display = "block";
    });
  });

  function closeDialog() {
    document.getElementById("dialog").style.display = "none";
  }



