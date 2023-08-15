const value = document.querySelector("#value");
const container = document.querySelector('.button__container');

let count = 0;

const handleContainerClick = (e) => {
    const eventName = e.target.dataset.action;

    if (eventName) {
        switch (eventName) {
            case 'decrease':
                count--;
                break;
            case 'reset':
                count = 0;
                break;
            case 'increase':
                count++;
                break;
            default:
                return;
        }

        value.innerHTML = count;
        if (count > 0) {
            value.style.color = 'lightgreen'
        } else if (count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = 'black'
        }
    }
}

container.addEventListener('click', handleContainerClick);