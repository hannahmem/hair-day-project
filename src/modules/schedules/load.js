import { hoursLoad } from "../form/hours-load.js";

// seleciona o input de data
const selectedDate = document.getElementById("date");

export function schedulesDay() {
    // Buscar na API os agendamentos para carregar do lado direito da tela.

    // Obtem a data do input
    const date = selectedDate.value


    // Rendiriza as horas disponiveis
    hoursLoad({ date });
    // Horarios disponiveis (horario futuro + nao agendado) do lado esquerdo (form)
};