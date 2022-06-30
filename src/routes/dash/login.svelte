<script>
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';

	if (browser) {
		goto('https://github.com/login/oauth/authorize?client_id=afaaed7040a068753964');
	}
</script>
