function solution(arr) {
    const array = arr.map(el => {
        if(el >= 50 && el % 2 === 0) {
            return el / 2;
        } else if(el < 50 && el % 2 === 1) {
            return el * 2;
        } else {
            return el;
        }
    })

    return array;
}