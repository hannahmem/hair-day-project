import { openingHours } from "../../utils/opening-hours.js"
import { schedulesDay } from "../schedules/load.js";
import dayjs from "dayjs"
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
    // Limpa a lista de horarios
    hours.innerHTML = "" ;
    const opening = openingHours.map(hour => {
        // Recupera somente a hora
        const [scheduleHour] = hour.split(":");
        // desestruturacao para aparecer somente os numeros
        // console.log(scheduleHour)

        // Adiciona a hora na data e verifica se esta no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs()); 
        // console.log(scheduleHour, isHourPast); // checa se o horario ta no passado
        
        return {
            hour,
            available: isHourPast
        };
    });

    // Renderiza os horarios
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li");

        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");

        li.textContent = hour;
        
        if (hour === "9:00") {
            hourHeaderAdd("Manhã");
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde");
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite");
        }

        hours.append(li);
    
        // Adiciona o evento de clique nos horarios disponiveis
        hoursClick();
    });
};

function hourHeaderAdd(title) {
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header);
}