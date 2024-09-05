function startCountdown() {
    const targetDate = document.getElementById('target-date').value;
    if (!targetDate) {
        alert("Please select a valid date and time.");
        return;
    }
    
    const countDownDate = new Date(targetDate).getTime();
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "EXPIRED";
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}
