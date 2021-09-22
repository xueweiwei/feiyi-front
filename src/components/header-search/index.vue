<template>
    <span class="i-layout-header-trigger i-layout-header-trigger-min">
        <img :src="searchIcon" style="width:70%"/>
    </span>
</template>
<script>
    import SearchIcon from '@/assets/icons/header-search.png';

    export default {
        name: 'iHeaderSearch',
        data() {
            return {
                searchIcon: SearchIcon
            }
        }
    }
</script>
