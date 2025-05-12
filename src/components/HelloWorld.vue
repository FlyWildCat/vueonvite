<template>
  <h2>Домашнее задание №1</h2>
  <div>
    <h2>Работа с счётчиком</h2>
    <p>Счётчик: {{ count }}</p>
    <button @click="count++">увеличить</button>
  </div>
  <div>
    <h2>Пример ссылки</h2>
    <a :href="url" target="_blank">Ссылка на сайт</a>
  </div>
  <div>
    <h2>Пример style</h2>
    <div :style="{ backgroundColor: bColor, color: 'white' }">can be text</div>
  </div>
  <div>
    <h2>Пример v-if</h2>
    <div v-if="reg">can be text1</div>
    <div v-else-if="reg === undefined">can be text3</div>
    <div v-else>can be text2</div>
  </div>
  <div>
    <h2>Пример mousemove</h2>
    <div @mousemove="handleMouseMove">
      <p>{{ x }} {{ y }}</p>
      <p>{{ y }} {{ x }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const url = ref("https:\\vuejs.org")
const bColor = ref('gray')
const reg = ref(true)
const x = ref(0)
const y = ref(0)
const handleMouseMove = (e) => {
  x.value = e.pageX
  y.value = e.pageY
}

</script>

<style lang="scss" scoped></style>