<template>
  <div class="setting-block">
    <div class="setting-title font-16 fw-500">Designs</div>

    <div class="setting-body white-bg-color">
      <table class="table table-striped">
        <thead>
            <tr>
                <th></th>
                <th>Title</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="design in designs" :key="design.id">
                <td>
                  <div v-if="design.images">
                    <img :src="design.images.thumbnail" width="100">
                  </div>
                </td>
                <td>{{ design.title }}</td>
                <td>{{ design.is_live ? 'Published' : 'Draft' }}</td>
                <td>
                  <nuxt-link :to="{name: 'designs.edit', params: { id: design.id }}">Edit</nuxt-link>
                </td>
            </tr>
        </tbody>
    </table>
    </div>

  </div>
</template>

<script>
    export default {
        name: "designs",
        data() {
            return {
                designs: []
            }
        },

        methods:{
            async fetchUserDesigns(){
                const {data} = await this.$axios.get(`/users/${this.$auth.user.id}/designs`);
                this.designs = data.data;
            }
        },

        created(){
            this.fetchUserDesigns();
        }
    }
</script>

<style scoped>

</style>
