
const btns=document.querySelectorAll('.btn')


btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       const question =btn.closest('.question')
       const ans=question.querySelector('.ans')
       const q=question.querySelector('.q')
       ans.classList.toggle('hidden')
       q.classList.toggle('active')
       btn.classList.toggle('turn')
        
    })
})
    
