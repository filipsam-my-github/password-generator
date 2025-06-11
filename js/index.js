import * as upon_loading from "./upon_loading.js";
import * as passwords from "./passwords.js";

let generatePasswordBtn = document.getElementById("generate-password-btn-el");
let password_displays = document.querySelectorAll(
  ".password-entries .password-background p"
);
let checkboxes = upon_loading.checkboxesDictionary();

upon_loading.setHTMLToDeft();

function writeTextOnPasswordDisplays(texts) {
  for (let i = 0; i < texts.length; i++) {
    password_displays[i].textContent = texts[i];
  }
}

generatePasswordBtn.addEventListener("click", function () {
  writeTextOnPasswordDisplays([
    passwords.generatePassword(
      checkboxes["uppercase"].checked,
      checkboxes["lowercase"].checked,
      checkboxes["numbers"].checked,
      checkboxes["symbols"].checked,
      10
    ),
    passwords.generatePassword(),
  ]);
});
