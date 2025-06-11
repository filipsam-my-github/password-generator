function setCheckboxesToChecked() {
  let checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
}

export function setHTMLToDeft() {
  setCheckboxesToChecked();
}
