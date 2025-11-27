const popup = document.getElementById("popup");
const detailsBtn = document.getElementById("detailsBtn");
const closePopup = document.getElementById("closePopup");

// Show popup
detailsBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

// Close popup
closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Close popup when clicking outside the box
window.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.add("hidden");
});

// Download bio text
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
  window.location.href = "https://drive.google.com/drive/folders/1ZR1_NI59wmyqACJlMeghOdhZVUUbizO5?usp=sharing";
});
  const url = URL.createObjectURL(file);

  const a = document.createElement("a");
  a.href = url;
  a.download = "mahir_ibon_bio.txt";
  a.click();

  URL.revokeObjectURL(url);
});
