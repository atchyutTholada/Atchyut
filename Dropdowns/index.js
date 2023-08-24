const colorSelect = document.getElementById('colorSelect')
const bgColorSelect = document.getElementById('bgColorSelect')
const paddingSelect = document.getElementById('paddingSelect')
const fontSizeSelect = document.getElementById('fontSizeSelect');
const fontWeightSelect = document.getElementById('fontWeightSelect');
const styledDiv = document.getElementById('styledDiv');

colorSelect.addEventListener('change', ()=>{
    styledDiv.style.color= colorSelect.value;
})

bgColorSelect.addEventListener('change',()=>{
    styledDiv.style.backgroundColor =  bgColorSelect.value ;
})

paddingSelect.addEventListener('change',()=>{
    styledDiv.style.paddingSelect = paddingSelect.value;
})

fontSizeSelect.addEventListener('change', () => {
    styledDiv.style.fontSize = fontSizeSelect.value;
  });

fontWeightSelect.addEventListener('change', () => {
    styledDiv.style.fontWeight = fontWeightSelect.value;
  });