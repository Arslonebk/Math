// let son = 1.1

// console.log(Math.ceil(son));
// console.log(Math.min(1,2,3,4,5,6,6));
// console.log(Math.pow(2,4));
// console.log(Math.random());

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(random(1,100));

let miqdor = +prompt("Nechta misol ishlamoqchisiz ?");

for (let i = 0; i < miqdor; i++) {
  let symbol = random(1, 4);
  let son1 = random(100, 1000);
  let son2 = random(1, 100);
  if (symbol == 1) {
    let javob = prompt(`misolni yeching: ${son1} * ${son2} = ?`);
    if (javob == son1 * son2) {
      alert("sizning javob togri");
    } else {
      alert(`sizning javob notogri! togri javob => ${son1 * son2}`);
    }
  }else if (symbol == 2) {
    let javob = prompt(`misolni yeching: ${son1} / ${son2} = ?`);
    if (javob == son1 / son2) {
      alert("sizning javob togri");
    } else {
      alert(`sizning javob notogri! togri javob => ${son1 / son2}`);
    }
  }else if (symbol == 3) {
    let javob = prompt(`misolni yeching: ${son1} + ${son2} = ?`);
    if (javob == son1 + son2) {
      alert("sizning javob togri");
    } else {
      alert(`sizning javob notogri! togri javob => ${son1 + son2}`);
    }
  }else if (symbol == 2) {
    let javob = prompt(`misolni yeching: ${son1} - ${son2} = ?`);
    if (javob == son1 - son2) {
      alert("sizning javob togri");
    } else {
      alert(`sizning javob notogri! togri javob => ${son1 - son2}`);
    }
  }else{
    alert('siz xato narsa kiritingiz')
  }
}
console.log(Math.sqrt(25));