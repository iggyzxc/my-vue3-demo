<template>
    <br/>
    <v-card
    class="mx-auto"
    max-width="600">
    
    
    <v-card-title>Questions and Answer</v-card-title>
     
            <v-btn class="mx-2" color="primary" @click="getQuestions">Show</v-btn><br/>
            
            <v-list-item
                    v-for="question in questions"
                    :key="question.id"
                    >
                    <v-list-item>{{ question.question }}</v-list-item>
                    <v-list-item>
                        {{question.correct_answer}}
                    </v-list-item>
            </v-list-item>
    </v-card>
            </template>
            
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const questions=ref([])

async function getQuestions () {
    axios.get('https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple').then( response => {
        questions.value=(response.data.results)
    })
    
}

</script>

<style scoped>

</style>
    
    