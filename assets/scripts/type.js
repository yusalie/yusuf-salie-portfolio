let i = 0;
let j = 0;
let h1 = "Yusuf Salie";
let h2 = "Aspiring back-end developer";
let txtSpd = 50;
let txtpd2 = 1200;

function writeTxt() {
    if (i < h1.length) {
        document.getElementById("first-heading").innerHTML += h1.charAt(i);
        i++;
        setTimeout(writeTxt, txtSpd);
    }
    if (j < h2.length) {
        document.getElementById("second-heading").innerHTML += h2.charAt(j);
        j++;
        setTimeout(writeTxt, txtpd2);
    }
}