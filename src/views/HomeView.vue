<template>
  <main class="container">
    <section class="search">
      <form class="search-form" @submit.prevent="">
        <div class="search-form-input-container">
          <label>País</label>
          <input
            class="search-form-input"
            type="text"
            v-model="message"
            @input="getCountry(message)"
            @focusin="handleOnFocusInput()"
            placeholder=" Escribe el país que deseas ver"
          />
        </div>
        <button class="search-form-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#fff">
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
          <span> Buscar </span>
        </button>
        <div v-if="checboxFocus" class="checkbox-continents">
          <p style="position: absolute; top: 10px; left: 20px">Filtrar por componentes</p>
          <button
            @click="handleOnFocusInput(true)"
            style="position: absolute; top: 20px; right: 20px; border-style: none; cursor: pointer"
          >
            X
          </button>
          <div class="checbox-option">
            <Checkbox v-model="continent" inputId="Africa" name="continent" value="Africa" />
            <label for="Africa" style="margin-left: 8px">
              <img class="checkbox-option-image" src="../assets/africa.png" alt="africa" />
              <span>Africa</span>
            </label>
          </div>
          <div class="checbox-option">
            <Checkbox
              v-model="continent"
              inputId="North America"
              name="continent"
              value="North America"
            />
            <label for="North America" style="margin-left: 8px">
              <img
                class="checkbox-option-image"
                src="../assets/north-america.png"
                alt="north-america"
              />
              <span>North America</span>
            </label>
          </div>
          <div class="checbox-option">
            <Checkbox v-model="continent" inputId="Oceania" name="continent" value="Oceania" />
            <label for="Oceania" style="margin-left: 8px">
              <img class="checkbox-option-image" src="../assets/oceania.png" alt="oceania" />
              <span>Oceania</span>
            </label>
          </div>
          <div class="checbox-option">
            <Checkbox v-model="continent" inputId="Asia" name="continent" value="Asia" />
            <label for="Asia" style="margin-left: 8px">
              <img class="checkbox-option-image" src="../assets/asia.png" alt="asia" />
              <span>Asia</span>
            </label>
          </div>
          <div class="checbox-option">
            <Checkbox v-model="continent" inputId="Europe" name="continent" value="Europe" />
            <label for="Europe" style="margin-left: 8px">
              <img class="checkbox-option-image" src="../assets/europe.png" alt="europe" />
              <span>Europe</span>
            </label>
          </div>
          <div class="checbox-option">
            <Checkbox
              v-model="continent"
              inputId="South America"
              name="continent"
              value="South America"
            />
            <label for="South America" style="margin-left: 8px">
              <img
                class="checkbox-option-image"
                src="../assets/south-america.png"
                alt="south-america"
              />
              <span>South America</span>
            </label>
          </div>
        </div>
      </form>
    </section>
    <br />
    <section v-if="!loading" class="card-container">
      <div v-for="(country, index) in twelvesDisplayCards" :key="country.code">
        <div
          @click="handdleSelectClick(country, index)"
          class="card-country-container"
          :style="{ backgroundImage: `url(${orderCountry(country.name)})` }"
        >
          <div :class="`card-country-container-text ${index === selected.index ? 'active' : ''}`">
            <div class="card-country-flag">
              <img
                :src="`https://flagsapi.com/${country.code}/flat/64.png`"
                style="width: 100%; height: 100%"
              />
            </div>
            <br />
            <div>
              <p>
                <span class="card-country-name">{{ country.name }}</span>
              </p>
              <span class="card-country-continent">{{ country.continent.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="selected" class="float-card-container">
      <button @click="handdleSelectClick(null, selected.index)" class="button-close-float">
        x
      </button>
      <div
        class="float-card-img"
        :style="{ backgroundImage: `url(${orderCountry(selected.country.name)})` }"
      ></div>
      <section class="float-card-info">
        <div class="float-card-info-card">
          <div class="float-card-info-card-head">
            <div class="card-country-flag">
              <img
                :src="`https://flagsapi.com/${selected.country.code}/flat/64.png`"
                style="width: 100%; height: 100%"
              />
            </div>
            <br />
            <div>
              <p>
                <span class="card-country-name">{{ selected.country.name }}</span>
              </p>
              <span class="card-country-continent">{{ selected.country.continent.name }}</span>
            </div>
          </div>
          <ul class="card-country-data">
            <li>
              <span class="float-card-text-enphasis">Capital: </span>{{ selected.country.capital }}
            </li>
            <br />
            <li>
              <span class="float-card-text-enphasis">Lenguage: </span
              >{{ selected.country.languages[0].name }}
            </li>
            <br />
            <li><span class="float-card-text-enphasis">Population: </span>500k pople</li>
            <br />
            <li>
              <span class="float-card-text-enphasis">Currency: </span
              >{{ selected.country.currency }}
            </li>
            <br />
            <li>
              <span class="float-card-text-enphasis">Region:</span>
              <div class="card flex justify-content-center">
                <Dropdown
                  v-model="selectedState"
                  :options="selected.country.states"
                  optionLabel="name"
                  :virtualScrollerOptions="{ itemSize: 20 }"
                  :panel-style="{ backgroundColor: '#ffffff', fontSize: '10px' }"
                  placeholder="Select an State"
                  style="width: 300px; height: auto; font-size: 12px"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable'
import { ref, reactive, watch, computed } from 'vue'
import gql from 'graphql-tag'
import axios from 'axios'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'

const message = ref('')

const { result, loading } = useQuery(
  gql`
    query searchCountryByName($searchCountry: String) {
      countries(filter: { name: { regex: $searchCountry } }) {
        code
        name
        continent {
          name
        }
        currency
        capital
        states {
          name
        }
        languages {
          name
        }
      }
    }
  `,
  { searchCountry: '' },
  {}
)
const dataCountries = reactive(result)
const filteredCountries = reactive({ data: [] })
const urlImages = ref([])
const selected = ref(false)
const continent = ref([])
const checboxFocus = ref(false)
const twelvesDisplayCards = computed(() =>
  filteredCountries.data
    .filter(
      (country) => country.name !== 'Anguilla' && country.continent.name.includes(continent.value)
    )
    .slice(0, 12)
)

const handleOnFocusInput = (bool) => {
  if (bool) {
    checboxFocus.value = !checboxFocus.value
  } else {
    checboxFocus.value = true
  }
}
const getCountry = (searchInput) => {
  const upperLetterCountry = searchInput.charAt(0).toUpperCase()
  const searchCountry = `${upperLetterCountry + searchInput.slice(1).toLowerCase()}`

  filteredCountries.data = dataCountries.value.countries.filter((country) =>
    country.name.includes(searchCountry)
  )
}
const getImageCountry = (countries) => {
  urlImages.value = []
  countries.forEach((country) => {
    axios
      .request({
        method: 'GET',
        url: `https://api.pexels.com/v1/search?query=${country.name}`,
        params: { country: country.name },
        headers: {
          Authorization: 'wOUQ8l0wnj0goOIsRB4xavowrL3U3rTSJQymsv8RqaqGA5k6kJaJJmAx'
        }
      })
      .then(({ data }) => {
        urlImages.value = [
          ...urlImages.value,
          { country: country.name, url: data.photos[Math.floor(Math.random() * 3)].src.landscape }
        ]
      })
      .catch(() => (urlImages.value = [...urlImages.value, { country: country.name, url: ' ' }]))
  })
}
const handdleSelectClick = (country, index) => {
  if (index === selected.value.index) {
    selected.value = false
  } else selected.value = { country, index }
}
const orderCountry = (country) => {
  return urlImages.value.filter((i) => i.country == country)[0].url
}

watch(result, () => {
  if (filteredCountries.data.length === 0) {
    filteredCountries.data = dataCountries.value?.countries
    getImageCountry(filteredCountries.data)
  }
})
</script>

<style scoped>
.container {
  flex-direction: column;
  padding-inline: 50px;
  width: 100%;
}

.search {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.search-form {
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  border: 0px solid;
  box-shadow: 0px 2px 3px #8d979c;
  display: flex;
  font-size: 16px;
  height: 60px;
  justify-content: space-between;
  padding: 15px 15px 15px 40px;
  width: 50%;
  position: relative;
}

.search-form-input-container {
  display: flex;
  flex-direction: column;
  width: 190px;
}

.search-form-input {
  border: 1px solid #ffffff;
}

.search-form-input:focus {
  outline: none;
  border-bottom: 1px solid #13a3ff;
}

.search-form-button {
  background-color: #009cff;
  border: none;
  border-radius: 50px;
  width: 100px;
  height: 40px;
  color: #ffffff;
  font-weight: 600;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  justify-items: center;
  max-height: 400px;
}

.card-country-container {
  height: 120px;
  width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  margin: 5px;
  border-radius: 25px;
  border: 0px;
  box-shadow: 0px 0px 20px #c7d6df;
  display: flex;
  flex-direction: column-reverse;
}

.card-country-container-text {
  background-color: #ffffff;
  color: #029dff;
  border-radius: 0px 0px 25px 25px;
  padding-inline: 20px 0px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.card-country-name {
  font-weight: 600;
  font-size: 14px;
}

.card-country-flag {
  width: 60px;
  height: 50px;
  margin-inline-end: 10px;
}

.card-country-continent {
  font-size: 12px;
}

.active {
  color: #ffffff;
  background-color: #008de7;
}

.float-card-container {
  width: 350px;
  height: 520px;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.float-card-img {
  height: 150px;
  width: 80%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  margin-top: 40px;
}

.float-card-info-card-head {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px;
}

.float-card-info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  color: #000;
}

.float-card-text-enphasis {
  color: #008de7;
  font-size: 14px;
  font-weight: 600;
}

.card-country-data {
  list-style: none;
}

.button-close-float {
  right: 0;
  position: absolute;
  font-size: 26px;
  border: none;
}

.checkbox-continents {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  top: 80px;
  right: -100px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  width: 700px;
  height: 400px;
}

.checbox-option {
  display: flex;
  align-items: center;
  width: 150px;
  height: 100px;
}

.checkbox-option-image {
  width: 100%;
  border-radius: 15px;
}
</style>
