// Object
// Tạo file 01-object.js , thêm bài giải lần lượt cho các bài sau:




// 1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe.
let car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021
};
console.log(car.year);
console.log("----------");

// 2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
let person = {
    "name": "Toyota",
    "address": {
        "street": "Le Duan",
        "city": "Ho Chi Minh",
        "country": "Viet Nam"
    }
};
console.log(person.address.street);
console.log("----------");

// 3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. 
// Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english
let student = {
    "name": "Peter",
    "grades": {
        "math": 9,
        "english": 6
    }
};
console.log(student["grades"]["math"]);
console.log("----------");

// 4. Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.
let products = {
    "TV": 90,
    "monitor": 60,
    "CPU": 100,
    "RAM": 10,
};
for (let product in products) {
    console.log(product + " have price " + products[product]);
}
console.log("----------");

// 5. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.
let settings = {
    "volume": 50,
    "brightness": 40,
};
settings.volume = 100;
console.log("Volume has value is " + settings.volume);
console.log("----------");

// 6. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
let bike = {
    "name": "BRC1",
    "price": 200,
};
bike.color = "blue";
console.log(bike);
console.log("----------");

// 7. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
let employee = {
    "name": "Peter",
    "age": 24,
};
delete employee.age;
console.log(employee);
console.log("----------");

// 8. Một trường học có các lớp học và học sinh như sau:
//     ○ classA: An, Bình, Châu
//     ○ classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// - Khai báo tên biến: school
// - Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa tên các học sinh
// Vd: const school = { classA: ["Giang"]...}

let school = {
    "classA":["An","Bình","Châu"],
    "classB":["Đào","Hương","Giang"]
}
console.log(school);
console.log("----------");