function changeColor(x)
{
    x.style.backgroundColor = "#07ffbc";//"#82c29b";
}

function resetColor(x)
{
    x.style.backgroundColor = "#d5fff0";
}

const isWeekend = day => {
      return day % 7 == 6 || day % 7 == 0;
}
const getDayName = day => {
      const date  = new Date(Date.UTC(2020, d.getMonth(), day));
      return new Intl.DateTimeFormat('default', { weekday: "long"}).format(date);
}
            
let day;

var textdiv = "";

var d = new Date();
var month = ["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"];
var NbMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
var weekday = ["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"];
var n = d.getDate() + ", " + weekday[d.getDay()] + "/ " + month[d.getMonth()] + "/ " + d.getFullYear();
var number = NbMonth[d.getMonth()];

document.getElementById("infop").innerHTML = n;

for(day=1; day<=number; day=day+1) {
    const weekend = isWeekend(day);
    let name = "";
    if(day <= 7) {
            const dayName = getDayName(day);
            name = '<div class="name">' + dayName + '</div>';
    }
     const dayName = getDayName(day);
     textdiv = textdiv + '<div class="day ${weekend ? "weekend" : ""}" onmouseover = "changeColor(this)" onmouseout = "resetColor(this)" >' + name + day + '</div>';
                           
}
            
document.getElementById("calendarDays").innerHTML = textdiv;