
const frm = document.querySelector("form")
const tipoMolho = document.querySelector('#tipoMolho')
const tipoMassa = document.querySelector('#tipoMassa')
const resp1 = document.querySelector('#outRespPedido')
const resp2 = document.querySelector('#outRespErro')
const ingredientesList = document.querySelector(`#ingredientes`)



frm.addEventListener  ('submit',  (e) => {
    const molho = frm.saborMolho.value
    const massa = frm.tipoMassa.value
    const quantidadeIngredientes = frm.quantidadeIngredientes.value [0]  
    
    if (quantidadeIngredientes == 3) {
        resp1.innerText = `vc escolheu ${molho}, macarrão tipo ${massa} e 3 ingredientes `
        resp1.style.color = "blue"
    } else {
        resp1.innerText = `vc escolheu ${molho}, macarrão tipo ${massa} e 6 ingredientes`
        resp1.style.color = "green"
    }
    e.preventDefault()
})



/**/