let listaProdutos = []
let tabela = document.getElementById('Tabela')
let inputItem = document.getElementById('formItem')
let inputPreco = document.getElementById('formPreco')
let inputAmount = document.getElementById('formAmount')
let idNumber = 0
let contentPreco = document.getElementById('contentPreco')
let PrecoTotal = document.createElement('h2')
contentPreco.appendChild(PrecoTotal)
PrecoTotal.id = 'precoTotal'
PrecoTotal.innerText = 00.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })





// Botão Adicioanar
let btn = document.getElementById('ButtonAdd')
btn.addEventListener('click', validation)

function add() {
    const item =
    {
        nome: inputItem.value,
        preco: inputPreco.value,
        amount: inputAmount.value,
        id: idNumber
    }
    let newLista = listaProdutos

    newLista.push(item)
    listaProdutos.innerHTML = ''
    lista = newLista

    creatItem()
    newId()
    limpar()
    return console.table(lista);

}

function validation() {
    if (
        document.getElementById('formItem').value != '' &&
        document.getElementById('formAmount').value != '' &&
        document.getElementById('formPreco').value != ''
    ) {
        add()
        return true
    } else {
        alert('Digite um valor')
        return false
    }

}

function creatItem() {
    tabela.innerHTML = ''
    for (let i = 0; i < listaProdutos.length; i++) {
        const linha = tabela.insertRow()
        const item = linha.insertCell()
        tabela.append(item)
        item.textContent = listaProdutos[i].nome.toUpperCase()



        const preco = creatPreco(i)
        const amount = creatAmount(i)
        const remove = creatButton(i)
        const total = Total(i)


        tabela.append(preco)
        tabela.append(amount)
        tabela.append(remove)
        tabela.append(total)

    }

}

function creatPreco(value) {
    let preco = document.createElement('td')
    preco.textContent = Number(listaProdutos[value].preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return preco
}

function creatAmount(value) {
    let amount = document.createElement('td')
    amount.textContent = listaProdutos[value].amount

    return amount
}

function creatButton(value) {
    const remove = document.createElement('button')
    remove.textContent = 'Remove'
    remove.id = value
    remove.className = 'Button'
    remove.style.width = '100px'
    remove.style.height = '30px'
    remove.style.margin = '5%'
    remove.addEventListener('click', deletar)

    return remove
}

function limpar() {
    document.getElementById('formItem').value = ''
    document.getElementById('formAmount').value = ''
    document.getElementById('formPreco').value = ''
}

function newId() {
    let arr = listaProdutos
    for (let i = 0; i < listaProdutos.length; i++) {
        arr[i].id = i
    }
    listaProdutos = ''
    listaProdutos = arr
    return listaProdutos
}

function deletar(Event) {
    let id = (Event.target.id)
    let newLista = listaProdutos
    listaProdutos = ''
    newLista.splice(id, 1)
    listaProdutos = newLista

    creatItem()

}

function Total() {
    let final0 = 0
    for (let i = 0; i < listaProdutos.length; i++) {
        final0 += Number(listaProdutos[i].preco) * Number(listaProdutos[i].amount)

    }
    PrecoTotal.innerText = final0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return ''

}

