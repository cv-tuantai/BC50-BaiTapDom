// Bài 1
var btnSalary = document.getElementById('btnSalary');
btnSalary.onclick = function () {
    // input: Dom tới các thẻ input lấy thông tin
    var salary1Day = document.getElementById('salary1Day').value;
    var days = document.getElementById('days').value;
    // output: kiểu number
    var totalSalary = 0;
    // process: Tổng lương = lương 1 ngày x số ngày làm
    totalSalary = salary1Day * days;
    // print result:
    var result = document.getElementById('txtSalary');
    result.innerHTML = 'Tổng lương là: '+ totalSalary.toLocaleString() + ' đồng.';  
};

// Bài 2
var btnTB = document.getElementById('btnTB');
btnTB.onclick = function(){
    // input: Dom tới các thẻ input lấy thông tin
    var num1 = document.getElementById('num1').value *1;
    var num2 = document.getElementById('num2').value *1;
    var num3 = document.getElementById('num3').value *1;
    var num4 = document.getElementById('num4').value *1;
    var num5 = document.getElementById('num5').value *1;
    // output: kiểu number
    var average = 0;
    // process: Bằng tổng 5 số người dùng nhập chia cho 5
    average = (num1 + num2 + num3 + num4 + num5) / 5;
    // print result
    var txtTB = document.getElementById('txtTB');
    txtTB.innerHTML = 'Giá trị trung bình là: ' + average;
};

// Bài 3
var btnCurrency = document.getElementById('btnCurrency');
btnCurrency.onclick = function(){
    // input: Dom tới các thẻ input lấy thông tin
    var usd = document.getElementById('usd').value;
    // output: kiểu number
    var exchange = 0;
    // process: Bằng số tiền USD người dùng nhập x 23500
    exchange = usd * 23500;
    // print result:
    var txtCurrency = document.getElementById('txtCurrency');
    txtCurrency.innerHTML = 'Quy đổi thành ' + exchange.toLocaleString() + ' đồng.';
};

// Bài 4
var btnCal = document.getElementById('btnCal');
btnCal.onclick = function(){
    // input: Dom tới các thẻ input lấy thông tin, kiểu number
    var width = document.getElementById('width').value *1;
    var height = document.getElementById('height').value *1;
    // output: kiểu number
    var perimeter = 0;
    var acreage = 0;
    // process: Diện tích = dài x rộng, Chu vi = (dài + rộng) x 2
    perimeter = (width + height) * 2;
    acreage = width * height;
    // print result
    var txtCal = document.getElementById('txtCal');
    txtCal.innerHTML = 'Chu vi là: ' + perimeter + ', Diện tích là: ' + acreage;
};

// Bài 5
var btnSum = document.getElementById('btnSum');
btnSum.onclick = function(){
    // input: Dom tới các thẻ input lấy thông tin
    var number = document.getElementById('number').value;
    // output: kiểu number
    var sum = 0;
    // process: hàng chục dùng Math.floor(số được nhập chia cho 10) để lấy phần nguyên, hàng đơn vị = số được nhập chia 10 lấy dư
    var tens = Math.floor(number / 10);
    var units = number % 10;
    sum = tens + units;
    // print result
    var txtSum = document.getElementById('txtSum');
    txtSum.innerHTML = 'Tổng 2 ký số là: ' + sum;
};