<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                    <v-row v-for="(category, index) in categories" :key="index">

                        <h3 v-if="category.children.length">
                            {{category.name}}
                            <v-radio-group v-model="radioButtonValue">
                                <v-radio v-for="(children, childrenIndex) in category.children" :key="childrenIndex" :label="`${children.name}`" :value="children.slug"></v-radio>
                            </v-radio-group>
                        </h3>


                    </v-row>
            </v-col>

            <v-col cols="9">
                <div v-for="(children, index) in childrens" :key="index">
                    <!-- {{children.title}} -->
                    <ChildrenCard :childrenDetails="children"></ChildrenCard>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ChildrenCard from '@/components/ChildrenCard.vue'
    export default {
        name: 'CoursesView',
        components:{ChildrenCard},
        data(){
            return {
                radioButtonValue: null,
                categories: [],
                childrens: [],
            }
        },
        watch:{
            radioButtonValue: function(){
                this.init(this.radioButtonValue)
            }
        },
        mounted(){
            this.init()
        },
        methods: {

            async init(slug=''){
                let endpoint = slug ? `course-by-category/${slug}` : 'course-category/all'
                await this.axios.get(endpoint)
                    .then((response) => {
                        if(!slug){
                            this.categories = [...response.data.data]
                        }
                        else
                        {
                            this.childrens = [...response.data.data]
                        }
                    })
                    .catch((error) => {
                    console.log('Error: ', error)
                    })
                
            },

        }
    }
</script>