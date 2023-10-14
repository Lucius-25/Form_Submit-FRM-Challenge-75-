const app   = document.querySelector("#app")
const showBtn = app.querySelector("#showBtn")
const confirmBtn = app.querySelector("#confirmBtn")
const finalCard = app.querySelector("#finalCard")
const container = app.querySelector("#container")


showBtn.addEventListener("click", (event) => {
    event.preventDefault()
    container.classList.add("d-none")
    finalCard.classList.toggle("d-none")
})

confirmBtn.addEventListener("click", () => {
    container.classList.toggle("d-none")
    finalCard.classList.toggle("d-none")
})