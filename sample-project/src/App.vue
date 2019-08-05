<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <announcement></announcement>
        <app-article></app-article>
        <hr>
        <app-contact>
          <p slot="top">Contact us and one of our representatives will get back to you soon</p>
          <p slot="bottom">Please do not submit any sensitive information.</p>
        </app-contact>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
