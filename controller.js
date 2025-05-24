

// Consumo de API ViaCEP
// viacep.com.br

const LimparFormulario = () => {
    document.getElementById('cep').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('cidade').value = '';
}

//Função para preencher o formulário
const PreencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('uf').value = endereco.uf;
    document.getElementById('cidade').value = endereco.localidade;
}

//Verifica se o CEP é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
//Confere se o CEP tem o tamanho correto
cosnt
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Consumo de API ViaCEP

const pesquisarCep = async() => {
    LimparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    
    if(cepValido(cep.value)) {
        const dados = await fetch(url);
        const addres = await dados.json();

        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado')
        } else {
            PreencherFormulario(addres);
        }
    } else {
        alert('CEP incorreto');
    }
}


document.getElementById('cep').addEventListener('focusout', pesquisarCep);

