module.exports = class Diem {
    constructor(x, y) // Khởi tạo hoành độ, tung độ x,y cho điểm
    {
        this.x = x;
        this.y = y;
    }
    
    static distance(diem1, diem2) {
        const dx = diem1.x - diem2.x;
        const dy = diem1.y - diem2.y;
    
        return Math.hypot(dx, dy);
      }
      // tham khảo tại https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
}