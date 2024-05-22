<template>
  <div class="htmx">
    <h1>This is an htmx playground</h1>
    <Navigation />
    <!-- <div hx-target="this" hx-swap="outerHTML">
      <div><label>First Name</label>: Joe</div>
      <div><label>Last Name</label>: Blow</div>
      <div><label>Email</label>: joe@blow.com</div>
      <button hx-get="/contact/1/edit" class="btn btn-primary">Click To Edit</button>
    </div>
    <form hx-put="http://localhost:3000/contact" hx-target="this" hx-swap="outerHTML">
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value="Joe" />
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" name="lastName" value="Blow" />
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" name="email" value="joe@blow.com" />
      </div>
      <button class="btn">Submit</button>
      <button class="btn" hx-get="http://localhost:3000/contact">Cancel</button>
    </form>

    <div class="jokes" hx-get="https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode">
      Load Jokes
    </div>



    <div class="jokes" hx-get="http://localhost:3000/users?id=1">Load user</div>

    <button id="btn" hx-post="/click" hx-swap="outerHTML">Click Me</button> -->
  </div>
</template>
<script lang="ts">
import Navigation from '../components/HtmxNavigation.vue'
export default {
  components: {
    Navigation
  }
}
</script>

<!-- <script>
import Navigation from '../components/HtmxNavigation.vue'

// var server = sinon.createFakeServer()
// server.autoRespond = true

// // Respond with the same content and id, but
// // with the "red" class on the button
// server.respondWith('/click', [
//   200,
//   {},
//   '<button id="btn" class="red" hx-post="/click" hx-swap="outerHTML">Click Me</button>'
// ])
</script> -->
<style>
.slide {
  height: 15px;
  background-color: black;
  color: white;
}

.pointer {
  cursor: pointer;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
