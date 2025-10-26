<script setup lang="ts">
import MainInfo from '@/components/pages/createEvent/MainInfo.vue'
import { Pages } from '@/enums/pages'
import { ref } from 'vue'

const drawer = ref(true)
const rail = ref(true)

const menu = ref(false)
const date = ref('')
</script>

<template>
  <v-container>
    <h1 class="text-uppercase text-center">Создание мероприятия</h1>
    <v-navigation-drawer
      v-model="drawer"
      style="
        height: fit-content;
        box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.25);
        margin-top: 90px;
      "
      color="#EFF6FF"
      rounded="lg"
      elevation-16
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list>
        <v-list-item>
          <v-btn
            :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
            variant="text"
            @click.stop="rail = !rail"
            class="m-0"
            size="lg"
          />
        </v-list-item>
      </v-list>
      <v-divider :thickness="2" style="opacity: 0.2" color="#fca311" />
      <v-list>
        <v-list-item
          link
          prepend-icon="mdi-information-outline"
          title="Основная информация"
          :to="{ name: Pages.CreateEvents.Children.MainInfo.Name }"
          active-class="active-link"
          :ripple="false"
        ></v-list-item>
        <v-list-group value="templates">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              link
              prepend-icon="mdi-file-document-outline"
              title="Шаблоны"
              active-class="active-link"
              :ripple="false"
            ></v-list-item>
          </template>
          <v-list-item
            link
            prepend-icon="mdi-map-legend"
            title="Шаблоны мероприятия"
            :to="{ name: Pages.CreateEvents.Children.Templates.Name }"
            active-class="active-link"
            :ripple="false"
            class="sub-list"
          >
          </v-list-item>
          <v-list-item
            link
            prepend-icon="mdi-file-account"
            title="Мои шаблоны"
            active-class="active-link"
            :ripple="false"
            class="sub-list"
          >
          </v-list-item>
        </v-list-group>
        <v-list-group value="registrationForm">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              link
              prepend-icon="mdi-form-select"
              title="Форма регистрации"
              active-class="active-link"
              :ripple="false"
            ></v-list-item>
          </template>
          <v-list-item
            link
            prepend-icon="mdi-map-legend"
            title="Предпросмотр"
            :to="{ name: Pages.CreateEvents.Children.RegistrationForm.Children.Preview.Name }"
            active-class="active-link"
            :ripple="false"
            class="sub-list"
          />
          <v-list-item
            link
            prepend-icon="mdi-book-edit-outline"
            title="Редактирование"
            :to="{ name: Pages.CreateEvents.Children.RegistrationForm.Children.Edit.Name }"
            active-class="active-link"
            :ripple="false"
            class="sub-list"
          />
        </v-list-group>
        <v-list-item
          link
          prepend-icon="mdi-account-key-outline"
          title="Модераторы"
          active-class="active-link"
          :ripple="false"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-account-multiple"
          title="Список участников"
          active-class="active-link"
          :ripple="false"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-container>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.active-link {
  background-color: #ffd99d !important;
}
:deep(.v-list-item__overlay) {
  background-color: #ffd99d !important;
}

:deep(.v-list-item--active) {
  // background-color: transparent !important;
}

// :deep(.v-list-item--active .v-icon) {
// }
.sub-list {
  padding-left: 40px !important;
}
</style>
