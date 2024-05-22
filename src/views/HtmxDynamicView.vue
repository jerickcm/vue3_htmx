<template>
  <div>
    <Navigation />

    <div class="htmx">
      <h1>This is an htmx playground</h1>
      <div v-if="$route.params.case == 'loadclick'">
        <label for="">Loading click api </label>
        <div class="jokes" hx-get="https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode">
          Load Jokes
        </div>
      </div>
      <div v-if="$route.params.case == 'slideeffect'">
        <label for="">Slide Effect </label>
        <div
          _="init transition *height to 150px using 'all 2s ease-in' then on click transition my height to initial
        then set my.innerText to 'Closed' then remove .pointer"
          class="slide pointer"
        >
          Click to close!
        </div>
      </div>
      <div v-if="$route.params.case == 'color'">
        <label for="">Onclick trigger function to remove class with red style </label><br />

        <a _="on click remove .test" id="testdiv" class="test">Helpp</a>
        <div _="on mouseover call testdiv.click()">testing</div>
      </div>

      <div v-if="$route.params.case == 'toggle'">
        <label for="">Toggle</label><br />
        <button
          _="on click toggle .test1 on me
           then if .test1 exists set my.innerText to 'toggle' else set my.innerText to 'toggled'"
          class="test1"
        >
          Toggle
        </button>
      </div>
      <div v-if="$route.params.case == 'loadjson'">
        <p>HTMX calls for raw JSON data, no extension</p>
        <div>
          <!--   hx-get="http://localhost:3000/users?id=1"-->
          <!-- hx-get="https://dummyjson.com/products/1"  -->
          <button
            class="JSON_One"
            
            hx-get="https://dummyjson.com/products/1"
            
            hx-swap="innerHTML"
            hx-target="#contentOne"
          >
            Click to load JSON
          </button>
          <pre id="contentOne">Waiting for input...</pre>
        </div>
        <br />
        <hr />
        <br />
      </div>

      <div v-if="$route.params.case == 'loadimage'">
        <div hx-ext="client-side-templates">
          <p>HTMX receives JSON and and uses the <pre>mustache</pre> extension to parse the data</p>
          <div>
            <button
              class="JSON_Two"
              hx-get="https://dummyjson.com/products/1"
              hx-swap="innerHTML"
              hx-target="#contentTwo"
              mustache-template="fooTwo"
            >
              Click to load JSON
            </button>
          </div>

          <p id="contentTwo"><pre>Waiting for input...</pre></p>
          <template id="fooTwo">

          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

// document.body.addEventListener('htmx:configRequest', (event: HTMX.ConfigRequestEvent) => {
//   event.detail.headers = '';
//   event.detail.headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
// });

import Navigation from '../components/HtmxNavigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style>
.test {
  color: red;
}
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
