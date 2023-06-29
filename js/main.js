/* Start Scroller */

let scroll = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", ()=>{
  let scrollTop = document.documentElement.scrollTop;
	scroll.style.width = `${((scrollTop / height) * 100)}%`;
})

/* End Scroller */

/* Start Toggle-Menu */
const toggleMenu = document.querySelector("#toggle-menu");
const links = document.querySelector("#links");

toggleMenu.addEventListener("click", () => {
  links.classList.toggle("active");
})
/* End Toggle-Menu */