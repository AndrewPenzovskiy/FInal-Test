
//---Оголошення змінних---
const containerContent = document.querySelector('.container__content')

const containerButtons = document.querySelector('.container__buttons')
    const buttonEdit = document.querySelector('.button-edit')
    const buttonStyle = document.querySelector('.button-style')

const containerSettings = document.querySelector('.container__settings')
    const containerEdit = document.querySelector('.container__edit')
        const content = document.getElementById('content')
        const buttonAdd = document.querySelector('.button-add')
        const buttonSave = document.querySelector('.button-save')
    const containerStyle = document.querySelector('.container__style')
        const fontSize = document.querySelector('.style__font-size')
        const fontFamily = document.getElementById('font-family');
        const buttonsColor = document.querySelector('.buttons__color')
        const buttonsBackground = document.querySelector('.buttons__background')
        const boldText = document.getElementById('bold-text')
        const cursiveText = document.getElementById('cursive-text')
        const boxColor = document.querySelector('.style__box-color')
        const boxBackground = document.querySelector('.style__box-background')

const containerAdd = document.querySelector('.container__add')
    const choiseTable = document.getElementById('choise-table')
    const choiseList = document.getElementById('choise-list')   
    const containerTable = document.querySelector('.container__table')
        const countTr= document.getElementById('count-tr')
        const countTd= document.getElementById('count-td')
        const widthTd= document.getElementById('width-td')
        const heightTd= document.getElementById('height-td')
        const widthBorder= document.getElementById('width-border')
        const typeBorder= document.getElementById('type-border')
        const colorBorder= document.getElementById('color-border')
        const tableButton = document.querySelector('.table__button')
    const containerList = document.querySelector('.container__list')
        const countLi= document.getElementById('count-li')
        const typeMarks= document.getElementById('type-marks')
        const listButton = document.querySelector('.list__button')

//---Кнопки "Edit", "Style", "Save", "Add"---
buttonEdit.onclick = function() {                               //--Edit--//
    content.value = containerContent.innerHTML
    containerStyle.style.display = 'none'
    containerEdit.style.display = 'block'
}
    buttonStyle.onclick = function() {                          //--Style--//
        containerEdit.style.display = 'none'
        containerStyle.style.display = 'flex'
    }
        buttonSave.onclick = function() {                       //--Save--//
            containerContent.innerHTML = content.value
            containerEdit.style.display = 'none'
        }
            buttonAdd.onclick = function() {                    //--Add--//
                containerContent.style.display = 'none'
                containerButtons.style.display = 'none'
                containerSettings.style.display = 'none'
                containerAdd.style.display = 'block'
            }

//---Функція, яка обирає розмір шрифта---
fontSize.onchange = ()=> {
    for (i = 0; i < fontSize.length; i++) {
        if (fontSize[i].checked) {
            containerContent.style.fontSize = fontSize[i].labels[0].innerHTML
        }
    }
}

//---Функція, яка обирає сімейство шрифта---
fontFamily.onchange = ()=> {
    for (i = 0; i < fontFamily.length; i++) {
        if (fontFamily[i].selected) {
            containerContent.style.fontFamily = fontFamily[i].innerHTML
        }
    }
}

//---Функція, яка обирає колір тексту---
buttonsColor.onclick = ()=> {
    boxColor.style.display = 'grid'
    boxBackground.style.display = 'none'
    buttonsColor.classList.add("active");
    buttonsBackground.classList.remove("active");

    boxColor.onclick = function(event) {
        if(event.target.classList.contains('box-color-item')) {
            containerContent.style.color = event.target.style.background
            boxColor.style.display = 'none'
            buttonsColor.classList.remove("active");
        } 
    }
}

//---Функція, яка обирає колір фону---
buttonsBackground.onclick = ()=> {  
    boxColor.style.display = 'none'
    boxBackground.style.display = 'grid'
    buttonsBackground.classList.add("active");
    buttonsColor.classList.remove("active");
    
    boxBackground.onclick = function(event) {
        if(event.target.classList.contains('box-background-item')) {
            containerContent.style.backgroundColor = event.target.style.background
            boxBackground.style.display = 'none'
            buttonsBackground.classList.remove("active");
        } 
    }
}

//---Функції, які обирають стиль шрифта "bold" або "italic"---
boldText.onchange = ()=> {
     if (boldText.checked) { containerContent.style.fontWeight = 'bold' }
     else { containerContent.style.fontWeight = 'normal' }
}
cursiveText.onchange = ()=> {
    if (cursiveText.checked) { containerContent.style.fontStyle = 'italic' }
    else { containerContent.style.fontStyle = 'normal' }
}

//---Функції, які перевіряють який "radiobutton" вибраний---
choiseTable.onchange = ()=> {
    if (choiseTable.checked) { containerTable.style.display = 'block'; containerList.style.display = 'none' }
}
choiseList.onchange = ()=> {
    if (choiseList.checked) { containerTable.style.display = 'none'; containerList.style.display = 'block' }
}

//---Функція, яка створює таблицю і вибір параметрів для неї---
tableButton.onclick = ()=> {
    if (countTr.value > 0) {
        let table = document.createElement('table')
            for ( i = 0; i < countTr.value; i++ ) {
                tr = document.createElement('tr')
                table.append(tr)
                for ( j = 0; j < countTd.value; j++ ) {
                    td = document.createElement('td')
                    tr.append(td)
                    td.append(`TD`)
                    td.style.width = `${widthTd.value}px`
                    td.style.height = `${heightTd.value}px`
                    td.style.border = `${widthBorder.value}px ${typeBorder.value} ${colorBorder.value}`
                } 
            }
        content.value += table.outerHTML
    }
    backToMainPage()
}     

//---Функція, яка створює список і стиль марок цього списку---
listButton.onclick = ()=> {
    if (countLi.value > 0) {
        let ul = document.createElement('ul')
        ul.style.listStyle = typeMarks.value;
        for ( i = 1; i <= countLi.value; i++) {
            let li = document.createElement('li')
            li.append(`item ${i}`)
            ul.append(li)
        }
        content.value += ul.outerHTML
    }
    backToMainPage()
}

//---Функція для очищення даних і повернення на головну сторінку
function backToMainPage() {
    containerAdd.style.display = 'none'         
    containerContent.style.display = 'block'
    containerButtons.style.display = 'flex'     
    containerSettings.style.display = 'block'
    choiseTable.checked = false
    choiseList.checked = false
    containerTable.style.display = 'none'
    containerList.style.display = 'none'
    countTr.value = '', countTd.value = '', widthTd.value = '', heightTd.value = '', widthBorder.value = '', typeBorder.value = 'solid', colorBorder.value = 'black', countLi.value = '', typeMarks.value = 'circle'
}