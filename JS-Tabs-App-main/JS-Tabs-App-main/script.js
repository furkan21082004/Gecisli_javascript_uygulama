const history_button = document.getElementById("btn_history");
const vision_button = document.getElementById("btn_vision");
const goals_button = document.getElementById("btn_goals");
const image = document.getElementById("image");
const header = document.getElementById("myheader");
const text = document.getElementById("mytext");

function vision_click()
{

image.src = "images/image2.jpg";
header.innerHTML="Vision";
text.innerHTML="Vision Text";

history_button.classList.remove("selected");
goals_button.classList.remove("selected");
vision_button.classList.add("selected");
}

vision_button.addEventListener("click",vision_click);

function goals_click()
{

image.src = "images/image3.jpg";
header.innerHTML="Goals";
text.innerHTML="Goals Text";

history_button.classList.remove("selected");
vision_button.classList.remove("selected");
goals_button.classList.add("selected");
}

goals_button.addEventListener("click",goals_click);

function history_click()
{

image.src = "images/image1.jpg";
header.innerHTML="History";
text.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum obcaecati neque delectus saepe eum quisquam, doloribus facilis sed esse eligendi aliquam quaerat quae pariatur id quos sint. Quia fugit voluptatem atque ad, a reiciendis doloribus quaerat sunt voluptate enim?";

goals_button.classList.remove("selected");
vision_button.classList.remove("selected");
history_button.classList.add("selected");
}

history_button.addEventListener("click",history_click);