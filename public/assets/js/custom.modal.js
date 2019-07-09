$('#modalComponet').on('show.bs.modal', function (event){
    if(event.namespace == 'bs.modal'){
        var button = $(event.relatedTarget)
        var modal = $(this)
        var form = $('form',modal)[0]
        var inputs = modal.find('.modal-body input')
        var selects = modal.find('.modal-body select')
        var textareas = modal.find('.modal-body textarea')
            modal.find('.modal-title').text(button.data('action') +' '+title)
            form.action = realUrl
            if(button.data('action') == 'Edit')
            {  
                const param = {inputs,textareas,selects,button}
                form.action += '/'+ button.data('content').id+'?_method=PUT'
                editModal(param)
            }
            else
            {   
                //$('.MultiFile-label').hide()
                inputs.val('')
                textareas.val('')
                selects.val('').trigger('change')
                $('.item-quantity').remove()
            }
    }
})