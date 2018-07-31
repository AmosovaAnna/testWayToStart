//Названия форм

$('#name').change(function(){emergence($('#name'));});
$('#year').change(function(){emergence($('#year'));});
$('#price').change(function(){emergence($('#price'));});
$('#description').change(function(){emergence($('#description'));});
function emergence(id) {
    if (id.val() == '') {
	    id.siblings('label').attr('hidden', 'true');
        id.siblings('label').css('margin-top','23px');
    } else {
	    id.siblings('label').removeAttr('hidden');
        id.siblings('label').css('margin-top','-23px')
    }
};

//Кнопки удалить/запрос в таблице

function delInq(element){
    if (element.text() == 'Запрос') {
	    element.text('Удалить');
    } else {
	    element.text('Запрос');
    }
};
$('.goods__inquiry').click(function(){delInq($(this))});
$('.goods__delete').click(function(){delInq($(this))});
$('.goods__inquiry').hover(function(){delInq($(this))});
$('.goods__delete').hover(function(){delInq($(this))});

//Выпадающий список

$('.order__condition').click(function(){dropdown()});
function dropdown() {
	if ($('.order__container').css('display') == 'none') {
		$('.order__container').css('display','block');
	} else {
		$('.order__container').css('display','none');
	}
};
$('.order__option').click(function(){
	$('.order__status').text($(this).text());
	$('.order__container').css('display','none');
});

//Форматирование цифр

$('#price').change(function(){format($('#price'));});
function format(id) {
	var number = id.val().replace(/[^\d]/g, "").split("").reverse().join("").replace(/\d{3}(?!$|(?:\s$))/g, "$& ").split("").reverse().join("");
	return id.val(number);
}