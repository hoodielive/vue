<template>
    <li>
        {{ video.snippet.description }}
    </li>
</template>

<script>
export default {
   name: 'VideoListItem',
   props: ['video']
};
</script>