/**
 * Determines whether PowerFitt is currently open and what the next opening/closing time is.
 * Schedule:
 * Mon-Fri: 05:30 - 22:30
 * Sat: 08:00 - 16:00
 * Sun: 09:00 - 12:00
 */
export function getGymOpenStatus() {
  const now = new Date();
  
  // Get time in America/Sao_Paulo timezone
  const brazilTimeStr = now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
  const brazilDate = new Date(brazilTimeStr);
  
  const day = brazilDate.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
  const hours = brazilDate.getHours();
  const minutes = brazilDate.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  // Day schedules in minutes from midnight
  // Mon-Fri: 5:30 (330) to 22:30 (1350)
  // Sat: 8:00 (480) to 16:00 (960)
  // Sun: 9:00 (540) to 12:00 (720)

  let isOpen = false;
  let statusText = "";
  let detailText = "";

  if (day >= 1 && day <= 5) {
    // Weekdays
    if (currentMinutes >= 330 && currentMinutes < 1350) {
      isOpen = true;
      statusText = "Aberto Agora";
      detailText = "Fecha às 22:30";
    } else {
      isOpen = false;
      statusText = "Fechado no Momento";
      detailText = currentMinutes < 330 ? "Abre hoje às 05:30" : "Abre amanhã às 05:30";
    }
  } else if (day === 6) {
    // Saturday
    if (currentMinutes >= 480 && currentMinutes < 960) {
      isOpen = true;
      statusText = "Aberto Agora";
      detailText = "Fecha às 16:00";
    } else {
      isOpen = false;
      statusText = "Fechado no Momento";
      detailText = currentMinutes < 480 ? "Abre hoje às 08:00" : "Abre domingo às 09:00";
    }
  } else if (day === 0) {
    // Sunday
    if (currentMinutes >= 540 && currentMinutes < 720) {
      isOpen = true;
      statusText = "Aberto Agora";
      detailText = "Fecha às 12:00";
    } else {
      isOpen = false;
      statusText = "Fechado no Momento";
      detailText = currentMinutes < 540 ? "Abre hoje às 09:00" : "Abre segunda às 05:30";
    }
  }

  return { isOpen, statusText, detailText };
}
