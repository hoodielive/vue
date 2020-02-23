<template>
    <ul>
        <VideoListItem v-for="(video, i) in videos" :key="video" :index="i">
            {{ video.i }}
        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem'
export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: ['videos']
};

</script>

<style>
    
</style>
