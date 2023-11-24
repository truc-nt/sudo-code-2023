function handleSubmit(e) {
    e.preventDefault(); 
    e.stopPropagation();

    var validEmaikRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validPhoneRegex = /^[0-9]{10}$/;

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    try {
        if (!validEmaikRegex.test(email)) {
            throw new Error('Invalid email');
        }
        if (!validPhoneRegex.test(phone)) {
            throw new Error('Invalid phone');
        }
    } catch (error) {
        alert(error.message);
        return false;
    }

    alert('Success');
}