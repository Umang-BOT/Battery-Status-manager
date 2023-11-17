const batterylevel = document.querySelector(".batterylevel");
const batterycharging = document.querySelector(".batterycharging");
const lastcharge = document.querySelector(".Time");

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      function updateall() {
        updateinfo();
        pop_msg();
        change();
      }
      updateall();
      battery.addEventListener("chargingchange", () => {
        updateinfo();
      });
      battery.addEventListener("chargingtimechange", () => {
        pop_msg();
      });
      battery.addEventListener("lastcharge", () => {
        change();
      });
      function updateinfo() {
        const isCharge = battery.charging ? "Yes" : "No";
        batterycharging.innerHTML = isCharge;
      }
      function pop_msg() {
        const val = battery.level;
        console.log(battery.level);
        if (val < 0.3) batterylevel.innerHTML = "Connect with the charger!";
        else batterylevel.innerHTML = val * 100 + "%";
      }
      function change() {
        const currentTimestamp = new Date().toLocaleTimeString();
        lastcharge.innerHTML = currentTimestamp;
      }
    });
  }
};

battery();
