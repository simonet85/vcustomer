<template>
  <div class="customers container">
    <h1 class="page-header ">Manage Customers</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>
            {{ customer.first_name }}
          </td>
          <td>
            {{ customer.first_last }}
          </td>
          <td>
            {{ customer.email }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [],
    };
  },
  methods: {
    fetchCustomers() {
      this.$http.get("http://slimapp/api/customers").then(function(response) {
        // console.log(response.body);
        this.customers = JSON.parse(response.body);
      });
    },
  },
  created() {
    this.fetchCustomers();
  },
  name: "Customers",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
