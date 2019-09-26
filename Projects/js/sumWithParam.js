function add (x, y){
    return (
        x <= 1000 && x >= -1000 &&
        y <= 1000 && y >= -1000 ?
        x + y : 'out of parameters'
    )
}
