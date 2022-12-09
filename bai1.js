inputvatly= prompt("nhập điểm môn Vật Lý");
inputhoahoc = prompt("nhập điểm môn Hóa Học");
inputsinhhoc= prompt("nhập điểm môn Sinh Học");
let vatly = parseInt(inputvatly);
let hoahoc = parseInt(inputhoahoc);
let sinhhoc = parseInt(inputsinhhoc);
document.write(" tổng điểm "+(vatly + hoahoc + sinhhoc) );
document.write("điểm trung bình"+(vatly + hoahoc + sinhhoc)/3);

