import dayjs from "dayjs"

const form = document.querySelector("form");
const selectDate = document.getElementById("date");

// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data minima para a data atual
selectDate.value = inputToday;
selectDate.min = inputToday;


form.onsubmit = (event) => {
    event.preventDefault();

    console.log("ENVIADO!");
}