## Домашнее задание №2
### Создание Vue-приложения

### Цель:
- освоить работу с основными директивами Vue (v-for, v-if, v-show, v-bind, v-on)
- научиться динамически управлять отображением данных и событиями в шаблоне.

### Описание/Пошаговая инструкция выполнения домашнего задания:
Создать Vue-приложение, где:
1. Вывести список пользователей (например, имена) с помощью v-for.
2. Реализовать переключение отображения дополнительной информации (например, возраста) через v-if или v-show.
3. Использовать v-bind для изменения цвета текста при наведении.
4. Добавить кнопку, которая при клике (v-on) скрывает или показывает весь список.

### Выполнение:
Изменения внесены в [HelloWorld.vue](/src/components/HelloWorld.vue).
```<div>
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
```
