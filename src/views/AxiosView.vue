<template>



    <v-card>
        <v-card-text>
            <p>{{ covidData.confirmed }}</p>
        </v-card-text>
    </v-card>

            </template>
            
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const covidData = ref([])

async function getCovidData () {
       axios({
                method: 'get',
                url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Philippines',
                params: {'country': 'Philippines'},
                headers: {
                          'X-RapidAPI-Key': '1b76060411mshab2b0bac9626382p169b3ejsn96afb1e43f2f',
                          'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
                        }  
            }).then( response => {
        covidData.value=(response.data.data)
        console.log(covidData.value)
      })
  
  }

   onMounted( async () => {
       await getCovidData()
   })

</script>

    