$(document).ready(function() {
    // Ativar tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // Modal de assinatura
    $('#subscriptionForm').submit(function(e) {
        e.preventDefault();
        alert('Obrigado por assinar a Vision Press! Entraremos em contacto em breve.');
        $('#subscriptionModal').modal('hide');
    });
    
    // Formulário WhatsApp
    $('#whatsappForm').submit(function(e) {
        e.preventDefault();
        alert('Obrigado! Você receberá nossas notícias no WhatsApp em breve.');
        this.reset();
    });
    
    // Destaque para a seção atual na navegação
    var currentPage = window.location.pathname.split('/').pop();
    $('.navbar-nav .nav-link').each(function() {
        var linkPage = $(this).attr('href');
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });
    
    // Efeito de hover nas notícias
    $('.news-item').hover(
        function() {
            $(this).css('transform', 'translateY(-5px)');
            $(this).css('box-shadow', '0 5px 15px rgba(0,0,0,0.1)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
            $(this).css('box-shadow', 'none');
        }
    );
});
// Controle do Modal com JavaScript puro
document.addEventListener('DOMContentLoaded', function() {
    // Controle do formulário
    const subscriptionForm = document.getElementById('subscriptionForm');
    
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const fullName = document.getElementById('fullName').value;
            const contact = document.getElementById('contact').value;
            const email = document.getElementById('email').value;
            
            if (!fullName || !contact || !email) {
                alert('Por favor, preencha todos os campos obrigatórios');
                return;
            }
            
            // Obter valores do formulário
            const receiveMethod = document.getElementById('receiveMethod').value;
            const subscriptionDuration = document.getElementById('subscriptionDuration').value;
            const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
            
            // Aqui você pode adicionar o código para enviar os dados
            console.log('Dados da assinatura:', {
                fullName,
                contact,
                email,
                receiveMethod,
                subscriptionDuration,
                paymentMethod
            });
            
            // Mostrar mensagem de sucesso
            alert('Obrigado por assinar a Vision Press! Entraremos em contacto em breve.');
            
            // Fechar o modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('subscriptionModal'));
            modal.hide();
            
            // Limpar formulário
            subscriptionForm.reset();
        });
    }
    
    // Ativar tooltips (se necessário)
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});