function processSalariedToHourlyConvert() {

    const grabInfo = document.getElementById("user-salary-input");
    let SalariedToWeeklyPay = grabInfo.value / 52;
    const SalariedToWeeklyRoundedUp = Math.ceil(SalariedToWeeklyPay);
    const WeeklyToHourly = SalariedToWeeklyRoundedUp / 40;
    alert("Your hourly pay is " + WeeklyToHourly);
}