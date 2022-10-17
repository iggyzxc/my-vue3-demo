<template>
    <v-container class="mt-6">
        <v-card
        class="mx-auto mt-8"
        elevation="5"
        max-width="1000"
        outlined
    >
        <v-card-title class="text-center mt-3">
            <a
            :href="'//' + 'coingecko.com/'"
            target="_blank"
            class="hover"
            >Today's Top 10 Crpyto Coins</a
          >
        </v-card-title>
        <br />
            <v-col class="text-center">
                <v-simple-table class="table">
                        <thead>
                            <tr>
                                <th class="text-center px-6">
                                    Symbol
                                </th>
                                <th class="text-center px-6">
                                    Name
                                </th>
                                <th class="text-center px-6">
                                    Current Price
                                </th>
                                <th class="text-center px-6">
                                    24hr High
                                </th>
                                <th class="text-center px-6">
                                    24hr Low
                                </th>
                                <th class="text-center px-6">
                                    All-Time High
                                </th>
                                <th class="text-center px-6">
                                    Circulating Supply
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="crypto in cryptoData.data"
                                :key="crypto.id"
                                >
                                <td>{{ crypto.symbol }}</td>
                                <td>{{ crypto.name }}</td>
                                <td>{{ crypto.current_price }}</td>
                                <td>{{ crypto.high_24h }}</td>
                                <td>{{ crypto.low_24h }}</td>
                                <td>{{ crypto.ath }}</td>
                                <td>{{ crypto.circulating_supply }}</td>
                            </tr>
                        </tbody>
                </v-simple-table>
            </v-col>
        </v-card>
    </v-container>
</template>
            
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const cryptoData = ref([]);
var stringifyJSON = ref("");

function getCrypto() {
    axios.get('https://coingecko.p.rapidapi.com/coins/markets', options).then(
        (value)=>{
            stringifyJSON = JSON.stringify(value);
            cryptoData.value = JSON.parse(stringifyJSON);
        }
    );
}

const options = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/coins/markets',
    params: {vs_currency: 'usd', page: '1', per_page: '10', order: 'market_cap_desc'},
    headers: {
                'X-RapidAPI-Key': '1b76060411mshab2b0bac9626382p169b3ejsn96afb1e43f2f',
                'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }  
};

onMounted(() => {
    getCrypto();
})

</script>

<style scoped>
h3 {
  font-weight: 600;
  letter-spacing: 4px;
}
.table {
    font-family: Arial;
}
.hover:hover {
  color: aqua;
  text-shadow:0px 0px 10px aqua;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  -webkit-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
}
</style>
    