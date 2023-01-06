<template>
  <header>
    <div class="divLeft">
      <h1 class="site-title">
        <a href="//www.semcog.org" class="site-logo">
          SEMCOG | Southeast Michigan Council of Governments
        </a>
      </h1>
    </div>
    <div id="mapName">
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SemcogHeader',
}
</script>

<style scoped>
  header {
    background-color: #0f2d53;
    align-items: center;
    justify-content: center;
    color: white;
    grid-row: 1;
    grid-column: 1 / -1;
    margin-right: 0;
    margin-left: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .divLeft {
    background: #64983D;
    height: 60px;
    grid-column: 1;
    border-bottom: 60px solid #011f4a;
    border-right: 60px solid transparent;
  }

  #mapName {
    display: inline;
    font-weight: 700;
    font-size: 1.75rem;
    color: #FFFFFF;
    background: #64983D;
    height: 60px;
    padding-right: 20px;
    grid-column: 2;
  }

  @media (max-width: 576px), print {
    .divLeft {
      border-bottom: none;
      border-right: none;
      background-color: #011f4a;
      height: auto;
    }

    header {
      grid-template-columns: 1fr;
    }

    #mapName {
      grid-column: 1;
      grid-row: 2;
      height: auto;
    }
  }

  .site-logo {
    display: block;
    text-indent: 200%;
    overflow: hidden;
    white-space: nowrap
  }

  .site-title {
    margin: 7px 0 20px 10px;
  }

  .site-title:after {
    clear: both;
    content: '';
    display: table
  }

  .site-logo {
    width: 111px;
    height: 20px;
    background: url("//semcog.org/Portals/_default/Skins/semcog/images/SEMCOGlogo.svg") no-repeat 0 -102px;
  }

  @media (min-width: 576px) {
    .site-logo {
      background-position: 0 -54px;
      width: 237px;
      height: 43px;
    }
  }

  @media (min-width: 1300px) {
    .site-logo {
      background-position: 0 0;
      width: 580px;
      height: 43px;
    }
  }
</style>
