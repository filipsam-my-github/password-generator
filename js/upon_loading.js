function setCheckboxesToChecked() {
  let checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
}

export function checkboxesDictionary() {
  let checkboxes_dic = {};

  let checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((checkbox) => {
    checkboxes_dic[checkbox.id] = checkbox;
  });

  return checkboxes_dic;
}

export function setHTMLToDeft() {
  setCheckboxesToChecked();
}
