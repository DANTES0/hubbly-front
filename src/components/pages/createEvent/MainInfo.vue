<script setup lang="ts">
import { ref } from 'vue'

const dateTime = ref(new Date())
</script>

<template>
  <v-card style="height: fit-content" color="#EFF6FF" elevation="2" class="px-6 py-6 mt-8 mb-10">
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-start justify-start flex-column w-100 ga-2">
          <div>Название мероприятия</div>
          <v-text-field
            variant="outlined"
            density="compact"
            label="Мероприятие"
            single-line
            style="width: 100%"
          />
        </div>
        <div class="d-flex align-start justify-start flex-column w-100 ga-2">
          <div>Описание мероприятия</div>
          <v-textarea
            label="Описание"
            single-line
            variant="outlined"
            density="compact"
            style="width: 100%"
          />
        </div>
        <div class="d-flex align-start justify-start flex-column w-100 ga-2">
          <div>Место проведения</div>
          <v-text-field
            label="Место"
            single-line
            variant="outlined"
            density="compact"
            style="width: 100%"
          />
        </div>
        <div class="d-flex align-start justify-start flex-column w-100 ga-2">
          <div>Дата мероприятия</div>
          <!-- <input type="datetime-local" /> -->
          <VueDatePicker
            v-model="dateTime"
            locale="ru"
            format="dd.MM.yyyy HH:mm"
            placeholder="Выберите дату и время"
            input-class-name="custom-input"
            class="custom-datepicker mb-4"
            style="z-index: 1050 !important"
            cancel-text="Отмена"
            select-text="Выбрать"
          />
        </div>
        <div>
          <div>Статус регистрации</div>
          <v-chip-group>
            <v-chip color="success" class="chips">Открыто</v-chip>
            <v-chip color="error" class="chips">Закрыто</v-chip>
          </v-chip-group>
        </div>
        <div class="mt-4">
          <div>Уникальная ссылка</div>
          <div class="d-flex ga-4">
            <v-btn class="btn-common text-none mt-4" min-width="120px" rounded="xl" size="small"
              >Скопировать</v-btn
            >
            <v-btn class="btn-common text-none mt-4" min-width="120px" rounded="xl" size="small"
              >Пересоздать</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style lang="scss" scoped>
.custom-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  background-color: #eff6ff;
  outline: none;
}

.custom-input:focus {
  border-color: #1976d2;
  box-shadow: 0 0 0 1px #1976d2;
}

:deep(.dp__input_icon) {
  color: #1976d2;
}
:deep(.dp__input) {
  background-color: #eff6ff;
  border: 1px solid #94989e;
  border-radius: 4px;
}

:deep(.dp__input:hover) {
  border-color: #14213d;
}

:deep(.dp__input:focus),
:deep(.dp__input.dp__input_focus) {
  border-color: #14213d;
  border-width: 2px;
  outline: none;
}
</style>
