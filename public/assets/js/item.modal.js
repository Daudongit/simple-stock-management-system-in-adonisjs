const title = 'item'
function editModal({inputs,button}){
    const content = button.data('content')
    inputs[0].value = content.name
    inputs[1].value = content.price
}