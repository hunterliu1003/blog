<template lang="pug">
  v-content
    v-container
      v-layout
        v-flex.sm6.offset-sm3.mt-5
          v-text-field(
            v-model="email"
            label="Email"
            :error-messages="validation.firstError('email')"
            :error="validation.hasError('email')"
            color="white"
            autofocus
            ref="email"
          )
          v-text-field(
            v-model="password"
            label="Password"
            :error-messages="validation.firstError('password')"
            :error="validation.hasError('password')"
            color="white"
            type="password"
            @keydown.enter="signIn"
          )
          p.red--text(v-if="error") Email 或 密碼錯誤！
          v-layout
            v-spacer
            v-btn(@click="signIn") 登入
</template>

<script>
import Vue from 'vue'
import SimpleVueValidation from 'simple-vue-validator'
const Validator = SimpleVueValidation.Validator

Vue.use(SimpleVueValidation, { mode: 'conservative' })

export default {
  layout: 'admin',
  data: vm => ({
    email: '',
    password: '',
    error: false,
  }),
  validators: {
    email: value => Validator.value(value).required().email(),
    password: value => Validator.value(value).required()
  },
  methods: {
    signIn () {
      this.$validate()
        .then(success => {
          if (success) {
            this.$store.dispatch('auth/signInWithEmail', {
              email: this.email,
              password: this.password
            })
              .then(user => {
                if (user) {
                  this.error = false
                  this.$router.push('/admin')
                } else {
                  this.email = ''
                  this.password = ''
                  this.error = true
                  this.$refs.email.focus()
                  this.validation.reset()
                }
              })
          }
        })
    }
  }
}
</script>
