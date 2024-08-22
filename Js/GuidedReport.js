document.getElementById('goToPage').addEventListener('click', function() {
  window.location.href = 'benefitPage.html';
});
// This Is The Coding Behind The Attachments
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
}

function handleSubmit(event) {
  event.preventDefault();

  uploadFiles();
}

function uploadFiles() {
  const url = 'https://httpbin.org/post';
  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();

  const data = new FormData(form);

  xhr.open(method, url);
  xhr.send(data);
}

  const statusMessage = document.getElementById('statusMessage');
  const submitButton = document.querySelector('button');
  const fileInput = document.querySelector('input');

  function updateStatusMessage(text) {
  statusMessage.textContent = text;
}

function assertFilesValid(fileList) {
  const allowedTypes = ['image/webp', 'image/jpeg', 'image/png'];

  for (const file of fileList) {
    const { name: fileName } = file;

    if (!allowedTypes.includes(file.type)) {
      throw new Error(`Sorry File "${fileName}" could not be uploaded. Only images with the following types are allowed: WEBP, JPEG, PNG.`);
    }
  }
}

function handleInputChange() {
  try {
    assertFilesValid(fileInput.files);
  } catch (err) {
    updateStatusMessage(err.message);
    return;
  }

  submitButton.disabled = false;
}

function resetFormState() {
    submitButton.disabled = true;
    updateStatusMessage(`Sorry Nothing's Uploaded`)
  }

  function handleInputChange(event) {
    resetFormState();
  
    function assertFilesValid(fileList) {
        const allowedTypes = ['webp', 'jpeg', 'png', 'pdf', 'jpg', 'mp4', 'mp3'];
        const sizeLimit = 1000000 * 1000000; // 1 gigabyte
      
        for (const file of fileList) {
          const { name: fileName, size: fileSize } = file;
      
          if (!allowedTypes.includes(file.type)) {
            throw new Error(` File "${fileName}" could not be uploaded. Only images with the following types are allowed: WEBP, JPEG, PNG.`);
          }
      
          // ↓ the new condition ↓s
          if (fileSize > sizeLimit) {
            throw new Error(` File "${fileName}" could not be uploaded. Only images up to 1 MB are allowed.`);
          }

          <progress value="0" max="100"></progress>
        }
      }
  }

fileInput.addEventListener('change', handleInputChange);
  