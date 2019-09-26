function century (year){
    return year >= 1 && year <= 2005 ? Math.ceil(year / 100) : null
}

console.log(century(2001))
