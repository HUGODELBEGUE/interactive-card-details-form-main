import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            // Inputs
            inputs__default: {
                default__num: '0000 0000 0000 0000',
                default__name: 'Jane Appleseed',
                default__month: '00',
                default__year: '00',
                default__cvc: '000'
            },
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
            let number = this.inputs.number;
            let reg = /([0-9]{4})([0-9]{4})([0-9]{4})([0-9]{4})/;
            number = number.replace(reg, '$1 $2 $3 $4');
            this.inputs.number = number;
            return this.inputs.number;
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
                normalColor: this.inputs.number.length == 16 && !isNaN(this.numberChecked)
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
            if (this.nameChecked.length == 0) {
                console.log('name:', this.nameChecked)
                this.borderName = 'errorsColor';
                this.noName = true;
                return false;
            } else if (this.inputs.number.length < 16 || isNaN(this.numberChecked)) {
                console.log('number:', this.numberChecked)
                this.borderNumber = 'errorsColor';
                this.noNumber = true;
                return false;
            } else if (isNaN(this.monthChecked)) {
                console.log('month:', this.monthChecked)
                this.borderMonth = 'errorsColor';
                this.noMonth = true;
                return false;
            } else if (isNaN(this.yearChecked)) {
                console.log('year:', this.yearChecked)
                this.borderYear = 'errorsColor';
                this.noYear = true;
                return false;
            } else if (this.inputs.cvc.length < 3 || isNaN(this.cvcChecked)) {
                console.log('cvc:', this.cvcChecked)
                this.borderCvc = 'errorsColor';
                this.noCvc = true;
                return false;
            } else {
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
                this.valid = true;
            }

        },
        reload() {
            location.reload();
        }
    }
}).mount('#app')
