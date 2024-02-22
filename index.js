//Prova Individual do aluno: Murilo Giovani dos Santos

const aluno1 = {  
  

    nome: "Murilo",
    idade: 17,
    curso: ["MAT","GEO","CIE"],
    presensa: ["20-12-2024","21-12-2024","22-12-2024"],
    ra: 1234567, 
    
    }

const aluno2 = {

    nome: "Pedro",
    idade: 18,
    curso: ["ED","GEO","POR"],
    presensa: ["13-12-2024","18-12-2024","25-12-2024"],
    ra: 1234567,  
    }

function ValidarNomeAluno(aluno){  //Validando Nome
    const tamanhonome = aluno.nome.lenght
    console.log()
    if(tamanhonome < 10 ){
    
        return console.log("Tamanho do nome, menor que 10 caracteres! ")
    }
    return true
}

function ValidarIdadeAluno(aluno){  //Validando Idade
    const idadealuno = aluno.idade.lenght
    if(idadealuno <= 14){
        return console.log("Idade menor que 14 anos!")
    }
    return true
}

function ValidarCursoAluno(aluno){  //Validando Aluno
    const cursoaluno = aluno.curso.lenght
    if(cursoaluno < 3){
        return console.log("O aluno deve estar no minimo em 3 cursos!")
    }
    return true
}

function ValidarPresensaAluno(aluno){  //Validando Presensa
    const presencaaluno = aluno.presensa.lenght
    if(presencaaluno < 2){
        return console.log("Aluno deve ter no mimimo 2 presensas!")
    }
    return true
}

function ValidarRA(aluno){  //Validando RA
    const raaluno = aluno.ra.lenght
    if(raaluno < 7 ){
        return console.log("O RA deve conter mais de 7 caracteres!")
        
    }
    return true
}

