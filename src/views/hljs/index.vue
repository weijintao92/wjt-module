<template>
  <div id="app">
    <!-- bind to a data property named `code` -->
    <highlightjs autodetect :code="code" />
    <!-- or literal code works as well -->
    <highlightjs language="javascript" code="var x = 5;" />
  </div>
</template>
<script>
export default {
  name:'Hljs',
  data(){
    return{
      code:'dasfasdfdasfas'
    }
  }
}
</script>