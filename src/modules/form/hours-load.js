import { openingHours } from "../../utils/opening-hours.js"
import { schedulesDay } from "../schedules/load.js";
import dayjs from "dayjs"


export function hoursLoad({ date }) {
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

    console.log(opening)
}