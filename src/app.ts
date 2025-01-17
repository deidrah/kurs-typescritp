const input1Element: HTMLInputElement = document.querySelector("#input1");
const input2Element: HTMLInputElement = document.querySelector("#input2");
const addButtonElement = document.querySelector("button");

const add = (v1: number, v2: number) => v1 + v2;

addButtonElement.addEventListener("click", () => {
  const sum = add(Number(input1Element.value), Number(input2Element.value));
  console.log(sum);
});

const logAge = (age: number | string) => {
  console.log(`Hej mam ${age} lat!`);
}

logAge("dwadzieścia osiem");

const buttonElement: HTMLInputElement = document.querySelector("#buy");

const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
  return hasDiscount ? originalPrice*0.8 : originalPrice;
}

buttonElement.addEventListener("click", () => {
  const originalPrice: number = 50;
  const hasDiscount: boolean = new URLSearchParams(window.location.search).get("discount") === "true";
  console.log(calculatePrice(originalPrice,hasDiscount));
})