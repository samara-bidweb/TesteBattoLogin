<template>
    <form  @submit="Submit" method="post" class="login-form">
        <h1>Test Login Batto</h1>
        <p>
            <label for="uname"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" v-model="form.email" required>
        </p>
        <p>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" v-model="form.password" required>
        </p>
        <button type="submit">Login</button>
    </form>
    <br>
    <!--{{$store.state.email}}-->
</template>

<script>
    export default {
        data() {
          return {
            form: {
                  email:"",
                  password:""
                }
            }
        },
        methods :{
            Submit(event){
                event.preventDefault()
                this.$router.push('/about')
                this.$store.commit('login',this.form.email)
            }
        }
    }
</script>

<style scoped>

.login-form {
  align-items: center;
  justify-content: center;
}

.login-form label {
  font-weight: bold;
}

.login-form p {
  margin: 15px 0;
}

.login-form input {
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.login-form button {
  padding: 10px;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px hsla(160, 100%, 37%, 1);
  cursor: pointer;
}

.login-form button:hover {
  background-color: rgb(16, 124, 88);
}

.login-form input:focus {
  outline: none;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

</style>