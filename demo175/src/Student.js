let list = [
    { id: 1, name: "A", age: 20, score: 10 },
    { id: 2, name: "B", age: 22, score: 10 },
    { id: 3, name: "C", age: 25, score: 10 },
    { id: 4, name: "D", age: 20, score: 10 }

];

export default function Student() {

    return (
        <>
            <table border="1">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Age</th>
                </tr>
                
                {list.map((e) => (
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.score}</td>
                        <td>{e.age}</td>
                        <br></br>
                    </tr>
                ))}

            </table>


        </>
    )
}