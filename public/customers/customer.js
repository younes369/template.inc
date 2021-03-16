const button = document.getElementsByClassName('remove');

for(i=0; i< button.length; i++){
    const buttonClicked = button[i];
    buttonClicked.addEventListener('click',(event)=>{
        var buttonRemove = event.target;
        buttonRemove.parentElement.parentElement.remove()
    })
}