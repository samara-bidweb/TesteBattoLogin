<template>
  <form @submit.prevent="Submit" class="login-form">
    <Grid container direction="column" justify-content="center" alignItems="center">
      <Grid item>
        <Box mt={3}>
          <img src="icone.png" alt="Ícone" />
        </Box>
      </Grid>
      <Grid item >
        <Typography variant="h5" component="h1" textAlign="center">
          Test Login Batto
        </Typography>
      </Grid>
      <Grid item>
        <Box mt={3}>
          <InputLabel htmlFor="uname">Email</InputLabel>
          <Input type="email" placeholder="Enter Email" v-model="form.email" required />
        </Box>
      </Grid>
      <Grid item>
        <Box mt={3}>
          <InputLabel htmlFor="psw">Password</InputLabel>
          <Input type="password" placeholder="Enter Password" v-model="form.password" required />
        </Box>
      </Grid>
      <Grid item>
        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  </form>
</template>

<script>

  import { Box, Button, Grid, Input, InputLabel, TextField, Typography } from '@mui/material';

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
              this.$store.commit('login', this.form.email)
          }
      }
  }
</script>