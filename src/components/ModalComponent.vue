<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['modal-close', 'submit', 'cancel'])

const target = ref(null)
onClickOutside(target, () => emit('modal-close'))
</script>

<template>
  <div v-if="isOpen" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <h2 name="header">Delete Listing</h2>
        </div>
        <div class="modal-body">
          <p name="content">Are you sure you want to delete this item?</p>
        </div>
        <div class="modal-footer">
          <div>
            <button class="delete-submit-button" @click.stop="emit('submit')">Submit</button>
            <button class="delete-cancel-button" @click.stop="emit('cancel')">cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
}

.modal-container {
  width: 300px;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-footer {
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
    button {
      color: white;
      border: 1px solid transparent;
      border-radius: 5px;
      width: 50%;
      padding: 5px 20px;
    }
  }

  .delete-submit-button {
    background-color: var(--color-almost-red);
  }

  .delete-cancel-button {
    background-color: var(--color-dark-grey);
  }
}
</style>
