<script>
  import CommentInput from "$components/interactive-comments/CommentInput.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

</script>

<CommentInput authorName={data.data.currentUser.username} />

<svelte:head>
  <title>Interactive Comments</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" type="text/css" href="/interactive-comments/style.css" media="screen" />
</svelte:head>
