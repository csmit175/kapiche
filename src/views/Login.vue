<template>
  <div class="login">
    <div class="form-container">
      <h2 class="title">Log in to Kapiche</h2>
      <p class="body">Dont't have an account? <a class="link" href="">Sign up here</a></p>
      <form class="form">
        <div class="validation-message" v-if="validationMessage !== ''">
          {{validationMessage}}
        </div>
        <label class="label">
          Email
        </label>
        <input class="input" v-model="email" type="text" v-bind:class="{'error': emailError}"/>
        <label class="label">
          Password
        </label>
        <input class="input" v-model="password" type="password" v-bind:class="{'error': passwordError}"/>
        <button class="button" v-on:click="handleLogIn">Log in</button>
      </form>
      <a class="link" href="">Forgot password?</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      validationMessage: '',
      emailError: false,
      passwordError: false
    }
  },
  methods: {
    handleLogIn() {
      if (this.validate()) {
        this.$router.push('nps')
      }
    },
    validate() {
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const email = this.email;
      const password = this.password;
      if (!emailRegex.test(email) && password === "incorrect" || emailRegex.test(email) && password === "incorrect" ) {
        this.validationMessage = 'Email or password is incorrect.';
        this.emailError = true;
        this.passwordError = true;
        return false;
      } else if (!emailRegex.test(email) && password !== "incorrect") {
        this.validationMessage = 'Please enter a valid email address.';
        this.emailError = true;
        this.passwordError = false;
        return false;
      } else {
        this.validationMessage = '';
        this.emailError = false;
        this.passwordError = false;
        return true;
      }
    }
  }
}
</script>

<style lang="scss">
.login {
  width: 467px;
  box-shadow: 0px 1px 5px 0 rgba(0, 1, 1, 0.1);
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
  padding: 60px 84px;
  .form-container {
    .title {
      font-size: 40px;
      font-weight: 900;
      text-align: center;
      color: #383838;
      margin-bottom: 18px;
    }
    .body {
      font-size: 16px;
      line-height: 1.63;
      text-align: center;
      color: #383838;
      margin-bottom: 42px;
      .link {
        color: #068ccc;
        text-decoration: none;
      }
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 27px;
      .validation-message {
        width: calc(100% - 18px);
        height: 25px;
        border: solid 1px #ee3824;
        background-color: #fff3f3;
        text-align: left;
        padding: 18px 0px 18px 18px;
        margin-bottom: 29px;
      }
      .label {
        font-size: 18px;
        color: #383838;
        margin-bottom: 14px;
      }
      .input {
          width: calc(100% - 22px);
          height: 47px;
          border-radius: 5px;
          border: solid 1px #d8d8d8;
          background-color: #f9f9f9;
          font-size: 18px;
          padding-left: 22px;
          margin-bottom: 26px;
        &.error {
          border: solid 1px #ee3824;
        }
        &:focus {
          outline: none;
        }
      }
      .button {
        width: 220px;
        height: 56px;
        border-radius: 5px;
        margin-top: 11px;
        margin: auto;
        font-family: Lato;
        font-size: 20px;
        color: #ffffff;
        border: 0px;
        background-image: linear-gradient(to top, #0684c1, #1c96d1);
      }
    }
    .link {
      color: #068ccc;
      text-decoration: none;
    }
  }
}
</style>