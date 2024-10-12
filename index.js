// 1.
// *
// * *
// * * * 
// * * * *
// * * * * *
function partern1(n) {
    let part = "";
    for (let i = 0; i < n; i++) {
        for(let j= 0; j <= i; j++){
            part += "*" + " "
        }
        part += "\n"
    }

    console.log(part)
}

partern1(5)


// 1.
// * * * * *
// * * * *
// * * * 
// * * 
// *
function partern2(n) {
    let part = "";
    for (let i = 0; i < n; i++) {
        for(let j= n; j > i; j--){
            part += "*" + " "
        }
        part += "\n"
    }

    console.log(part)
}

partern2(5)