document.addEventListener('DOMContentLoaded', function() {
    const addRowButton = document.getElementById('add-row');
    const cardModal = document.getElementById('card-modal');
    const closeBtn = document.querySelector('.close-btn');
    const saveCardButton = document.getElementById('save-card');

    addRowButton.addEventListener('click', addRow);
    closeBtn.addEventListener('click', () => cardModal.style.display = 'none');
    saveCardButton.addEventListener('click', saveCard);

    function addRow() {
        const timelineBody = document.getElementById('timeline-body');
        const row = document.createElement('div');
        row.classList.add('row');
        row.innerHTML = `
            <div class="card">Click to add card</div>
            <button class="add-card">+</button>
        `;
        row.querySelector('.add-card').addEventListener('click', () => {
            cardModal.style.display = 'block';
        });
        timelineBody.appendChild(row);
    }

    function saveCard() {
        const title = document.getElementById('card-title').value;
        const color = document.getElementById('card-color').value;
        const status = document.getElementById('card-status').value;
        const assignee = document.getElementById('card-assignee').value;
        const startDate = document.getElementById('card-start-date').value;
        const endDate = document.getElementById('card-end-date').value;
        const tags = document.getElementById('card-tags').value;
        const details = document.getElementById('card-details').value;

        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.style.backgroundColor = color;
        newCard.innerHTML = `<strong>${title}</strong><br>Status: ${status}<br>Assignee: ${assignee}<br>Start Date: ${startDate}<br>End Date: ${endDate}<br>Tags: ${tags}<br>Details: ${details}`;
        
        const rows = document.querySelectorAll('.row');
        rows[rows.length - 1].insertBefore(newCard, rows[rows.length - 1].querySelector('.add-card'));
        cardModal.style.display = 'none';
    }
});
