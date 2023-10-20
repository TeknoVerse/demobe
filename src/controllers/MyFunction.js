export const handleLocalTime = (time) => {
    const timeTolocalString = new Date(time).toLocaleTimeString()

    // Membagi waktu menjadi jam, menit, detik, dan AM/PM
      const timeParts = timeTolocalString.split(/:| /);
  
      let hours24 = parseInt(timeParts[0]);
      const minutes = parseInt(timeParts[1]);
      const seconds = parseInt(timeParts[2]);
      const ampm = timeParts[3].toUpperCase();
  
      // Mengonversi waktu ke format 24 jam
      if (ampm === "PM" && hours24 < 12) {
        hours24 += 12;
      } else if (ampm === "AM" && hours24 === 12) {
        hours24 = 0;
      }

      return  ( `${hours24.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
}




