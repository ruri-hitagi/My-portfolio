

(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('Oi0fPGFkiVO3CAfzU');
})();


const btn = document.getElementById('btn');
const btnText = document.getElementById('btn-text');
const form = document.getElementById('contact-form');

window.onload = function() {
    // document.getElementById('contact-form').

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_wv33ut9', 'template_y32pik7', this)
            .then(function() {
                console.log('SUCCESS!');
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}


form.addEventListener('submit', () =>{
  btnText.classList.toggle('hidden');
});



