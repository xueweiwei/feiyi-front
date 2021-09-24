<template>
    <div class="user-content-main">
        <div class="user-contet-header"><img :src="contentLeftImg" /></div>
        <div class="person-box">
            <div class="person-box-item">修改密码</div>
            <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="100">
                <FormItem label="原密码" prop="oldPasswd"><Input type="password" style="width: 400px" v-model="formCustom.oldPasswd" placeholder="原密码必须填写" /></FormItem>
                <FormItem label="新密码" prop="newPasswd">
                    <Input type="password" style="width: 400px" v-model="formCustom.newPasswd" placeholder="如果不修改密码则不用填写" />
                </FormItem>
                <FormItem label="确认新密码" prop="redPasswd">
                    <Input type="password" style="width: 400px" v-model="formCustom.redPasswd" placeholder="如果不修改密码则不用填写" />
                </FormItem>
            </Form>
        </div>
        <div class="person-btn">
            <img :src="waitHandle" style="width: 150px; height: 45px; margin: 0 30px;" @click="handleSubmit('formValidate')" />
            <img :src="audit" style="width: 150px; height: 45px;" />
        </div>
    </div>
</template>

<script>
import contentLeftImg from '@/assets/images/user/user-content-left.png';
import heartImg from '@/assets/images/user/heart.png';
import publishImg from '@/assets/images/user/publish.png';
import feedbackImg from '@/assets/images/user/feedback.png';
import waitHandleChecked from '@/assets/images/user/wait-handle-checked.png';
import waitHandle from '@/assets/images/user/wait-handle.png';
import auditChecked from '@/assets/images/user/audit-checked.png';
import audit from '@/assets/images/user/audit.png';
import notPassChecked from '@/assets/images/user/not-pass-checked.png';
import notPass from '@/assets/images/user/not-pass.png';
import waitUpdateChecked from '@/assets/images/user/wait-update-checked.png';
import waitUpdate from '@/assets/images/user/wait-update.png';

export default {
    data () {
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('确认新密码为空'));
            } else if (value !== this.formCustom.newPasswd) {
                callback(new Error('两次输入的密码不区配'));
            } else {
                callback();
            }
        };
        return {
            contentLeftImg: contentLeftImg,
            heartImg: heartImg,
            publishImg: publishImg,
            feedbackImg: feedbackImg,
            waitHandleChecked: waitHandleChecked,
            waitHandle: waitHandle,
            auditChecked: auditChecked,
            audit: audit,
            notPassChecked: notPassChecked,
            notPass: notPass,
            waitUpdateChecked: waitUpdateChecked,
            waitUpdate: waitUpdate,

            formCustom: {
                oldPasswd: '',
                newPasswd: '',
                rePassword: ''
            },
            ruleCustom: {
                oldPasswd: [{ required: true, message: '原密码不能为空', trigger: 'blur' }],
                rePassword: [{ validator: validatePassCheck, trigger: 'blur' }]
            }
        };
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            });
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }
};
</script>

<style lang="less" scoped>
.user-content-main {
    width: 100%;

    .header {
        display: flex;
        justify-content: center;
        padding: 70px 0;
    }
    .person-box {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        color: #000000;
        margin-left: 60px;
        .person-box-item {
            font-weight: 500;
            color: #000000;
            margin-bottom: 50px;

        }
    }
    .person-btn {
        margin-top: 50px;
        text-align: center;
    }
}
</style>
