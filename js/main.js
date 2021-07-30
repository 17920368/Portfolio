const $form = document.getElementById("form");
$form.addEventListener("submit", handleSumit);

async function handleSumit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert("Gracias por contactarme. ");
  }
}
