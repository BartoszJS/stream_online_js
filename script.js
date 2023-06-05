const formContainer = document.getElementById("form-container");
const dataContainer = document.getElementById("data-container");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const provinceInput = document.getElementById("province");
const interestsInput = document.getElementById("interests");
const consentCheckbox = document.getElementById("consent");
const saveButton = document.getElementById("save-button");
const editButton = document.getElementById("edit-button");
const displayFirstName = document.getElementById("display-first-name");
const displayLastName = document.getElementById("display-last-name");
const displayProvince = document.getElementById("display-province");
const displayInterests = document.getElementById("display-interests");
const displayConsent = document.getElementById("display-consent");
const storedFirstName = localStorage.getItem("firstName");
const storedLastName = localStorage.getItem("lastName");
const storedProvince = localStorage.getItem("province");
const storedInterests = localStorage.getItem("interests");
const storedConsent = localStorage.getItem("consent");

// Sprawdzenie, czy dane są już zapisane i wyświetlenie odpowiedniego widoku
if (
  storedFirstName &&
  storedLastName &&
  storedProvince &&
  storedInterests &&
  storedConsent
) {
  firstNameInput.value = storedFirstName;
  lastNameInput.value = storedLastName;
  provinceInput.value = storedProvince;
  interestsInput.value = storedInterests;
  consentCheckbox.checked = storedConsent === "true";

  displayFirstName.textContent = storedFirstName;
  displayLastName.textContent = storedLastName;
  displayProvince.textContent = storedProvince;
  displayInterests.textContent = storedInterests;
  displayConsent.textContent = storedConsent === "true" ? "Tak" : "Nie";

  formContainer.style.display = "none";
  dataContainer.style.display = "block";
} else {
  formContainer.style.display = "block";
  dataContainer.style.display = "none";
}

// Funkcja wywoływana po zapisaniu danych
function saveData(event) {
  event.preventDefault();

  // Walidacja formularza
  if (
    firstNameInput.value.trim() === "" ||
    lastNameInput.value.trim() === "" ||
    provinceInput.value === "" ||
    interestsInput.value.trim() === ""
  ) {
    alert("Proszę wypełnić wszystkie pola formularza.");
    return;
  }

  if (!consentCheckbox.checked) {
    alert("Proszę zaakceptować warunki korzystania z serwisu.");
    return;
  }

  // Zapisanie danych w pamięci przeglądarki
  localStorage.setItem("firstName", firstNameInput.value);
  localStorage.setItem("lastName", lastNameInput.value);
  localStorage.setItem("province", provinceInput.value);
  localStorage.setItem("interests", interestsInput.value);
  localStorage.setItem("consent", consentCheckbox.checked);

  // Wyświetlenie danych zamiast formularza
  displayFirstName.textContent = firstNameInput.value;
  displayLastName.textContent = lastNameInput.value;
  displayProvince.textContent = provinceInput.value;
  displayInterests.textContent = interestsInput.value;
  displayConsent.textContent = consentCheckbox.checked ? "Tak" : "Nie";

  formContainer.style.display = "none";
  dataContainer.style.display = "block";
}

// Funkcja wywoływana po kliknięciu przycisku "Zmień"
function editData() {
  // Aktualizacja danych w localStorage na podstawie wprowadzonych wartości w formularzu
  localStorage.setItem("firstName", firstNameInput.value);
  localStorage.setItem("lastName", lastNameInput.value);
  localStorage.setItem("province", provinceInput.value);
  localStorage.setItem("interests", interestsInput.value);
  localStorage.setItem("consent", consentCheckbox.checked);

  // Przywrócenie formularza z wypełnionymi danymi z pamięci lokalnej
  firstNameInput.value = localStorage.getItem("firstName");
  lastNameInput.value = localStorage.getItem("lastName");
  provinceInput.value = localStorage.getItem("province");
  interestsInput.value = localStorage.getItem("interests");
  consentCheckbox.checked = localStorage.getItem("consent") === "true";

  formContainer.style.display = "block";
  dataContainer.style.display = "none";
}

// Dodanie obsługi zdarzeń
saveButton.addEventListener("click", saveData);
editButton.addEventListener("click", editData);

function initializeFormData() {
  if (
    storedFirstName &&
    storedLastName &&
    storedProvince &&
    storedInterests &&
    storedConsent
  ) {
    displayFirstName.textContent = storedFirstName;
    displayLastName.textContent = storedLastName;
    displayProvince.textContent = storedProvince;
    displayInterests.textContent = storedInterests;
    displayConsent.textContent = storedConsent === "true" ? "Tak" : "Nie";

    formContainer.style.display = "none";
    dataContainer.style.display = "block";
  } else {
    formContainer.style.display = "block";
    dataContainer.style.display = "none";
  }
}
initializeFormData();

const video = document.getElementById("my-video");
const videoUrlInput = document.getElementById("video-url");
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const seekButton = document.getElementById("seek-btn");

// Obsługa kliknięcia przycisku "Play"
playButton.addEventListener("click", () => {
  video.play();
});

// Obsługa kliknięcia przycisku "Pause"
pauseButton.addEventListener("click", () => {
  video.pause();
});

// Obsługa kliknięcia przycisku "Przewiń o 5 sekund"
seekButton.addEventListener("click", () => {
  video.currentTime += 5;
});

// Obsługa zmiany wartości pola tekstowego z ścieżką do wideo
videoUrlInput.addEventListener("change", () => {
  const videoUrl = videoUrlInput.value;
  if (videoUrl) {
    video.src = videoUrl;
  }
});
