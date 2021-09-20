const intial_prize = document.getElementById('intial_price')
const quantity = document.getElementById('quantity')
const current_price = document.getElementById('current_price')
const submit_button = document.getElementById('submit_button')
const result_section = document.getElementById('result_section')
const img_loading = document.querySelector('.img_loading')



submit_button.addEventListener('click', () => {
   
    if (intial_prize.value == 0 && current_price.value == 0 && quantity.value == 0) {
        result_section.innerHTML=''
        result_section.style['margin-top']='3vh'
        return   result_section.innerHTML = 'No gain and no loss'
    }
    if (!intial_prize.value || !current_price.value || !quantity.value) {
        result_section.innerHTML=''
        result_section.style['color']='black'
        result_section.style['margin-top']='3vh'
        return   result_section.innerHTML = 'Opps..Enter valid data  😑'
    }
    img_loading.style.display = 'block'
    result_section.innerHTML = ''
    setTimeout(() => {
        img_loading.style.display = 'none'
        
        if(intial_prize.value <= 0 || current_price.value  <=  0 || quantity.value <= 0){
            result_section.style['color']='black'
            result_section.style['margin-top'] = '3vh'
            return   result_section.innerHTML = 'Opps..Enter valid data 😑'
        }
       
        const intial_total = intial_prize.value * quantity.value
        const current_total = current_price.value * quantity.value
        
        if (intial_total > current_total) {
            
            const diff_in_rupees = intial_total - current_total 
            const diff_in_percentage = Math.abs((((intial_total - diff_in_rupees ) / intial_total)*100 )-100)
            result_section.style['margin-top'] = '3vh'
            result_section.style.color = 'red'
            result_section.innerHTML = `Your loss is -${diff_in_rupees} rupee and -${diff_in_percentage.toFixed(2)}% 😥`
        }else{
            const diff_in_rupees = current_total - intial_total 
            const diff_in_percentage = (((intial_total + diff_in_rupees ) / intial_total)*100)-100
            result_section.style['margin-top'] = '3vh'
            result_section.style.color = 'green'
            result_section.innerHTML = `Your profit is ${diff_in_rupees} rupee and ${diff_in_percentage.toFixed(2)}% 🎉 🤑`
        }
    },1000)
   
    
})