let userFormDOM=document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)

let userListDOM=document.querySelector('#userList')

let alertDOM=document.querySelector('#alert')

const alertFunc=(tittle,message, className='warning')=>`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${tittle}</strong>${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(evt){
    evt.preventDefault()
    const user_Name=document.querySelector('#username')
    const score_num=document.querySelector('#score')

    if(user_Name.value && score_num.value){
        addItem(user_Name.value,score_num.value)
        user_Name.value=""
        score_num.value=""
    }else{
        alertDOM.innerHTML=alertFunc('Dikkat! ',' Eksik Bilgi Girdiniz')
    }
}



const addItem = (userName, score) => {
    let liDOM=document.createElement('li')
    liDOM.innerHTML=`${userName} <span class="badge bg-primary rounded-pill">${score}</span> `
    liDOM.classList.add('list-group-item','d-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}
