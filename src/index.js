// window.onclick = e => {
//     console.log(e.target);
//     console.log(e.target.tagName);
// }

document.addEventListener('DOMContentLoaded', () => {
  // const app = new TaskLister();
  const listDiv = document.getElementById("lists")
  const taskForm = document.getElementById('create-task-form')
  taskForm.style.display = 'none'
  const listForm = document.getElementById('create-list-form')
  const newTaskDescription = document.getElementById('new-task-description')
  const newTaskPriority = document.getElementById('new-task-priority')
  const taskFormSelectElement = document.getElementById('parent-list')
  const newListTitleElement = document.getElementById('new-list-title')


  //On "Create New List" button click
  listForm.addEventListener('submit',function(e){
    e.preventDefault()
    taskForm.style.display = 'inline-block'

    addSelectOption(taskFormSelectElement, newListTitleElement.value)
    createNewList(newListTitleElement.value)
  })

  //On "Create New Task" button click
  taskForm.addEventListener('submit',function(e){
    e.preventDefault()

    const selectedListTitleText = taskFormSelectElement.options[taskFormSelectElement.selectedIndex].value
    addNewTask(selectedListTitleText, newTaskDescription.value, newTaskPriority.value)
  })




  // take in a select element, and an option text and add into the select element
  function addSelectOption(selectElement, newOptionValue){
    let existingOptionsList = document.querySelectorAll('#parent-list option')
    let array = Array.prototype.slice.call(existingOptionsList).map((option)=>option.innerHTML);

    let newOption = document.createElement('option')
    newOption.innerHTML = newOptionValue
    newOption.setAttribute('value', newOptionValue)

    if(!array.includes(newOptionValue)){
      selectElement.appendChild(newOption)
    }else{
      alert( 'list name already exists. enter a different name.')
    }

  }

  //create a new List
  function createNewList(newListTitleText){

    const listContainerDiv = document.createElement('div')
    const listContainerDivClass = 'listContainerDiv-'+ newListTitleText.replace(/\s+/g, '-').toLowerCase()
    listContainerDiv.setAttribute('id', listContainerDivClass)
    const listTitleH2 = document.createElement('h2')
    const deleteButton = document.createElement('button')
    const ul = document.createElement('ul')

    deleteButton.setAttribute('data-title', newListTitleText.replace(/\s+/g, '-').toLowerCase())
    deleteButton.setAttribute('class', 'delete-list')
    deleteButton.innerText = 'X'
    //delete list eventlistener
    deleteButton.addEventListener('click', deleteList)

    listTitleH2.innerText = newListTitleText
    listTitleH2.appendChild(deleteButton)

    listContainerDiv.appendChild(listTitleH2)
    listContainerDiv.appendChild(ul)

    listDiv.appendChild(listContainerDiv)

  }

  function deleteList(e){
    let listTitleText = e.target.getAttribute('data-title')
    console.log(listTitleText)
    let listTitleDiv = document.getElementById('listContainerDiv-'+listTitleText)
    console.log(`listTitleDiv`,listTitleDiv)
    console.log(event)
    // debugger
    listDiv.removeChild(listTitleDiv)
  }

  //adding a new task to an existing list
  function addNewTask(selectedListTitleText, newTaskDescriptionText, newTaskPriorityText){
    const selectedListDiv = document.getElementById('listContainerDiv-'+selectedListTitleText.replace(/\s+/g, '-').toLowerCase())
    const ul = document.querySelector(`#${selectedListDiv.id} ul`)

    // const li = `<li id="find-me">something</li>`
    //     ul.innerHTML += li
    // document.getElementById("find-me").addEventListener('click',()=>{console.log('clicked')})


    const li = document.createElement('li')
    const deleteButton = document.createElement('button')
    //
    deleteButton.setAttribute('data-list-title', selectedListTitleText)
    deleteButton.setAttribute('data-task-name', newTaskDescriptionText.replace(/\s+/g, '-').toLowerCase())
    deleteButton.setAttribute('class', 'delete-task')
    deleteButton.innerText = "X"
    deleteButton.id = 'find-me'
    //
    //
    //
    //
    li.innerText = `Task: ${newTaskDescriptionText}`
    li.appendChild(deleteButton)
    //
    //
    //
    //
    //
    li.innerHTML += `<br> Priority: ${newTaskPriorityText}`
    //
    // //
    // // const deleteTaskButtons = document.querySelectorAll('.delete-task')
    // // for(let i=0; i<deleteTaskButtons.length; i++){
    // //   deleteTaskButtons[i].addEventListener('click',()=>console.log("test"))
    // // }
    //
    ul.appendChild(li)
    debugger
    deleteButton.addEventListener('click',()=>console.log('clicked I might be broke'))
    document.getElementById('find-me').addEventListener('click',()=>console.log('this will work'))
    // deleteButton.addEventListener('click', ()=>console.log("click event"))
  }

  function deleteTask(e){
    console.log("test")

    const listTitle = e.target.getAttribute('data-list-title')
    const listDivContainer = document.getElementById('listContainerDiv-'+listTitle)

  }



});
