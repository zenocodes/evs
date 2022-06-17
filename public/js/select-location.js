import data from './data.js'


let selectCounty = document.querySelector('#select-county')
let selectConstituency = document.querySelector('#select-constituency')
let selectWard = document.querySelector('#select-ward')

for(let county of data.map(location => location.county).sort()) {
    let option = document.createElement('option')
    option.value = option.textContent = county
    selectCounty.appendChild(option)
}

selectCounty.addEventListener('change', (e) => {
    // console.log(e.target.value)
    const constituencyOptions = document.querySelectorAll('.option-constituency')
    constituencyOptions.forEach(option => selectConstituency.removeChild(option))
    
    let optionCon = document.createElement ('option')
    optionCon.className = 'option-constituency'
    optionCon.textContent = 'Select Constituency'
    selectConstituency.appendChild(optionCon)

    
    const wardOptions = document.querySelectorAll('.option-ward')
    wardOptions.forEach(option => selectWard.removeChild(option))

    let optionWard = document.createElement('option')
    optionWard.className ='option-ward'
    optionWard.textContent = 'Select Ward'
    selectWard.appendChild(optionWard)

    for(let constituency of data.find(location => location.county === e.target.value).electoralArea.map(area => area.constituency).sort()) {
        let option = document.createElement('option')
        option.className = 'option-constituency'
        option.value = option.textContent = constituency
        selectConstituency.appendChild(option)
    }
})

selectConstituency.addEventListener('change', (e) => { /*listen for change on the select option */
    const wardOptions = document.querySelectorAll('.option-ward')
    wardOptions.forEach(option => selectWard.removeChild(option))
    let optionWard = document.createElement('option')
    optionWard.className ='option-ward'
    optionWard.textContent = 'Select Ward'
    selectWard.appendChild(optionWard)
    for(let ward of data.find(location => location.electoralArea.find(area => area.constituency === e.target.value)).electoralArea.find(area => area.constituency === e.target.value).wards.map(ward => ward.ward).sort()) {
        let option = document.createElement('option')
        option.className = 'option-ward'
        option.value = option.textContent = ward
        selectWard.appendChild(option)
    }
})





// const constituency = data[0].electoralArea.map(area => area.constituency)

// console.log(constituency)

// const wards = data.find(location => location.electoralArea.find(area => area.constituency === 'CHANGAMWE'))