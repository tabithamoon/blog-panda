<script>
    import { page } from '$app/stores';
</script>

<title>whoops</title>

<div class="bg-cerulean flex flex-col h-screen">
    <div class="text-white font-bsod m-auto">
        <p class="text-9xl m-4">:(</p>
        <div class="m-4 flex">
            <div class="p-2">
                <img src="https://files.tabby.page/qr_error.png" alt="error qr code"/>
            </div>
            <div class="p-2 text-xs flex flex-col">
                <div class="text-sm h-min">
                    <p>oopsie whoopsie!! we made a fucky wucky!!</p>
                    <p>we are working vewy hawd to fix this!!</p>
                </div>
                <p>error info:</p>
                <p>{$page.status} - {$page.error.message}</p>
                <a class="underline underline-offset-2 mt-auto" href="/">go back to safety</a>
            </div>
        </div>
    </div>
</div>