const img = document.querySelector(".person-image");
const author = document.querySelector("#person-author");
const job = document.querySelector("#job");
const info = document.querySelector(".info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const data = [
  {
    name: "a1",
    job: "Front-end Developer",
    img: "./img-1.jpg",
    info:
      "my experience with this company is fucking awesome i love the service provide by them i also want to coperate relatiosn ship wiyh this company as bettteraqs possible thank nyou so much",
  },
  {
    name: "b1",
    job: "HTR",
    img: "./img-2.jpg",
    info:
      "my experience with this company is fucking awesome i love the service provide by them i also want to coperate relatiosn ship wiyh this company as bettteraqs possible thank nyou so much",
  },
  {
    name: "c3",
    job: "junior Developer",
    img: "./img-3.jpg",
    info:
      "my experience with this company is fucking awesome i love the service provide by them i also want to coperate relatiosn ship wiyh this company as bettteraqs possible thank nyou so much",
  },
];
let personCount = 0;
window.addEventListener("DOMContentLoaded", (e) => {
  showPerson();
});
function showPerson() {
  let num = data[personCount];
  console.log(num);
  img.setAttribute("src", num.img);
  job.textContent = num.job;
  author.textContent = num.name;
  info.textContent = num.info;
}
prevBtn.addEventListener("click", (e) => {
  if (personCount === 0) {
    personCount = data.length;
  }
  console.log(personCount);
  personCount--;
  showPerson();
});
nextBtn.addEventListener("click", (e) => {
  if (personCount === 2) {
    personCount = -1;
  }
  personCount++;
  showPerson();
});
