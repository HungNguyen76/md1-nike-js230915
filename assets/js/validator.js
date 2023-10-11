function Validator(options) {

    var formElement = document.querySelector(options.form)

    if(formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            if( typeof options.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]')
                var formValues = Array.from(enableInputs).reduce(function (values, input){
                    switch(input.type) {
                        default:
                            values[input.name] = input.value
                    }
                    return values;
                }, {})
                options.onSubmit(formValues)
            }
        }
    }
}
