//console.log(12345)

//математические операции

//console.log(undefined + 5)  nan
//console.log(undefined + 'new') //undefinednew
//console.log(undefined + null) nan
//console.log(undefined + true)  nan

//console.log(null * 5) //=0
//console.log(null + 'new') //=nullnew
//console.log(null + true)  //=1(true)
//console.log(null + false)  //=0(false)


//let a = 5
//let b = 10
//
////a += b  //a = a + b
//a *= b
//
//console.log(a)




//let a = 5
////console.log(a++) //=1 first time, postfix
////console.log(a++)  //=2 next time
////console.log(++a) //=2 prefix
//
////console.log(a--)
////console.log(--a)



//let num = 11e12   //=11 000000000000



//let num = Number(12)
//console.log(num)

//
//let num = '3s'
//console.log(+num) nan
//console.log(Number(num)) nan
//console.log(num * 1) nan
//console.log(parseInt(num)) //=3

//let num = '3.1'
//console.log(+num)
//console.log(Number(num))
//console.log(num * 1)
//console.log(parseFloat(num))


//let num = true
//console.log(Number(true))  //=1


//let a = 5
//let b = 'new'
//let c = a * b
//console.log(c)
////console.log(isNaN(b))  true, NaN
////console.log(isNaN(a))  false, number
//console.log(isFinite(a))  true


//let a = 5.498
//console.log(Math.floor(a)) v menshuyu storonu
//console.log(Math.ceil(a)) v bolshuyu storonu
//console.log(Math.round(a))  округление до ближайшего целого cislo
//console.log(Math.trunc(a)) убирает все числа после точки
//console.log(a.toFixed(2)) округление до ближайшего целого stroka
//console.log(Math.pow(5, 2))  //=5^2



//console.log(Math.ceil(Math.random() * 125) + 75)



//let name = 'Adele'
//let name2 = "Adele2"
//let name3 = Adele3

//
//let country = 'Russia'
//let city = 'Moscow' + country
//let city = `Moscow ${country}` //Moscow Russia
//console.log(city)

//
//let name = 'Adele'
//console.log(name.length % 2 ==0)  //dlina + chetnost false



//let name = 'Adele'
//console.log(name[3]) //poisk po indexu
//console.log(name[name.length - 1]) //last letter
//console.log(name[Math.trunc(name.length / 2)]) //last word


//let car = 'World Ferrari'
//console.log(car.toUpperCase())
//console.log(car.toLowerCase())

//console.log(car.includes('world', 5))
//console.log(car.startsWith('world'))
//console.log(car.toUpperCase().startsWith('world'.toUpperCase()))
//console.log(car.toUpperCase().endsWith('world'.toUpperCase()))
//console.log(car.indexOf('F'))
//console.log(car.lastIndexOf('r'))



//let name = 'Adele'
//console.log(name.slice(-2))
//console.log(name.substring(-2, 3)) //net minusovogo znacheniya
//console.log(name.substr(0, 5)) //ot i skolko


//console.log(Math.max(1, 4, 21))
//console.log(Math.min(1, 4, 21))