<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "Loading...",
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8001/api/hello/")// Update this URL to match your Django API
      .then((response) => {
        this.message = response.data.message;
      })
      .catch((error) => {
        console.error("API request failed:", error);
        this.message = "Failed to load data.";
      });
  },
};
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
