const listItem = document.querySelectorAll("#categories > .item");
console.log("Number of categories: ", listItem.length);
const itemTitles = document.querySelectorAll("#categories > .item > h2");
const nestedUlElements = document.querySelectorAll("#categories > .item > ul");
for (let i = 0; i <= listItem.length - 1; i += 1) {
  console.log("Category: ", itemTitles[i].textContent);
  const liElementsInNestedUl = nestedUlElements[i].querySelectorAll("li");
  console.log("Elements: ", liElementsInNestedUl.length);
}
