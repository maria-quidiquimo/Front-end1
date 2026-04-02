const horarioAtual = new Date()

const horario = horarioAtual.getHours()

if(horario < 12){
    alert(`Bom dia, Mestre Jedi!`)
    console.log('Antes das 12')
}if(horario > 12 && horario < 18){
    alert(`Boa tarde, Mestre Jedi!`)
    console.log("Depois das 12h e antes das 18h")
}else{
    alert(`Boa noite, Mestre Jedi!`)
    console.log("Depois das 18h")
}
