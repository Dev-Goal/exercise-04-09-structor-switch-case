var btnCheck = document.getElementById("btn1");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let month = document.getElementById("select1").value;
  // let message = '';
  switch (month) {
    case document.getElementById("option1").value:
      document.getElementById("result").innerHTML = "Tháng 1 có 31 ngày";
      break;
    case document.getElementById("option2").value:
      document.getElementById("result").innerHTML = "Tháng 2 có 30 ngày";
      break;
    case document.getElementById("option3").value:
      document.getElementById("result").innerHTML = "Tháng 3 có 31 ngày";
      break;
    case document.getElementById("option4").value:
      document.getElementById("result").innerHTML = "Tháng 4 có 30 ngày";
      break;
    case document.getElementById("option5").value:
      document.getElementById("result").innerHTML = "Tháng 5 có 31 ngày";
      break;
    case document.getElementById("option6").value:
      document.getElementById("result").innerHTML = "Tháng 6 có 30 ngày";
      break;
    case document.getElementById("option7").value:
      document.getElementById("result").innerHTML = "Tháng 7 có 31 ngày";
      break;
    case document.getElementById("option8").value:
      document.getElementById("result").innerHTML = "Tháng 8 có 31 ngày";
      break;
    case document.getElementById("option9").value:
      document.getElementById("result").innerHTML = "Tháng 9 có 30 ngày";
      break;
    case document.getElementById("option10").value:
      document.getElementById("result").innerHTML = "Tháng 10 có 31 ngày";
      break;
    case document.getElementById("option11").value:
      document.getElementById("result").innerHTML = "Tháng 11 có 30 ngày";
      break;
    case document.getElementById("option12").value:
      document.getElementById("result").innerHTML = "Tháng 12 có 31 ngày";
      break;
    default:
      document.getElementById("result").innerHTML =
        "Vui lòng chọn số tháng phù hợp";
  }
}
