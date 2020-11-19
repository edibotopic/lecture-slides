var path2 = document.querySelector(".draw");
var length = path2.getTotalLength();
console.log(length);

path2.style.strokeDasharray = length + ' ' + length;
path2.style.strokeDashoffset = length;