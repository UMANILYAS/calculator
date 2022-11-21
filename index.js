function display(val){

    document.getElementById('screen').value += val

    return val

}
function solve(){

    let x = document.getElementById('screen').value

    let y = eval(x);

    document.getElementById('screen').value = y

    return y

}

function clearscreen(){

    document.getElementById('screen').value = '';

}

