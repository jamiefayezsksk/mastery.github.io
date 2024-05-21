document.addEventListener('DOMContentLoaded', function() {
    // Glide initialization
    new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        autoplay: 5000
    }).mount();

    // Modal functionality
    const modalButtons = document.querySelectorAll('.modal-button');
    const modals = document.querySelectorAll('.modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            if (modalId === 'projects-modal') {
                const iframe = document.createElement('iframe');
                iframe.src = 'https://knowtifyreact-40261.web.app/';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.border = 'none';
                document.getElementById(modalId).querySelector('.modal-content').innerHTML = '';
                document.getElementById(modalId).querySelector('.modal-content').appendChild(iframe);
            }
            document.getElementById(modalId).classList.remove('hidden');
        });
    });

    // Event listener specifically for the "Knowtify Project" card
    document.querySelector('#projects-modal .section-title').addEventListener('click', () => {
        const modalId = 'projects-modal';
        const iframe = document.createElement('iframe');
        iframe.src = 'https://knowtifyreact-40261.web.app/';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        document.getElementById(modalId).querySelector('.modal-content').innerHTML = '';
        document.getElementById(modalId).querySelector('.modal-content').appendChild(iframe);
        document.getElementById(modalId).classList.remove('hidden');
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').classList.add('hidden');
            // Reset iframe content when modal is closed
            if (button.closest('.modal').id === 'projects-modal') {
                document.getElementById('projects-modal').querySelector('.modal-content').innerHTML = '';
            }
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                // Reset iframe content when modal is closed
                if (modal.id === 'projects-modal') {
                    document.getElementById('projects-modal').querySelector('.modal-content').innerHTML = '';
                }
            }
        });
    });

    // Disable card scrolling on smaller screens
    function disableCardScrolling() {
        const cardContainers = document.querySelectorAll('.other-cards');
        cardContainers.forEach(container => {
            container.style.overflowY = 'hidden';
        });
    }

    function enableCardScrolling() {
        const cardContainers = document.querySelectorAll('.other-cards');
        cardContainers.forEach(container => {
            container.style.overflowY = 'auto';
        });
    }

    function handleCardScrolling() {
        if (window.innerWidth <= 767) {
            disableCardScrolling();
        } else {
            enableCardScrolling();
        }
    }

    // Initial call to set initial state
    handleCardScrolling();

    // Listen for resize events to adjust card scrolling
    window.addEventListener('resize', handleCardScrolling);
});