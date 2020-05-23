<template>
  <div class="w-1/2 m-auto h-screen">
    <h1 class="text-3xl">Display Curriculum</h1>
    <p class="mt-8">
      This is a description... This is a description... This is a description... This is a description...
      This is a description... This is a description... This is a description... This is a description...
    </p>
    <div class="container mx-auto bg-white border-grey-light border p-4 rounded mt-10">
      <accordion title="Section 1">
        <p class="pb-5">Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu
          bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis
          temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id
          pri, vis case abhorreant ea, id sea meis feugiat.</p>

        <p class="pb-5">Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit
          mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est
          ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.</p>
      </accordion>
      <accordion title="Section 2">
        <p class="pb-5">Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu
          bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis
          temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id
          pri, vis case abhorreant ea, id sea meis feugiat.</p>

        <p class="pb-5">Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit
          mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est
          ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.</p>
      </accordion>
      <accordion title="Section 3">
        <p class="pb-5">Lorem ipsum dolor sit amet, ut alii voluptaria est, ad illum inimicus deterruisset eam. His eu
          bonorum adipisci definiebas, no vis nostrud conclusionemque. Ad his virtute accusata, pro habemus singulis
          temporibus ut, ne bonorum dolores euripidis quo. No nam amet erant intellegebat. Rationibus instructior id
          pri, vis case abhorreant ea, id sea meis feugiat.</p>

        <p class="pb-5">Ut vel percipit facilisi, sea partem veritus mandamus eu, at debet deleniti eos. Iudico suscipit
          mel ut. Per ad habeo sadipscing concludaturque. Pri lorem fastidii in, accusam honestatis signiferumque est
          ut, ea eos omnium senserit reprehendunt. Eu est nibh invenire.</p>
      </accordion>
    </div>
  </div>
</template>

<script>
  import Accordion from '../components/Accordion.vue'
  import {
    ref
  } from "vue";
  export default {
    components: {
      'accordion': Accordion
    },
    setup() {
      const selected = ref(null);

      return {
        selected
      }
    }
  }
</script>