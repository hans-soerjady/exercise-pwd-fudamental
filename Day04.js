// Exercise Example 1
function triangle1(size) {
    if (size < 1) {
        return "Error, the size cant be lower than 1.";
    } 

    var triangle1Result = "";

    for (let i = 1; i <= size; i++) {

        if (i > 1) { // ada if karena mulai dari baris kedua
            for (let a = 1; a < i; a++) { // for loop buat nambah angka di depan2
                triangle1Result += + a + " "
            }
        }

        triangle1Result = triangle1Result + i.toString() // buat nambah angka di belakang
        triangle1Result += "\n" // buat bikin line baru
    }
    return triangle1Result
}

let x = triangle1(5)
console.log(x)