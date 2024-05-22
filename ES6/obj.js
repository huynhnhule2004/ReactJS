//Tạo mảng sản phẩm có id, name, price, quantity

let listProduct = [
    {
        id: 1,
        name: 'A',
        price: 10,
        quantity: 5
    },
    {
        id: 2,
        name: 'AB',
        price: 12,
        quantity: 2
    },
    {
        id: 3,
        name: 'C',
        price: 15,
        quantity: 3
    }
]

//1.Sử dụng map, in ra name và price của các sản phẩm
listProduct.map(e => {
    // console.log(e.name + ' ,' + e.price);
})
//2.Sử dụng map tìm ra các sản phẩm có giá >100
listProduct.map(e => {
    if(e.price >= 12) {
        // console.log(e.name + ' ,' + e.price);
    }
})
//3.Sử dụng filter tìm các sản phẩm có giá >100
let newL = listProduct.filter(e => e.price >=12)
// console.log(newL);
//4.Sử dụng map tính tổng tiền hàng sẽ có nếu bán hết toàn bộ sản phẩm(tổng giá * số lượng)
let sumMoney = 0;
listProduct.map(e => {
    sumMoney += e.price * e.quantity;
})
console.log(sumMoney);
//5.Sử dụng reduce, tính tổng tiền hàng sẽ có nếu bán hết toàn bộ sản phẩm(tổng giá * số lượng)
let sum2 = listProduct.reduce((s,e) => s+e.price*e.quantity,0) ;
console.log(sum2);