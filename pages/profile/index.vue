<template>
  <div class="">
    <h4>{{ $t('TITLES.orders') }}</h4>
    <v-tabs>
      <v-tab>{{ $t('TITLES.allOrders') }}</v-tab>
      <v-tab>{{ $t('TITLES.delivered') }}</v-tab>
      <v-tab>{{ $t('TITLES.unpaid') }}</v-tab>
      <v-tab>{{ $t('TITLES.processing') }}</v-tab>
      <v-tab>{{ $t('TITLES.shipped') }}</v-tab>
      <v-tab>{{ $t('TITLES.returns') }}</v-tab>
    </v-tabs>
  </div>
</template>
