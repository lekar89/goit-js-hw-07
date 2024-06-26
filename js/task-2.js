const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");
gallery.style.display = "flex";
gallery.style.flexDirection = "row";
gallery.style.flexWrap = "wrap";
gallery.style.columnGap = "24px";
gallery.style.rowGap = "48px";
gallery.style.padding = "0";
gallery.style.margin = "auto";
gallery.style.width = "1128px";
gallery.style.listStyle = "none";
// original solution
// const elements = [];
// images.forEach(image => {
//   const item = document.createElement("li");
//   const picture = document.createElement("img");
//   picture.src = image.url;
//   picture.alt = image.alt;
//   picture.setAttribute("width", 360);
//   picture.setAttribute("height", 300);
//   picture.style.objectFit = "cover";
//   item.append(picture);
//   elements.push(item);
// })
// gallery.append(...elements);

// new solution
const markup = images
  .map(
    (image) =>
      `<li><img width="360" height="300" src=${image.url} alt=${image.alt} style="object-fit: cover"></li>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", markup);
