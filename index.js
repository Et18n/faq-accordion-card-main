


// document.addEventListener('DOMContentLoaded', () => {
//     let questions = document.querySelectorAll('.q');
    
//     questions.forEach(question => {
//         question.addEventListener('click', () => {
//             let answer = question.nextElementSibling;
//             question.classList.toggle('q_active')
//                 answer.classList.toggle('hidden');
//                 btns.forEach((btn)=>{
//                     btn.querySelector('faq_btn').classList.toggle('hidden')
//                 })
            
//     });
//     });
// })

document.addEventListener('DOMContentLoaded', () => {
    const faqElements = document.querySelectorAll('.faq');

    faqElements.forEach(faq => {
        const question = faq.querySelector('.q');
        const answer = faq.querySelector('.ans');
        const button = faq.querySelector('.faq_btn');

        button.addEventListener('click', () => {
            question.classList.toggle('q_active')
                
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                question.classList.add('active');
                button.classList.add('active'); 
            } else {
                answer.classList.add('hidden');
                question.classList.remove('active');
                button.classList.remove('active'); 
            }
            button.classList.toggle('rotate_btn')
        });
        question.addEventListener('click', () => {
                let answer = question.nextElementSibling;
                question.classList.toggle('q_active')
                answer.classList.toggle('hidden');
    });
})})