<script>

	import { Button } from "@tech-challenge/ui-components";
    const goback =()=>{
       history.back();
    }

</script>
<div class="absolute top-4 left-4">
    <Button on:click={goback} variant="go-back" label="Go Back"></Button>
  </div>