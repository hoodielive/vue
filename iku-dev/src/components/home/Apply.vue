<template>
    <div id="register" class="container py-4">
        <div class="row">
            <div class="col-12">
                <form @submit.prevent="onSubmit">
                    <BaseInput
                        label="First Name:"
                        v-model="form.firstName"
                    />
                    <BaseInput
                        label="Last Name:"
                        v-model="form.lastName"
                    />
                    <BaseInput
                        label="Email:"
                        v-model="form.email"
                        type="email"
                    />
                    <div class="form-group">
                        <button
                            :disabled="!formIsValid"
                            type="submit"
                            class="btn btn-primary"
                        >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import BaseInput from '@/components/home/BaseInput'

export default {
    name: 'register',
    components: { BaseInput },
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                email: '',
            }
        }
    },
    computed: {
        formIsValid() {
            return this.form.firstName.length > 0 && this.form.lastName.length > 0 && this.form.email.length > 0;
        }
    },
    methods: {
        onSubmit() {
            if ( !this.formIsValid ) return;

            axios.post('http://localhost:3000/dolphins', { params: this.form }).then(response => {
                console.log('Form has been posted.', response)
            }).catch(err => {
                console.log('An error occured', err)
            })
        }
    }
};
</script>

<style>
        form, button, input, select, textarea {
        font-family: inherit;
        font-size: 100%;
}
</style>
