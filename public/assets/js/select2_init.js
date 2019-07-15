$(document).ready(function(){
	$('.select2').select2().on('select2:select', function (e) {
		var data = e.params.data
		const form = $(this).parents('form')[0]

		const append = `<div class="col-lg-3 item-quantity">
							<label for="${data.text}" class="control-label">${data.text}:</label>
							<input type="hidden" class="form-control"  name="item_id[]" value="${data.id}">
							<input type="text" class="form-control"  name="quantity[]" value="1">
					   </div>`
		
		const formContent = $(form).find('#item-quantity-container')[0]
		formContent.appendChild($(append)[0])
	});
});