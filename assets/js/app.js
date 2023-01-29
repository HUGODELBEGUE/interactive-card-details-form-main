import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        // Default values
        const DEFAULT_VALUES = {
            num: '0000 0000 0000 0000',
            name: 'Jane Appleseed',
            month: '00',
            year: '00',
            cvc: '000'
        };
        return {
            default_values: DEFAULT_VALUES,
            // Inputs
            inputs: {
                name: '',
                number: '',
                month: '',
                year: '',
                cvc: ''
            },
            // Errors
            noName: false,
            noNumber: false,
            noMonth: false,
            noYear: false,
            noCvc: false,
            borderName: '',
            borderNumber: '',
            borderMonth: '',
            borderYear: '',
            borderCvc: '',
            // Form
            valid: false
        }
    },
    mounted() {
        this.$refs.nam.focus()
    },
    computed: {
        // Adding spaces in the number entry view
        numberSpaces() {
            const number = this.inputs.number;
            const formattedNumber = number.replace(/\d{4}(?=\d)/g, "$& ");
            this.inputs.number = formattedNumber;
            return formattedNumber;
        },
        // Checking input values
        nameChecked() {
            return this.inputs.name.trim();
        },
        numberChecked() {
            return parseInt(this.inputs.number.trim());
        },
        monthChecked() {
            return parseInt(this.inputs.month.trim());
        },
        yearChecked() {
            return parseInt(this.inputs.year.trim());
        },
        cvcChecked() {
            return parseInt(this.inputs.cvc.trim());
        },
        // Adding class to inputs
        className() {
            return {
                errorsColor: (this.inputs.name.length < 2) && this.inputs.name != '',
                normalColor: this.inputs.name.length >= 2
            }
        },
        classNumber() {
            return {
                errorsColor: (isNaN(this.numberChecked) && this.inputs.number != '') || (this.inputs.number.length < 16 && this.inputs.number != ''),
                normalColor: this.inputs.number.length == 19 && !isNaN(this.numberChecked)
            }
        },
        classMonth() {
            return {
                errorsColor: isNaN(this.monthChecked) && this.inputs.month != '' || this.monthChecked > 12,
                normalColor: this.inputs.month.length == 2 && !isNaN(this.monthChecked) && this.monthChecked <= 12
            }
        },
        classYear() {
            return {
                errorsColor: isNaN(this.yearChecked) && this.inputs.year != '',
                normalColor: this.inputs.year.length == 2 && !isNaN(this.yearChecked)
            }
        },
        classCvc() {
            return {
                errorsColor: (isNaN(this.cvcChecked) && this.inputs.cvc != '') || (this.inputs.cvc.length < 3 && this.inputs.cvc != ''),
                normalColor: this.inputs.cvc.length == 3 && !isNaN(this.cvcChecked)
            }
        },
    },
    methods: {
        // Changes the focus of the inputs
        focusInputs(input) {
            if (input == 'nam') {
                this.$refs.num.focus();
            } else if (input == 'num') {
                this.$refs.mon.focus();
            }
            else if (input == 'mon') {
                this.$refs.yea.focus();
            }
            else if (input == 'yea') {
                this.$refs.cvc.focus();
            }
            else {
                this.$refs.con.focus();
            }
        },
        validForm() {
            this.valid = false;
            this.noName = false;
            this.borderName = '';
            this.noNumber = false;
            this.borderNumber = '';
            this.noMonth = false;
            this.borderMonth = '';
            this.noYear = false;
            this.borderYear = '';
            this.noCvc = false;
            this.borderCvc = '';

            if (this.nameChecked.length == 0) {
                this.noName = true;
                this.borderName = 'errorsColor';
            } else if (this.inputs.number.length < 16 || isNaN(this.numberChecked)) {
                this.noNumber = true;
                this.borderNumber = 'errorsColor';
            } else if (isNaN(this.monthChecked) || this.monthChecked > 12) {
                this.noMonth = true;
                this.borderMonth = 'errorsColor';
            } else if (isNaN(this.yearChecked)) {
                this.noYear = true;
                this.borderYear = 'errorsColor';
            } else if (this.inputs.cvc.length < 3 || isNaN(this.cvcChecked)) {
                this.noCvc = true;
                this.borderCvc = 'errorsColor';
            } else {
                this.valid = true;
            }
        },
        reload() {
            location.reload();
        }
    }
}).mount('#app')
