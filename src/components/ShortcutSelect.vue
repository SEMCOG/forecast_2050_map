<template>
  <div>
    <span style="font-weight: bolder; font-size: 1.2em;" class="geographySelect-label">Selected:</span>
    <span id="geographySelect">
      <select style="font-weight: bolder; font-size: 1.1em;" v-on:change="$emit('set-geo-type', $event.target.value)">
        <option disabled value="">Choose a Geography Type</option>
        <option
          v-for="id in geotypesForMap"
          v-bind:key="id"
          v-bind:value="id"
          v-bind:selected="geotype===id"
        >{{namesFromGeotype[id].singularName}}
        </option>
      </select>
    </span>
  </div>
</template>
<script>
export default {
  name: 'ShortcutSelect',
  props: [
    'namesFromGeotype',
    'geotypesForMap',
    'geotype',
  ],
  data: function () {
    return {}
  },
}
</script>
<style scoped>
  div {
    position: relative;
    display: grid;
    grid-template-columns: max-content 75% max-content max-content;
    grid-template-rows: max-content auto max-content;
    column-gap: 2px;
    align-items: end;
    width: 100%;
  }

  #geographySelect {
    grid-column: 2;
    grid-row: 3;
    min-width: 0;
  }

  .geographySelect-label {
    grid-column: 1;
    grid-row: 3;
    min-width: 0;
    font-size: medium;
    font-weight: bolder;
  }

  .geographySelect-label strong {
    padding-left: .2em;
  }

  select {
    border-bottom: solid black 2px;
    border-top: solid black 0;
    border-left: solid black 0;
    border-right: solid black 0;
    max-width: 100%;
  }

  select:focus {
    outline: 0;
    border-color: black;
  }

  select option{
    font-size: 0.8rem;
  }

  @media (max-width: 925px) and (min-width: 576px) {
    div {
      grid-template-columns: 1fr max-content max-content;
      grid-template-rows: auto max-content max-content auto max-content auto;
    }

    .geographySelect-label {
      grid-column: 1;
      grid-row: 5;
    }

    #geographySelect {
      grid-column: 1;
      grid-row: 6;
    }

  }
</style>
