// Javascript elements - how to check input element is present at some level

let parentElement = document.querySelectorAll('div');
if (parentElement) {
  parentElement.forEach((element, index) => {
    if (index == 2) {
        let inputElement = element.querySelector("input");
        if (inputElement) {
            if (inputElement.contains(inputElement)) {
                const debouncedCallAPI = debounce(callAPI, 500);
                inputElement.addEventListener('input', debouncedCallAPI);
                function callAPI(e) {
                    // Time consuming API call
                    console.log(e.target.value);
                }
           }
        }
    }
  });
}


function debounce(callback, timer) {
  let timeoutId;

  return (...args) => {
    // save the current context (this)
    const context = this;

    // clear the existing timeout
    clearTimeout(timeoutId);

    // create a new timeout
    timeoutId = setTimeout(() => {
      callback.apply(context, args);
    }, timer);
  };
}


// console.log(processChange);



