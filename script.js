const btn = document.getElementById("btn");
btn.addEventListener("click", notification);

function notification() {
  switch (Notification.permission) {
    case "default":
      Notification.requestPermission();
      break;
    case "granted":
      new Notification("Code Tips");
      break;
    case "denied":
      alert("通知が拒否されています");
      break;
  }
}
