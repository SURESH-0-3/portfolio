const form = document.querySelector("#myForm");
async function handleSubmit(e) {
  e.preventDefault();
  console.log('here');
  const FORMPREE= 'https://formspree.io/f/manwdjgw';

  const status = document.querySelector("#my-form-status");
  const data = new FormData(e.target);
  fetch(FORMPREE, {
    method: 'POST',
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    console.log("sent successfully");
    
    form.reset();
      status.type='text';
    status.value = "Thanks for your submission!";
  }).catch(error => {
    console.log("sent un-successfully");
    status.type='text';
    status.value = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
// background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);