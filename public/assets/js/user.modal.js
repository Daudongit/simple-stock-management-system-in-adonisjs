const title = 'user'
function editModal({inputs,textareas,button}){
    const content = button.data('content')
    inputs[0].value = content.first_name
    inputs[1].value = content.last_name
    inputs[2].value = content.email
    inputs[3].value = content.phone
    textareas[0].value = content.address
}