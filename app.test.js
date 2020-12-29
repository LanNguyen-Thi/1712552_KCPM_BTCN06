const Diem = require('./Diem.js');
const TamGiac = require('./TamGiac.js');

//Kiểm tra hàm tính khoảng cách 2 điểm
const A = new Diem(0,0 );
const B = new Diem(7,0);

// dùng Jest để kiểm tra kết quả mong đợi: https://jestjs.io/docs/en/expect
test('Kiểm tra hàm tính khoảng cách 2 điểm', () => {
    expect(Diem.distance(A, B)).toBe(7);
});

// Tam giác vuông cân 
const d1 = new Diem(0, 0);
const d2 = new Diem(7, 0);
const d3 = new Diem(7, 7);
const tg1 = new TamGiac(d1, d2, d3);
test('Kiểm tra hàm phân loại tam giác vuông cân', () => {
    expect(tg1.PhanLoaiTamGiac()).toStrictEqual({ code: 1, message: 'Đây là tam giác vuông cân' });
});
test('Kiểm tra chu vi tam giác vuông cân', () => {
    expect(tg1.ChuVi()).toBe(23.899494936611667);
});

// Tam giác vuông
const d4 = new Diem(0, 0);
const d5 = new Diem(0, 7);
const d6 = new Diem(3, 0);
const tg2 = new TamGiac(d4, d5, d6);
test('Kiểm tra hàm phân loại tam giác vuông', () => {
    expect(tg2.PhanLoaiTamGiac()).toStrictEqual({ code: 2, message: 'Đây là tam giác vuông' });
});
test('Kiểm tra hàm tính chu vi tam giác vuông', () => {
    expect(tg2.ChuVi()).toBe(17.61577310586391);
});

//Tam giác đều
const d7 = new Diem(2, 1);
const d8 = new Diem(7, 1);
const d9 = new Diem(4.5, 5.33012701892);
const tg3 = new TamGiac(d7,d8,d9);
test('Kiểm tra hàm phân loại tam giác đều', () => {
    expect(tg3.PhanLoaiTamGiac()).toStrictEqual({ code: 3, message: 'Đây là tam giác đều' });
});
test('Kiểm tra hàm tính chu vi tam giác đều', () => {
    expect(tg3.ChuVi()).toBe(15);
});

//Tam giác cân
const d10 = new Diem(0, 0);
const d11 = new Diem(7, 3);
const d12 = new Diem(14, 0);
const tg4 = new TamGiac(d10, d11, d12);
test('Kiểm tra hàm phân loại tam giác cân', () => {
    expect(tg4.PhanLoaiTamGiac()).toStrictEqual({ code: 4, message: 'Đây là tam giác cân' });
});
test('Kiểm tra hàm tính chu vi tam giác cân', () => {
    expect(tg4.ChuVi()).toBe(29.231546211727817);
});

//Tam giác tù
const d13 = new Diem(1, 1);
const d14 = new Diem(2, 2);
const d15 = new Diem(0, 1);
const tg5 = new TamGiac(d13, d14, d15);
test('Kiểm tra hàm phân loại tam giác tù', () => {
    expect(tg5.PhanLoaiTamGiac()).toStrictEqual({ code: 5, message: 'Đây là tam giác tù' });
});
test('Kiểm tra hàm tính chu vi tam giác tù', () => {
    expect(tg5.ChuVi()).toBe(4.650281539872885);
});

//Tam giác nhọn
const d16 = new Diem(-2.5, 3);
const d17 = new Diem(1, 1);
const d18 = new Diem(-3, -2);
const tg6 = new TamGiac(d16, d17, d18);
test('Kiểm tra hàm phân loại tam giác nhọn', () => {
    expect(tg6.PhanLoaiTamGiac()).toStrictEqual({ code: 6, message: 'Đây là tam giác nhọn' });
});
test('Kiểm tra hàm tính chu vi tam giác nhọn', () => {
    expect(tg6.ChuVi()).toBe(14.05606668470972);
});

// Khong phai tam giac
const d19 = new Diem(0, 0);
const d20 = new Diem(4, 4);
const d21 = new Diem(6, 6);
const tg7 = new TamGiac(d19, d20, d21);
test('Kiểm tra hàm phân loại trường hợp 3 cạnh không tạo thành tam giác', () => {
    expect(tg7.PhanLoaiTamGiac()).toStrictEqual({ code: 0, message: "Đây không phải là tam giác" });
});
test('Kiểm tra hàm tính chu vi trường hợp 3 cạnh không tạo thành tam giác', () => {
    expect(tg7.ChuVi()).toBe("Đây không phải là tam giác");
});

const d22 = new Diem(0, 0);
const d23 = new Diem(7, 0);
const d24 = new Diem(3, 0);
const tg8 = new TamGiac(d22, d23, d24);
test('Kiểm tra hàm phân loại trường hợp 3 cạnh không tạo thành tam giác', () => {
    expect(tg8.PhanLoaiTamGiac()).toStrictEqual({code: 0, message: "Đây không phải là tam giác"});
});
test('Kiểm tra hàm tính chu vi trường hợp 3 cạnh không tạo thành tam giác', () => {
    expect(tg8.ChuVi()).toBe("Đây không phải là tam giác");
});