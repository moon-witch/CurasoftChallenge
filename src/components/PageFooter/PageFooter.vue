<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <ul class="links">
      <li class="link">
        <RouterLink to="/data-protection" class="a">Datenschutz</RouterLink>
      </li>
      <li class="link">
        <RouterLink to="/imprint" class="a">Impressum</RouterLink>
      </li>
    </ul>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: absolute;
  bottom: 20px;
  right: 40px;

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 1rem;

    .a {
      text-decoration: none;
      color: black;
      opacity: 0.5;
      transition: opacity 0.1s ease-in-out;
      font-size: small;

      &:hover {
        opacity: 0.75;
      }
    }
  }
}
</style>
