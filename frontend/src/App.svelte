<script>
  import axios from 'axios';
  let ring = null;

  // Fetch the first user on load
  axios.get('http://localhost:3000/api/ring')
    .then(response => {
      ring = response.data;
      console.log(ring)
    })
    .catch(error => {
      console.error('Error fetching ring:', error);
    });
</script>

<main>
  <h1>Ring Data</h1>
  {#if ring}
    <p><strong>Id:</strong> {ring.ring_id}</p>
    <p><strong>Address:</strong> {ring.address}</p>
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<style>
  main {
    padding: 2rem;
    font-family: Arial, sans-serif;
  }
</style>
