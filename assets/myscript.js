var select = document.querySelector('select');
var para = document.querySelector('#p');
var icon = '<i class="fa fa-arrow-circle-right fa-lg" aria-hidden="true"></i>';
var msn = icon+' Recebem a partir de ';

select.addEventListener('change',mes);

function mes() {
    var opt = select.value;
    switch (opt){
        case 'jan':
        para.innerHTML = msn+' 20 de Abril';
        break;

        case 'fev':
        para.innerHTML = msn+ '30 de Abril';
        break;

        case 'mar':
        para.innerHTML = msn+' 4 de Abril';
        break;

        case 'abr':
        para.innerHTML = msn+' 11 de Maio';
        break;

        case 'may':
        para.innerHTML = msn+' 14 de Maio';
        break;

        case 'jun':
        para.innerHTML = msn+' 18 de Maio';
        break;

        case 'jul':
        para.innerHTML = msn+' 21 de Maio';
        break;

        case 'ago':
        para.innerHTML = msn+' 25 de Maio';
        break;

        case 'set':
        para.innerHTML = msn+' 28 de Maio';
        break;

        case 'out':
        para.innerHTML = msn+' 1 de Junho';
        break;

        case 'nov':
        para.innerHTML = msn+' 8 de Junho';
        break;

        case 'dez':
        para.innerHTML = msn+' 15 de Junho';
        break;

        default:
        para.innerHTML = alert(' Selecionar um mês!');
        para.innerHTML = ' Selecionar um mês!';
        
    }
}