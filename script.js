const emails = [];

function joinWaitlist(source){
    const input = document.getElementById(source === 'hero'? 'hero-email': 'cta-email' );
    const email = input.value.trim();

    if(!email || !email.includes('@')){
        input.style.border ='1.5px solid red';
        input.focus();
        return;
    }

    fetch('https://formspree.io/f/xzdwdowv', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, source: source })
    });


    if(source==='hero') {
        document.getElementById('hero-form').style.display = 'none';
        const success = document.getElementById('hero-success');
        success.style.display ='flex';
    } else {
        document.getElementById('cta-form-wrap').style.display = 'none';
        const success = document.getElementById('cta-success');
        success.style.display = 'flex';
    }

}

document.getElementById('hero-email').addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        joinWaitlist('hero');
    }

});
document.getElementById('cta-email').addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        joinWaitlist('cta');
    }

});