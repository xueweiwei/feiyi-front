<template>
    <span class="i-layout-header-trigger i-layout-header-trigger-min" @click="handleSelectMenu('user')">
        <img :src="userCenterIcon" style="width:70%" />
    </span>
</template>
<script>
    import UserCenterIcon from '@/assets/icons/header-user-center.png';

    export default {
        name: 'iHeaderUser',
        data() {
            return {
                userCenterIcon: UserCenterIcon
            }
        },
		methods: {
		    handleSelectMenu(val) {
		        window.location.href = ('/' + val)
		    }
		}
    }
</script>
