<template>
<a-menu @click="navClick"
                v-model="currentSelectChild"
                @openChange="onOpenChange"
                :openKeys="currentParent"
                theme="light"
                mode="inline">
            <!--横向：horizontal-->
            <!--有openKeys时 :defaultOpenKeys="[200]"无效 -->
            <!--有v-model时 :ddefaultSelectedKeys="[202]"无效 -->
            <a-sub-menu v-for="itParent in NavData" :key="itParent.NavID">
                <span slot="title">
                    <a-icon :type="itParent.Icons" />
                    <span>{{itParent.Title}}</span>
                </span>
                <a-menu-item v-for="itChild in itParent.Child" :key="itChild.NavID">
                    <router-link :to="itChild.Path"><!--根据路径去跳转页面-->
                        {{itChild.Title}}
                    </router-link>
                </a-menu-item>
            </a-sub-menu>
     </a-menu>
</template>

<script setup>

import { ref } from 'vue'

const NavData = [
            {
                NavID: 100,
                Icons:"dashboard",
                Title:"集群",
                Path:"",
                Child: [
                    {
                        NavID: 101,
                        Icons: "",
                        Title: "添加集群",
                        Path: "/UserInfo",
                    }, {
                        NavID: 102,
                        Icons: "",
                        Title: "集群联邦",
                        Path: "/CompanyInfo",
                    },{
                        NavID: 103,
                        Icons: "",
                        Title: "删除集群",
                        Path: "/TeamInfo",
                    },

                ]
            },
            {
                NavID: 200,
                Icons:"audit",
                Title:"网络",
                Path:"",
                Child: [{
                        NavID: 201,
                        Icons: "",
                        Title: "服务均衡",
                        Path: "/Card",
                    }]
            },
            {
                NavID: 300,
                Icons:"audit",
                Title:"存储",
                Path:"",
                Child: [{
                        NavID: 301,
                        Icons: "",
                        Title: "接入存储",
                        Path: "/Card",
                    }]
            },
            {
                NavID: 400,
                Icons:"audit",
                Title:"可用性观测",
                Path:"",
                Child: [
                    {
                        NavID: 401,
                        Icons: "",
                        Title: "日志指标",
                        Path: "/Card",
                    },
                    {
                        NavID: 402,
                        Icons: "",
                        Title: "监控指标",
                        Path: "/Card",
                    },
                    {
                        NavID: 403,
                        Icons: "",
                        Title: "链路请求",
                        Path: "/Card",
                    }]
            },
            {
                NavID: 500,
                Icons:"audit",
                Title:"性能观测",
                Path:"",
                Child: [
                    {
                        NavID: 501,
                        Icons: "",
                        Title: "计算资源",
                        Path: "/Card",
                    },
                    {
                        NavID: 502,
                        Icons: "",
                        Title: "存储资源",
                        Path: "/Card",
                    },
                    {
                        NavID: 503,
                        Icons: "",
                        Title: "网络资源",
                        Path: "/Card",
                    }]
            }
         ]
</script>
