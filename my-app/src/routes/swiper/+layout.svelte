<script>
    import { onMount } from "svelte";
    import { onAuthStateChanged, getAuth } from "firebase/auth";
    import { goto } from "$app/navigation";
    import { isLoggedIn } from "$lib/stores/stores";

    onMount(() => {
        const auth = getAuth();
        onAuthStateChanged(auth , (user) => {
            if(user) {
                isLoggedIn.update(() => true);
            }
            else {
                $isLoggedIn = false;
                goto('/');
                isLoggedIn.update(() => false);
            }
        })
    })
</script>

<slot/>
  