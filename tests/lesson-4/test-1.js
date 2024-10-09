// 1. Khởi động Tàu Vũ trụ K10
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K10";
const crew = ["Khải", "Tú", "Thơm", "Thư", "Tùng", "Ngân"];

function launchShip(inputCrew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${inputCrew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K10!`;
}

console.log(launchShip(crew));
console.log("----------");

// 2. Du hành đến hành tinh bí ẩn
let speed = 1000;   //  km/h
let time = 24;      //  h
let distance = 0;   //  km

function calculateDistance(inputSpeed, inputTime) {
    return inputSpeed * inputTime;
}

distance = calculateDistance(speed, time);
console.log(`Khoảng cách đến hành tinh bí ẩn là ${distance} km`);
console.log("----------");

// 3. Hành tinh kỳ lạ
let decimalTime = 120;      //  second
let hexadecimalTime = 0;

function convertTimeToHex(inputDecimalTime) {
    return inputDecimalTime.toString(16);
}

hexadecimalTime = convertTimeToHex(decimalTime);
console.log(`Thời gian ${decimalTime} giây ở hệ thập phân chuyển sang hệ thập lục phân có giá trị là ${hexadecimalTime}`);
console.log("----------");

// 4. Khám phá kho báu
let code = "K10 Challenge";

function decryptCode(inputCode) {
    let arrayCode = inputCode.split("");
    let outputCode = "";
    let upperCodeArray = inputCode.toUpperCase().split("");
    for (let i = 0; i < arrayCode.length; i++) {
        for (let j = i; j < upperCodeArray.length; j++) {
            if (arrayCode[i] !== " " && arrayCode[i] === upperCodeArray[j]) {
                arrayCode[i] = arrayCode[i].toLowerCase();
                break;
            } else {
                arrayCode[i] = arrayCode[i].toUpperCase();
                break;
            }
        }
        outputCode += arrayCode[i];
    }
    return outputCode;
}

decryptCode(code);
console.log(`Decrypt Code của ${code} là ${decryptCode(code)}`);

console.log("----------");

// 5. Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();
console.log("----------");







