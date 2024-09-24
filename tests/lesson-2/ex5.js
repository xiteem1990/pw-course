// Bài tập vòng lặp
// 1. Tạo file ex5.js, thêm vào code đáp án cho đề bài sau:
// a. Lặp từ 1 tới 100
// b. Trong mỗi vòng lặp, in ra:
// i. Nếu giá trị của vòng lặp chia hết cho 2, in “Số <i> là số chẵn”
// ii. Nếu giá trị của vòng lặp không chia hết cho 2, in “Số <i> là số lẻ”

for (let index = 1; index < 101; index++) {
    if (index % 2 === 0) {
        console.log("Số " + index + " là số chẵn");
    }

    if (index % 2 > 0) {
        console.log("Số " + index + " là số lẻ");
    }
}



