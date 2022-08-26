
const alertBanner = document.getElementById("alert");

 // Close Alert banner //

 alertBanner.innerHTML = `
 <div class="alert-banner">
 <p><strong>Alert:</strong> You have unread messages</p>
 <p class="alert-banner-close">x</p>
 </div>
 `;

 // Close Alert Banner
 alertBanner.addEventListener('click', (e)=> {
   const element = e.target;
   if (element.classList.contains('alert-banner-close')) {
     alertBanner.style.display = "none";
   }
 });


// Messaging Section //

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");


send.addEventListener('click', () => {
if (user.value === "" && message.value === "") {
alert("Please fill out user and message fields before sending");
} else if (user.value === "" ) {
alert("Please fill out user field before sending");
} else if (message.value === "" ) {
alert("Please fill out message field before sending");
} else {
alert(`Message successfully sent to: ${user.value}`);
}
});
