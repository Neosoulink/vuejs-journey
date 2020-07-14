<style src="./userStyle.scss" lang="scss"></style>
<template>
	<div>

		<div class="position-fixed z3 w-100 h-100 loader-user-action d-flex justify-content-center align-items-center" v-if="loading">
			<div class="spinner-grow text-light" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>

		<div class="py-2 container">
			<div class="row">
				<div class="col-md-3 mb-3" v-for="user in users" :key="user.id">
					<div class="card">
						<div class="card-header">
							<input type="text" v-model="user.name" class="form-control">
						</div>
						<div class="card-body">
							{{ user.name }} <br/>
							<a href="">Friends</a>
						</div>
						<div class="card-footer text-muted bg-white border-0">
							<small>{{ user.address.street }}</small> <br/>
							<small>{{ user.address.zipcode }} {{ user.address.city }}</small>

							<hr class="my-2">

							<div class="row">
								<button class="btn btn-outline-success col" @click="save(user)">Modifier</button>
								<button class="btn btn-outline-danger col" @click="destroy(user)">Suppimer</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /.row -->
		</div>
		<!-- /.container -->
	</div>
</template>

<script>

export default {
	data() {
		return {
			users: [],
			loading: false,
		}
	},
	mounted() {
		this.$user = this.$resource('users{/id}', {}, {}, {
			before: () => {
				this.loading = true;
			},
			after: () => {
				this.loading = false;
			}
		});
		this.$user.query().then(res => {
			this.users = res.body;
		}, error => {
			console.log(error);
		});
	},
	methods: {
		save(user) {
			this.$user.update({id : user.id}, {
				name: user.name
			}).then(() => {
			}, err => {
				console.log(err);
			})
		},
		destroy(user) {
			this.$user.remove({id : user.id})
			.then(() => {
				this.users = this.users.filter(u => u !== user);
			}, err => {
				console.log(err);
			})
		}
	},
}
</script>
