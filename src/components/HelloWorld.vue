<template>
  <h2>Домашнее задание №2</h2>
  <div>
    <h2>Список пользователей</h2>
    <button @click="toggleListVisibility">{{ listVisible ? 'Скрыть' : 'Показать' }} список</button>

    <ul v-show="listVisible">
      <li v-for="user in users" :key="user.id" @mouseenter="onMouseEnter(user)" @mouseleave="onMouseLeave"
        :class="{ highlighted: isUserSelected(user) }">
        {{ user.name }}
        <span v-show="isUserSelected(user)">({{ user.age }})</span>
      </li>
    </ul>
  </div>

</template>

<script setup>
import { ref } from 'vue'
const users = ref([
  { id: 1, name: 'Анна', age: 28 },
  { id: 2, name: 'Михаил', age: 32 },
  { id: 3, name: 'Елена', age: 24 },
  { id: 4, name: 'Дмитрий', age: 30 }
]);

const listVisible = ref(true);
let selectUserId = ref(null); // Текущий выделенный элемент

function onMouseEnter(user) {
  selectUserId.value = user.id;
}

function onMouseLeave() {
  selectUserId.value = null;
}

function isUserSelected(user) {
  return selectUserId.value === user.id;
}

function toggleListVisibility() {
  listVisible.value = !listVisible.value;
}

</script>

<style lang="scss" scoped>
.highlighted {
  color: red;
  background-color: bisque;
  font-weight: bold;
}
</style>