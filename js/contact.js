var contactBox = document.getElementsByClassName("contact-form")[0];
var contactSetting = contactBox.style.display;
var form = document.getElementsByTagName("form")[0];

function showContent() {
  contactSetting = "block";
  contactBox.style.display = contactSetting;
}

function Cancel() {
  contactSetting = "none";
  contactBox.style.display = contactSetting;
}
