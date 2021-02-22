let people = [
  {
    name: "Jessica",
    image: `img1.jpg`,
    text: `I am happy with the services. I will recommand to everyone`,
  },
  {
    name: `Emily`,
    image: `img2.jpg`,
    text: `Really nice service. :P, i am so happy`,
  },
  {
    name: `Jack`,
    image: `img3.jpg`,
    text: `I was not expecting this to be so good!`,
  },
  {
    name: `Xin Po`,
    image: `img4.jpg`,
    text: `I love it!`,
  },
];
let counter = 0;

const testiName = document.querySelector(".testimonial-name");
const testiText = document.querySelector(".testimonial-text");
const testiRating = document.querySelector(".testimonial-rating");
const testiImg = document.querySelector(".testimonial-img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".previous");

//Default
testiName.innerHTML = people[0].name;
testiText.innerHTML = people[0].text;
testiImg.style.backgroundImage = `url(/Images/${people[0].image})`;

nextBtn.addEventListener("click", () => {
  counter += 1;
  if (counter > people.length - 1) {
    counter = 0;
  }
  testiName.innerHTML = people[counter].name;
  testiText.innerHTML = people[counter].text;
  testiImg.style.backgroundImage = `url(/Images/${people[counter].image})`;
});
prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = 3;
  }
  testiName.innerHTML = people[counter].name;
  testiText.innerHTML = people[counter].text;
  testiImg.style.backgroundImage = `url(/Images/${people[counter].image})`;
});
