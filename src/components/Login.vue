<!-- eslint-disable -->
<template>
	
	<v-container class="my-10">
		<v-row class="my-10">
		<!-- First Card -->
		<v-col>
				<v-card 
				class="mx-auto mt-9 description"
				color="register"
				elevation="5"
				max-width="500"
				outlined>
					<v-card-title class="text-center mt-8">
					<h5>Sign up</h5>
					</v-card-title>
					<v-form class="mx-5 my-5" @submit.prevent="register">
						
						<v-text-field 
							type="email" 
							color="secondary" 
							label="Email address"
							v-model="register_form.email" />
						<v-text-field
							type="password" 
							color="secondary" 
							label="Password" 
							v-model="register_form.password" />
						<!-- <input 
							type="submit" 
							value="Register" />
							<div class="text-center"> -->
								<v-card-actions>
						<v-col class="text-center">
						
							<v-btn
							class="mr-4"
							type="submit" 
							value="Register"
							elevation="4"
							color="black"
							plain
							rounded
							>
							Submit
							</v-btn>
					
						</v-col>
					</v-card-actions>
					</v-form>
					
				</v-card>
				</v-col>

				<v-col>
					<v-card 
					class="mx-auto mt-9 description"
					color="login"
					elevation="5"
					max-width="500"
					outlined>
					<v-card-title class="text-center mt-8">
					<h5>Login</h5>
					</v-card-title>
						<v-form class="mx-5 my-5" @submit.prevent="login">
							<v-text-field
								type="email"
								color="secondary" 
								label="Email address"
								v-model="login_form.email" />
							<v-text-field
								type="password" 
								color="secondary" 
								label="Password" 
								v-model="login_form.password" />
								<v-card-actions>
							<v-col class="text-center">
								
								<v-btn
								class="mr-4"
								type="submit" 
								value="Login"
								color="black"
								elevation="4"
								plain
								rounded
								>
								Login
								</v-btn>
							
							</v-col>
						</v-card-actions>
						</v-form>	
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
	setup () {
		const login_form = ref({});
		const register_form = ref({});
		const store = useStore();
		const login = () => {
			store.dispatch('login', login_form.value);
		}
		const register = () => {
			store.dispatch('register', register_form.value);
		}
		return {
			login_form,
			register_form,
			login,
			register
		}
	}
}
</script>

<style>
.description {
  text-align: center;
}

h5 {
  font-weight: 350;
  font-size: 35px;
  letter-spacing: 4px;
}

button:hover,
button:focus {
  color: rgb(30, 89, 156);
}

button {
  text-decoration: none;

  font-weight: 550;
  color: black;
}

</style>