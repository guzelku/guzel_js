function chage(a){
    if (typeof(a) != 'string'){
    
    console.log('Не строка')}
    else
    {
    a=a.trim()
    if (a.length > 30){
    a=a.slice(0,31) +"..." ;
    }
    console.log(a)
    }
    }
    let sentens = prompt();
    chage(sentens);    