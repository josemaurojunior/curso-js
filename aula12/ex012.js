var agora = new Date()
var hora = 19
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora < 12 && hora >= 5) {
    console.log(`Bom Dia!`)
} else if (hora >= 12 && hora <= 18) {
    console.log(`Boa Tarde!`)
} else if (hora > 18 && hora < 24){
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada')
}