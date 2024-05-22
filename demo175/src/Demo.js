let x = 10;

let list = ['Helo', 'hehe', 'haha'];
let obj = {
  name: 'a',
  age: 20,
  score: 10
};

let list0 = [
 {
  name: 'a',
  age: 20,
  score: 10
 },
 {
  name: 'b',
  age: 20,
  score: 10
 },
 {
  name: 'a',
  age: 20,
  score: 10
 }
];

export default function Demo() {
    return (
        <>
            <h1>Item</h1>
            <h1>{x}</h1>
            {list.map(e => (
                <h2>{e}</h2>
            ))}

            <h2>{obj.name}, {obj.age}, {obj.score}</h2>

            {list0.map((e, index) => (
                <p>{index},{e.name},{e.score}</p>
            ))}
        </>
    )
}