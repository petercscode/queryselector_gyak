function querySelectorPractice (){
    let price=1200;
    let queryPractice = document.querySelector(".inputclass");
    let showAmount = document.querySelector("span.show-amount");
    let amount=parseInt(queryPractice.value)*price;
    showAmount.innerHTML=amount;
}

let input = document.querySelector('input');
Element.prototype.setDisabled = function() {
  this.setAttribute('disabled', 'disabled');
  this.classList.add('disabled');
}

input.setDisabled();