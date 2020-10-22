const forms = [
    `
    <form id= 'thank-you-form'>
        <p>Who do you wish to thank?</p>
        <input type='text' name = 'recipient'>
        <button type='submit'> send</button>
        </form>


    `
    ,

    `
    <form id= 'invite-form'>
        <p>Who is invited</p>
        <input type='text' name = 'recipient'>
        <button type='submit'> send</button>
        </form>


    `
]




function addForm(type){
    if (type ==='thankyou'){
        document.getElementById('form-container').innerHTML = forms[0]
        } else if (type ==='invitation'){
            document.getElementById('form-container').innerHTML = forms[1]
        }
    }

    document.getElementById('thank-you').addEventListener('click', function (){
        addForm('thankyou')

    })

    document.getElementById('invitation').addEventListener('click', function(){
        addForm('invitaion')
    })








   /* document.getElementById('form-container').innerHTML = 'form goes here!'
}


document.getElementById('thank-you').addEventListener('click', function(){
    console.log('add form for thank you card')

})


document.getElementById('invite').addEventListener('click', function(){
    console.log('add form for invite card')

})

document.getElementById('invite').addEventListener( 'click', function (){
    addForm('invite')
})

if (type === 'thankYou'){
    document.getElementById('form-container').innerHTML[0]
} else if (type ==='invite'){
    document.getElementById('form-container').innerHTML[1]
}
*/ 