const Diem = require('./Diem.js');
const TamGiac = require('./TamGiac.js');

//Kiểm tra phương thức tính khoảng cách 2 điểm A, B của lớp Diem và bằng 5
const A = new Diem(1, 5);
const B = new Diem(1, 0);

// dùng Jest để kiểm tra kết quả mong đợi: https://jestjs.io/docs/en/expect
test('Kiểm tra phương thức tính khoảng cách 2 điểm A, B của lớp Diem và bằng 5', () => {
    expect(Diem.distance(A, B)).toBe(5);
});

// Tam giác vuông cân 
const p1 = new Diem(0, 0);
const p2 = new Diem(0, 5);
const p3 = new Diem(5, 5);
const tri1 = new TamGiac(p1, p2, p3);
test('Kiểm tra phương thức phân loại với tam giác vuông cân', () => {
    expect(tri1.PhanLoaiTamGiac()).toStrictEqual({ code: 1, message: 'Đây là tam giác vuông cân' });
});
test('Kiểm tra tam giác có vuông cân trên với chu vi là 17.071067811865476', () => {
    expect(tri1.ChuVi()).toBe(17.071067811865476);
});

// Tam giác vuông có chiều dài 3 cạnh là số nguyên.
const p1_1 = new Diem(0, 3);
const p2_1 = new Diem(4, 3);
const p3_1 = new Diem(0, 0);
const tri1_1 = new TamGiac(p1_1, p2_1, p3_1);
test('Kiểm tra phương thức phân loại với tam giác vuông"', () => {
    expect(tri1_1.PhanLoaiTamGiac()).toStrictEqual({ code: 2, message: 'Đây là tam giác vuông' });
});
test('Kiểm tra phương thức tính chu vi tam giác vuông trên có chu vi là số nguyên', () => {
    expect(tri1_1.ChuVi()).toBe(12);
});

//Tam giác đều
const p4 = new Diem(2, 1);
const p5 = new Diem(7, 1);
const p6 = new Diem(4.5, 5.33012701892);
const tri2 = new TamGiac(p4, p5, p6);
test('Kiểm tra phương thức phân loại với tam giác đều', () => {
    expect(tri2.PhanLoaiTamGiac()).toStrictEqual({ code: 3, message: 'Đây là tam giác đều' });
});
test('Kiểm tra phương thức tính chu vi của tam giác đều', () => {
    expect(tri2.ChuVi()).toBe(15);
});

//Tam giác cân
const p7 = new Diem(5, 5);
const p8 = new Diem(10, 10);
const p9 = new Diem(15, 5);
const tri3 = new TamGiac(p7, p8, p9);
test('Kiểm tra phương thức phân loại với tam giác cân', () => {
    expect(tri3.PhanLoaiTamGiac()).toStrictEqual({ code: 4, message: 'Đây là tam giác cân' });
});
test('Kiểm tra phương thức tính chu vi của tam giác cân', () => {
    expect(tri3.ChuVi()).toBe(24.14213562373095);
});

//Tam giác tù
const p10 = new Diem(1, 1);
const p11 = new Diem(2, 2);
const p12 = new Diem(0, 1);
const tri4 = new TamGiac(p10, p11, p12);
test('Kiểm tra phương thức phân loại với tam giác tù', () => {
    expect(tri4.PhanLoaiTamGiac()).toStrictEqual({ code: 5, message: 'Đây là tam giác tù' });
});
test('Kiểm tra phương thức tính chu vi của tam giác tù', () => {
    expect(tri4.ChuVi()).toBe(4.650281539872885);
});

//Tam giác nhọn
const p13 = new Diem(-2.5, 3);
const p14 = new Diem(1, 1);
const p15 = new Diem(-3, -2);
const tri5 = new TamGiac(p13, p14, p15);
test('Kiểm tra phương thức phân loại với tam giác nhọn', () => {
    expect(tri5.PhanLoaiTamGiac()).toStrictEqual({ code: 6, message: 'Đây là tam giác nhọn' });
});
test('Kiểm tra phương thức tính chu vi của tam giác nhọn', () => {
    expect(tri5.ChuVi()).toBe(14.05606668470972);
});

// Khong phai tam giac
const p16 = new Diem(1, 1);
const p17 = new Diem(2, 2);
const p18 = new Diem(0, 0);
const tri6 = new TamGiac(p16, p17, p18);
test('Kiểm tra phương thức phân loại với trường hợp 3 cạnh không tạo thành tam giác', () => {
    expect(tri6.PhanLoaiTamGiac()).toStrictEqual({ code: 0, message: "Đây không phải là tam giác" });
});
test('Kiểm tra phương thức tính chu vi với trường hợp 3 cạnh không tạo thành tam giác', () => {
    expect(tri6.ChuVi()).toBe("Đây không phải là tam giác");
});