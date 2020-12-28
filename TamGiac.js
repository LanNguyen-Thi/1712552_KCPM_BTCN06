const Diem = require('./Diem');

module.exports = class TamGiac {
    constructor(diem1, diem2, diem3) // khởi tạo tam giác từ 3 điểm 
    {
        this.diem1 = diem1;
        this.diem2 = diem2;
        this.diem3 = diem3;
    }

    PhanLoaiTamGiac() {
        // Tham khảo code từ https://nguyenvanhieu.vn/kiem-tra-loai-tam-giac-bang-code-c/
        // và https://quantrimang.com/cong-thuc-tinh-dien-tich-tam-giac-164018
        

            // Tính độ dài 3 cạnh của tam giác
            const a = Diem.distance(this.diem1, this.diem2);
            const b = Diem.distance(this.diem2, this.diem3);
            const c = Diem.distance(this.diem3, this.diem1);

            if (a > 0 && b > 0 && c > 0) { // kiểm tra 3 cạnh có dương hay không, nếu có cạnh =0 thì suy ra có ít nhất 2 điểm trùng nhau
                if ((a < b + c) && (b < a + c) && (c < a + b)) { // kiểm tra điều kiện tam giác
                    if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) // định lý Pytago kiểm tra tam giác vuông
                        if (a == b || a == c || b == c) // kiểm tra điều kiện cân
                            return { code: 1, message: "Đây là tam giác vuông cân" };
                        else
                            return { code: 2, message: "Đây là tam giác vuông" };
                    else if (a == b && b == c)
                        return { code: 3, message: "Đây là tam giác đều" }; // kiểm tra tam giác đều
                    else if (a == b || a == c || b == c)
                        return { code: 4, message: "Đây là tam giác cân" }; // kiểm tra tam giác cân
                    else if (a * a > b * b + c * c || b * b > a * a + c * c || c * c > a * a + b * b)// tam giác tù
                        return { code: 5, message: "Đây là tam giác tù" };
                    else
                        return { code: 6, message: "Đây là tam giác nhọn" };// tam giác nhọn
                }
            }
        
        else
            return { code: 0, message: "Đây không phải là tam giác" };
    }

    // Hàm tính chu vi
    ChuVi() {
        const type = this.PhanLoaiTamGiac();
        if (type.code === 0) {
            return type.message;
        } else {
            const a = Diem.distance(this.diem1, this.diem2);
            const b = Diem.distance(this.diem2, this.diem3);
            const c = Diem.distance(this.diem3, this.diem1);
            return a + b + c;
        }
    }
}