document.getElementById('add-btn').addEventListener('click', addTask);
document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn">Remove</button>
        `;

        li.querySelector('span').addEventListener('click', () => {
            li.classList.toggle('complete');
        });

        li.querySelector('.remove-btn').addEventListener('click', () => {
            li.remove();
        });

        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
}
