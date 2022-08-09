const input1Element = document.querySelector("#input1");
const input2Element = document.querySelector("#input2");
const addButtonElement = document.querySelector("button");
const add = (v1, v2) => v1 + v2;
addButtonElement.addEventListener("click", () => {
    const sum = add(Number(input1Element.value), Number(input2Element.value));
    console.log(sum);
});
const logAge = (age) => {
    console.log(`Hej mam ${age} lat!`);
};
logAge("dwadzieścia osiem");
const buttonElement = document.querySelector("#buy");
const calculatePrice = (originalPrice, hasDiscount) => {
    return hasDiscount ? originalPrice * 0.8 : originalPrice;
};
buttonElement.addEventListener("click", () => {
    const originalPrice = 50;
    const hasDiscount = new URLSearchParams(window.location.search).get("discount") === "true";
    console.log(calculatePrice(originalPrice, hasDiscount));
});
