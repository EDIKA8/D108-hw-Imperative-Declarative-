// იმპერიული პროგრამა: დეტალურად განსაზღვრავს, თუ როგორ უნდა განახლდეს Counter
let count = 0;  // ვიწყებთ 0-ით

const countElement = document.getElementById('count');  // ვხვდებით დომ ელემენტს, სადაც გამოსახება რიცხვი
const incrementButton = document.getElementById('increment');  // ვხვდებით Increment ღილაკს
const decrementButton = document.getElementById('decrement');  // ვხვდებით Decrement ღილაკს
const resetButton = document.getElementById('reset');  // ვხვდებით Reset ღილაკს

// აღწერილი ნაბიჯები, თუ როგორ უნდა გაიზარდოს მნიშვნელობა
incrementButton.addEventListener('click', () => {
    count++;  // ვზრდით მნიშვნელობას 1-ით
    countElement.textContent = count;  // განვაახლებთ UI-ს
});

// აღწერილი ნაბიჯები, თუ როგორ უნდა შემცირდეს მნიშვნელობა
decrementButton.addEventListener('click', () => {
    if (count > 0) {  // მხოლოდ მაშინ ვამცირებთ, თუ count > 0
        count--;  // ვამცირებთ მნიშვნელობას 1-ით
        countElement.textContent = count;  // განვაახლებთ UI-ს
    }
});

// აღწერილი ნაბიჯები, თუ როგორ უნდა განახლდეს მნიშვნელობა
resetButton.addEventListener('click', () => {
    count = 0;  // ვანულებთ count-ს
    countElement.textContent = count;  // განვაახლებთ UI-ს
});


// დეკლარაციული პროგრამა: აღწერს, რა უნდა შესრულდეს, არ განსაზღვრავს როგორ
import React, { useState } from 'react';

function Counter() {
    // ვსარგებლობთ useState ჰუკით, რათა მოვახდინოთ count-ის მდგომარეობის მართვა
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            {/* UI-ელიემენტის განახლება დამოკიდებულია count-ის მნიშვნელობაზე */}
            <div id="count">{count}</div>
            {/* აქ ვწერთ, რა უნდა მოხდეს ღილაკზე დაჭერისას */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;
