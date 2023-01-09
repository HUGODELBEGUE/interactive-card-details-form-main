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
        }
    },
    computed: {
        nameChecked() {
            return this.name.trim();
        },
        numberChecked() {
            return parseInt(this.number.trim());
        },
        monthChecked() {
            let month = parseInt(this.month.trim());
            return month;
        },
        yearChecked() {
            let year = parseInt(this.year.trim());
            return year;
        },
        cvcChecked() {
            let cvc = parseInt(this.cvc.trim());
            return cvc;
        },
        className() {
            return {
                errorsColor: (this.name.length < 2) && this.name != '',
                normalColor: this.name.length >= 2
            }
        },
        classNumber() {
            return {
                errorsColor: isNaN(this.numberChecked) && this.number != '',
                normalColor: this.number.length > 0 && !isNaN(this.numberChecked)
            }
        },
        classMonth() {
            return {
                errorsColor: isNaN(this.monthChecked) && this.month != '' || this.monthChecked > 12,
                normalColor: this.month.length == 2 && !isNaN(this.monthChecked) && this.monthChecked <= 12
            }
        },
        classYear() {
            return {
                errorsColor: isNaN(this.yearChecked) && this.year != '',
                normalColor: this.year.length == 2 && !isNaN(this.yearChecked)
            }
        },
        classCvc() {
            return {
                errorsColor: isNaN(this.cvcChecked) && this.cvc != '',
                normalColor: this.cvc.length == 3 && !isNaN(this.cvcChecked)
            }
        },
    },
    methods: {
        validForm() {
            if (this.nameChecked && this.numberChecked && this.monthChecked && this.yearChecked && this.cvcChecked) {
                console.log('formulaire valide1')
            } else {
                if (this.nameChecked.length == 0) {
                    console.log('this.nameChecked:', this.nameChecked)
                    this.borderName = 'errorsColor';
                    this.noName = true;
                    return false;
                }
                this.noName = false;
                this.borderName = '';
                if (isNaN(this.numberChecked)) {
                    console.log('this.numberChecked:', this.numberChecked)
                    this.borderNumber = 'errorsColor';
                    this.noNumber = true;
                    return false;
                }
                this.noNumber = false;
                this.borderNumber = '';
                if (isNaN(this.monthChecked)) {
                    console.log('this.monthChecked:', this.monthChecked)
                    this.borderMonth = 'errorsColor';
                    this.noMonth = true;
                    return false;
                }
                this.noMonth = false;
                this.borderMonth = '';
                if (isNaN(this.yearChecked)) {
                    console.log('this.yearChecked:', this.yearChecked)
                    this.borderYear = 'errorsColor';
                    this.noYear = true;
                    return false;
                }
                this.noYear = false;
                this.borderYear = '';
                if (isNaN(this.cvcChecked)) {
                    console.log('this.cvcChecked:', this.cvcChecked)
                    this.borderCvc = 'errorsColor';
                    this.noCvc = true;
                    return false;
                }
                this.noCvc = false;
                this.borderCvc = '';
            }
            console.log('formulaire valide2')
        }
    }
}).mount('#app')
