var globalVariable = 'This is global variable'

function globalFunction() {
    var localVariable = 'This is local variable'
    console.log(globalVariable);
    console.log(localVariable);
    globalVariable = 'This is changed variable';
    console.log(globalVariable);
    function  loacalFunction() {
        var innerLoaclVariable = 'This is inner local variable'
        console.log('globalVariable/localVariable/innerLoaclVariable')
        console.log(globalVariable);
        console.log(localVariable);
        console.log(innerLoaclVariable);
    }
    loacalFunction()
}


globalFunction()