import Hikes from "hiking-partial-solution.js";
//on load grab the array and insert it into the page
const myHike = new Hikes("hikeListId");
window.addEventListener("load", () => {
  myHike.showHikeList();
});
// myHike.hikeList;
