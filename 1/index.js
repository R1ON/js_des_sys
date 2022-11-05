// 1. Кнопка
// 2. Отслеживаем клик
// 3. Затемняем экран
// 4. Поверх темного экрана рисуем модальное окно
// 5. В модальном окне отрисовываем разные кнопки
// 6. Вешаем клик на каждую из кнопок в модальном окне
// 7. Отслеживаем клик на затемненную область


const openModalButton = document.getElementById('open_modal');
// const openModalButton = document.querySelector('#open_modal');

openModalButton.addEventListener('click', () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'modalWrapper';

    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    backdrop.addEventListener('click', () => {
        closeModal();
    });

    wrapper.appendChild(backdrop);

    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal';

    const cross = createModalButton('modalCross', 'X', closeModal);
    const buttonOk = createModalButton('modalOkButton', 'ОК', closeModal);
    const buttonCancel = createModalButton('modalCancelButton', 'Отмена', closeModal);

    modalContainer.appendChild(cross);
    modalContainer.appendChild(buttonOk);
    modalContainer.appendChild(buttonCancel);

    
    wrapper.appendChild(modalContainer);

    document.body.appendChild(wrapper);

    // const backdrop = document.querySelector('.backdrop');
    // backdrop.style.display = 'initial';
});

function createModalButton(className, text, func) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.className = className;
    button.innerText = text;
    button.addEventListener('click', () => {
        func();
    });

    return button;
}

function closeModal() {
    const modal = document.querySelector('.modalWrapper');

    if (!modal) {
        console.error('Але, что ты там пытаешь закрыть?!!');
        return;
    }

    modal.remove();
}
