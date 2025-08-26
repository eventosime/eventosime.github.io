        // Countdown Timer
        function startCountdown() {
            const countdownDate = new Date().getTime() + (23 * 24 * 60 * 60 * 1000); // 23 days from now
            
            const timer = setInterval(function() {
                const now = new Date().getTime();
                const distance = countdownDate - now;
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                document.getElementById("days").innerHTML = days;
                document.getElementById("hours").innerHTML = hours;
                document.getElementById("minutes").innerHTML = minutes;
                document.getElementById("seconds").innerHTML = seconds;
                
                if (distance < 0) {
                    clearInterval(timer);
                    document.querySelector('.countdown').style.display = 'none';
                }
            }, 1000);
        }

        // FAQ Toggle - Usando event listeners em vez de onclick inline
        document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', function() {
                    const answer = this.nextElementSibling;
                    const isActive = answer.classList.contains('active');
                    
                    // Fechar todas as outras respostas
                    document.querySelectorAll('.faq-answer').forEach(ans => {
                        ans.classList.remove('active');
                    });
                    
                    // Abrir/fechar a resposta clicada
                    if (!isActive) {
                        answer.classList.add('active');
                    }
                });
            });
        });

        // FAQ Toggle (função alternativa para compatibilidade)
        function toggleFaq(element) {
            const answer = element.nextElementSibling;
            answer.classList.toggle('active');
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Start countdown
        startCountdown();

        // Add scroll effect to cards
        window.addEventListener('scroll', function() {
            const cards = document.querySelectorAll('.plan-card');
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < window.innerHeight * 0.8) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        });