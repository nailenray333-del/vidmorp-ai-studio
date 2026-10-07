const videoInput = document.getElementById("videoInput");
const imageInput = document.getElementById("imageInput");
const videoPreview = document.getElementById("videoPreview");
const imagePreview = document.getElementById("imagePreview");
const generateBtn = document.getElementById("generateBtn");
const status = document.getElementById("status");
const result = document.getElementById("result");

// Video preview
videoInput.addEventListener("change", function () {
  const file = this.files[0];

  if (!file) return;

  const videoURL = URL.createObjectURL(file);

  videoPreview.innerHTML = `
    <video controls playsinline>
      <source src="${videoURL}" type="${file.type}">
      Your browser does not support video playback.
    </video>
  `;
});

// Reference image preview
imageInput.addEventListener("change", function () {
  const file = this.files[0];

  if (!file) return;

  const imageURL = URL.createObjectURL(file);

  imagePreview.innerHTML = `
    <img src="${imageURL}" alt="Reference Image">
  `;
});

// Generate button
generateBtn.addEventListener("click", function () {

  const videoFile = videoInput.files[0];
  const prompt = document.getElementById("prompt").value.trim();

  if (!videoFile) {
    status.textContent = "Please upload a video first.";
    return;
  }

  if (!prompt) {
    status.textContent = "Please describe what you want to change.";
    return;
  }

  const selectedOptions = [];

  document
    .querySelectorAll(".options input[type='checkbox']:checked")
    .forEach(function (checkbox) {
      selectedOptions.push(checkbox.value);
    });

  status.textContent = "Preparing your AI video request...";

  result.innerHTML = `
    <div>
      <h3>Request Ready ✅</h3>
      <p>
        Selected changes:
        ${
          selectedOptions.length
            ? selectedOptions.join(", ")
            : "Custom transformation"
        }
      </p>
      <p>Your AI processing system will be connected here.</p>
    </div>
  `;

  setTimeout(function () {
    status.textContent =
      "Frontend is working. AI video generation will be connected in the next step.";
  }, 1000);
});
