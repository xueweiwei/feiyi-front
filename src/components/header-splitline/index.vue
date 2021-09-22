<template>
    <span class="i-layout-header-trigger i-layout-header-trigger-min">
        <Avatar size="small" :src="searchIcon" />
    </span>
</template>
<script>
    import SearchIcon from '@/assets/icons/header-search.png';

    export default {
        name: 'iHeaderSplitLine',
        data() {
            return {
                searchIcon: SearchIcon
            }
        }
    }
</script>
