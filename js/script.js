document.addEventListener('DOMContentLoaded', function () {
    // Animação de entrada dos cards
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + i * 120);
    });

    // Efeito pulsar nos botões
    document.querySelectorAll('.central-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => btn.classList.add('pulse'));
        btn.addEventListener('mouseleave', () => btn.classList.remove('pulse'));
    });
});document.addEventListener('DOMContentLoaded', function () {
            // Animação de entrada dos cards
            const cards = document.querySelectorAll('.event-card');
            cards.forEach((card, i) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(40px)';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 200 + i * 120);
            });

            // Efeito pulsar nos botões
            document.querySelectorAll('.central-btn').forEach(btn => {
                btn.addEventListener('mouseenter', () => btn.classList.add('pulse'));
                btn.addEventListener('mouseleave', () => btn.classList.remove('pulse'));
            });
        });