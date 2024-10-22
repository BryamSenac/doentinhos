document.getElementById('login-button').addEventListener('click', function() {
    const loading = document.getElementById('loading');
    loading.style.display = 'flex'; 
    setTimeout(() => {
        loading.style.display = 'none'; 
        alert('Login realizado com sucesso!'); 
    }, 2000); 
});