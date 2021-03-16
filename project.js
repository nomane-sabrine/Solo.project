//this function allow to insert the number in the input:
//***The .val() method is primarily used to get the values of form elements such as input, select and textarea. */
function insrt(num) {
    $('.calculator-display').val($('.calculator-display').val() + num);
}



// function eval('2,2')==> ('4')
function eql() {
    console.log('= button pressed: ', $('.calculator-display').val())
    $('.calculator-display').val(eval($('.calculator-display').val()));
}

//
function c() {
    $('.calculator-display').val('');
}
//  
function del() {
    value = $('.calculator-display').val();
    $('.calculator-display').val(value.substring(0, value.length - 1));
}