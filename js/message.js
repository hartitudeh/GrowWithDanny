document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    console.log(name)
  
    const whatsappNumber = '2347083777336';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent( subject + ' - My name is ' + name + ', ' + message)}`;
  
    window.open(whatsappLink, "_blank");
  });
  