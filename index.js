const input = document.querySelector("#search");
const navMenu = document.querySelector("[data-type='nav-menu']");
const details = Array.from(navMenu.querySelectorAll("details"));
const lis = Array.from(navMenu.querySelectorAll("details li")) ;
const liToggle = Array.from(navMenu.querySelectorAll("li .toggle"))

input.addEventListener("input", function() {
    const str = this.value;

    if(str) {
        filterData(str)
    } else {
        showAllItems()
    }
})

function showAllItems() {
    lis.forEach(li => li.classList.remove('hide'))
}

function filterData(str) {
    showAllItems()
    liToggle.forEach( liToggle => {
        const details = liToggle.querySelector("details");
        const summary = liToggle.querySelector("summary");

        if (summary.textContent.toLowerCase().includes(str.toLowerCase())) {
            details.setAttribute("open", "")
        }
    })
}