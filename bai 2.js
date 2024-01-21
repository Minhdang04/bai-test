function numberOneTriangle(number) {
    if (number < 1 || number > 10) {
      console.log("Số nguyên không hợp lệ. Vui lòng chọn số từ 1 đến 10.");
      return;
    }
  
    for (let i = 1; i <= number; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "1 ";
      }
      console.log(row);
    }
  }