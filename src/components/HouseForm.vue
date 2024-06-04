<script setup lang="ts">
import { ref } from 'vue'
import plusIconGrey from '../assets/plusIconGrey.png'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

const props = defineProps({
  buttonText: String
})

const streetName = ref('')
const houseNumber = ref(0)
const numberAddition = ref('')
const zip = ref('')
const city = ref('')
const price = ref(0)
const size = ref(0)
const hasGarage = ref('')
const bedrooms = ref(0)
const bathrooms = ref(0)
const constructionYear = ref('')
const description = ref('')
const houseImage = ref({})

// Function to chosse image and style the input image field.
const onFileChange = (e: Event) => {
  const files = (e as HTMLInputEvent).target?.files
  if (!files) return
  const imgInputElement = document.getElementById('plus-img')
  const removeImgButton = document.getElementById('clear-img-id')

  if (removeImgButton) {
    removeImgButton.style.display = 'block'
  }

  const chossedImgUrl = URL.createObjectURL(files[0])
  if (imgInputElement) {
    ;(imgInputElement as HTMLImageElement).src = chossedImgUrl
    ;(imgInputElement as HTMLImageElement).style.width = '100%'
    const uploadImgButton = imgInputElement.closest('button')
    if (uploadImgButton) {
      uploadImgButton.style.padding = '0'
    }
  }
  houseImage.value = files[0]
}

const emit = defineEmits(['on-submit'])

// Function to submit house information
const onSubmit = (e: Event) => {
  e.preventDefault()

  emit('on-submit', {
    streetName: streetName.value,
    houseNumber: houseNumber.value,
    numberAddition: numberAddition.value,
    zip: zip.value,
    city: city.value,
    price: price.value,
    size: size.value,
    hasGarage: hasGarage.value === 'yes' ? true : false,
    bedrooms: bedrooms.value,
    bathrooms: bathrooms.value,
    constructionYear: constructionYear.value,
    description: description.value,
    houseImage: houseImage.value
  })
}

// Function to delete chossed image to upload
const removeImage = () => {
  const imgInputElement = document.getElementById('input-img')
  const plusInputElement = document.getElementById('plus-img')
  const removeImgButton = document.getElementById('clear-img-id')

  if (imgInputElement) {
    ;(imgInputElement as HTMLInputElement).value = ''
  }
  if (plusInputElement) {
    ;(plusInputElement as HTMLImageElement).src = plusIconGrey
    ;(plusInputElement as HTMLImageElement).style.width = '40px'
    const uploadImgButton = plusInputElement.closest('button')
    if (uploadImgButton) {
      uploadImgButton.style.padding = '0px 30px'
    }

    if (removeImgButton) {
      removeImgButton.style.display = 'none'
    }
  }
}
</script>

<template>
  <div class="house-form">
    <form v-on:submit="onSubmit">
      <div>
        <label>Street name<span>*</span></label>
        <input required type="text" v-model="streetName" placeholder="Street Name" />
      </div>
      <div>
        <div class="form-row">
          <div>
            <label>House number<span>*</span></label>
            <input required type="number" v-model="houseNumber" placeholder="House Number" />
          </div>
          <div>
            <label>Additional(optional)</label>
            <input type="text" v-model="numberAddition" placeholder="Additional" />
          </div>
        </div>
      </div>
      <div>
        <label>Postal code<span>*</span></label>
        <input required type="text" v-model="zip" placeholder="Postal Code" />
      </div>
      <div>
        <label>City<span>*</span></label>
        <input required type="text" v-model="city" placeholder="City" />
      </div>
      <div class="img-field">
        <label>Upload picture (PNG or JPG)<span>*</span></label>
        <input
          id="input-img"
          required
          type="file"
          v-on:change="onFileChange"
          placeholder="Search for a house"
        />
        <button
          class="upload-img"
          type="button"
          onclick="document.getElementById('input-img').click();"
        >
          <img id="plus-img" src="../assets/plusIconGrey.png" />
        </button>
        <button type="button" v-on:click="removeImage" class="clear-img" id="clear-img-id">
          <img src="../assets/clearWhiteIcon.png" />
        </button>
      </div>
      <div>
        <label>Price<span>*</span></label>
        <input required type="number" v-model="price" placeholder="Price" />
      </div>
      <div>
        <div class="form-row">
          <div>
            <label>Size<span>*</span></label>
            <input required type="number" v-model="size" placeholder="Size" />
          </div>
          <div class="form-select">
            <label>Garage<span>*</span></label>
            <select required v-model="hasGarage">
              <option value="none">Select</option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div>
          <label>Bedrooms<span>*</span></label>
          <input required type="number" v-model="bedrooms" placeholder="Bedrooms" />
        </div>
        <div>
          <label>Bathrooms<span>*</span></label>
          <input required type="number" v-model="bathrooms" placeholder="Bathrooms" />
        </div>
      </div>
      <div>
        <label>Construction date<span>*</span></label>
        <input required type="text" v-model="constructionYear" placeholder="Construction Year" />
      </div>
      <div>
        <label>Description<span>*</span></label>
        <input required type="text" v-model="description" placeholder="Description" />
      </div>
      <button type="submit" class="submit-button">{{ props.buttonText }}</button>
    </form>
  </div>
</template>

<style lang="scss">
.house-form {
  width: 300px;

  input {
    width: 100%;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 5px;
  }

  input::placeholder {
    padding-left: 10px;
  }

  label {
    display: block;
    margin: 20px 0;
    color: var(--color-grey);
  }

  .img-field {
    height: 160px;

    input {
      display: none;
    }
    input[type='file'] {
      color: transparent;
    }

    input[type='file']::file-selector-button {
      display: none;
    }

    .upload-img {
      border-radius: 4px;
      padding: 0 30px;
      height: 100px;
      background-color: transparent;
      text-align: center;
      border: 4px dashed rgba(0, 0, 0, 0.16);
      margin-right: 16px;
      width: 150px;

      img {
        width: 40px;
      }
    }
  }

  .clear-img {
    background-color: transparent;
    width: 20px;
    border: none;
    position: relative;
    left: 125px;
    top: -115px;
    cursor: pointer;
    z-index: 2;
    display: none;

    img {
      width: 30px;
    }
  }

  .submit-button {
    background-color: var(--color-primary);
    border: 1px solid transparent;
    border-radius: 5px;
    color: var(--color-white);
    float: right;
    padding: 5px 40px;
    font-size: 16px;
    margin: 35px 0;
    cursor: pointer;
  }

  .form-row {
    display: flex;
    justify-content: space-between;

    div {
      &:last-child {
        margin-left: 20px;
      }
    }
  }

  .form-select {
    margin: 0 !important;

    select {
      height: 45px;
      width: 135px;
      border: 1px solid transparent;
      border-radius: 5px;
    }
  }

  form {
    &:valid {
      .submit-button {
        background-color: var(--color-almost-red);
      }
    }
  }
}

@media only screen and (max-width: 835px) {
  .house-form {
    .submit-button {
      width: 100%;
    }
  }
}
</style>
