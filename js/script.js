let USERname = '   Lex Luter has a big suit       '
let USERsurName = '   John jOnes not a good fighter   '
let USERage = '  0.99655432  '

// вам нужно сделать так что бы переменные совподали 
// использовать replace || переопределение не разрешается 

let name = 'Alex'
let surName = 'Jones John'
let age = 25

if (USERname.slice(14, 15).toUpperCase() + USERname.slice(3, 6).toLocaleLowerCase() === name && USERsurName.slice(3, 4).toUpperCase() + USERsurName.slice(4, 5) + USERsurName.slice(10, 13) + ' ' + USERsurName.slice(3, 7) === surName && +USERage.slice(7, 8) * +USERage.slice(8, 9) === age) {
    alert('все верно')
} else {
    alert('ERROR')
}


// Cool Man