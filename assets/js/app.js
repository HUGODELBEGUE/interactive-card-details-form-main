import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            // Inputs
            default__num: '0000 0000 0000 0000',
            default__name: 'Jane Appleseed',
            default__month: '00',
            default__year: '00',
            default__secretnum: '000',
            name: '',
            number: '',
            month: '',
            year: '',
            cvc: '',
            // Errors
            borderRed: '',
            monthError: false,
            yearError: false,
            cvcError: false,
        }
    },
    computed: {
        nameClean() {
            return this.name.trim();
        },
        numberClean() {
            let number = parseInt(this.number.trim());
            return number;
        },
        monthClean() {
            let month = parseInt(this.month.trim());
            return month;
        },
        yearClean() {
            let year = parseInt(this.year.trim());
            return year;
        },
        cvcClean() {
            let cvc = parseInt(this.cvc.trim());
            return cvc;
        },
        showErrors() {
            return {
                errorsInputs: (isNaN(this.numberClean) && this.number != '') ||
                    (isNaN(this.monthClean) && this.month != '') ||
                    (isNaN(this.yearClean) && this.year != '') ||
                    (isNaN(this.cvcClean) && this.cvc != ''),
            }
        },
        test() {
            console.log(this.numberClean)
        }
    },
    methods: {
        validForm() {
            if (this.nameClean && this.numberClean && this.monthClean && this.yearClean && this.cvcClean) {
                console.log('formulaire valide')
                return true;
            }
            if (isNaN(this.monthClean)) {
                this.borderRed = 'errorsInputs';
                this.monthError = true;
                return false;
            }
            this.monthError = false;
            this.borderRed = '';
            if (isNaN(this.yearClean)) {
                this.borderRed = 'errorsInputs';
                this.yearError = true;
                return false;
            }
            this.yearError = false;
            this.borderRed = '';
            if (isNaN(this.cvcClean)) {
                this.borderRed = 'errorsInputs';
                this.cvcError = true;
                return false;
            }
            this.cvcError = false;
            this.borderRed = '';
            console.log('formulaire valide')
        }
    }
}).mount('#app')
