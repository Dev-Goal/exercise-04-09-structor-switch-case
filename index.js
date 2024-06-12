var btnCheck = document.getElementById("btn1");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let month = document.getElementById("select1").value;
  let message = "";
  switch (month) {
    case "Tháng 1":
    case "Tháng 3":
    case "Tháng 5":
    case "Tháng 7":
    case "Tháng 8":
    case "Tháng 10":
    case "Tháng 12":
      message = month + " có 31 ngày";
      break;
    case "Tháng 4":
    case "Tháng 6":
    case "Tháng 9":
    case "Tháng 11":
      message = month + " có 30 ngày";
      break;
    case "Tháng 2":
      message = month + " có 28 hoặc 29 ngày";
      break;
    default:
      document.getElementById("result").innerHTML =
        "Vui lòng chọn số tháng phù hợp";
  }

  document.getElementById("result").innerHTML = message;
}
