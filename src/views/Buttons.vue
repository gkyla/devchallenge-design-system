<template>
  <h1>Buttons</h1>

  <div class="display">
    <div class="inner">
      <pre>&lt;Button /&gt;</pre>

      <Button></Button>
    </div>
    <div class="inner">
      <pre>&:hover, &:focus</pre>

      <Button demo="default"></Button>
    </div>
  </div>
  <br />
  <div class="display">
    <div class="inner">
      <pre>&lt;Button variant="outline" /&gt;</pre>

      <Button variant="outline"></Button>
    </div>
    <div class="inner">
      <pre>&:hover, &:focus</pre>

      <Button variant="outline" demo="outline"></Button>
    </div>
  </div>
  <div class="display">
    <div class="inner">
      <pre>&lt;Button variant="text" /&gt;</pre>

      <Button variant="text"></Button>
    </div>
    <div class="inner">
      <pre>&:hover, &:focus</pre>

      <Button variant="text" demo="text"></Button>
    </div>
  </div>
  <div class="display">
    <div class="inner">
      <pre>&lt;Button disableShadow /&gt;</pre>

      <Button disableShadow></Button>
    </div>
    <div class="inner">
      <pre>&lt;Button disableShadow color="primary" /&gt;</pre>

      <Button disableShadow color="primary"></Button>
    </div>
  </div>
  <div class="display">
    <div class="inner">
      <pre>&lt;Button disabled /&gt;</pre>

      <Button disabled></Button>
    </div>
    <div class="inner">
      <pre>&lt;Button variant="text" disabled /&gt;</pre>

      <Button variant="text" disabled></Button>
    </div>
  </div>
  <div class="display">
    <div class="inner">
      <pre>&lt;Button startIcon="code" /&gt;</pre>

      <Button startIcon="code" color="primary"></Button>
    </div>
    <div class="inner">
      <pre>&lt;Button endIcon="code"/&gt;</pre>

      <Button endIcon="code"></Button>
    </div>
  </div>
  <div class="display">
    <div class="inner">
      <pre>&lt;Button size="sm" /&gt;</pre>

      <Button size="sm"></Button>
    </div>
    <div class="inner">
      <pre>&lt;Button size="md"/&gt;</pre>

      <Button size="md"></Button>
    </div>
    <div class="inner">
      <pre>&lt;Button size="lg"/&gt;</pre>

      <Button size="lg"></Button>
    </div>
  </div>
  <div class="display">
    <div class="inner">
      <pre>&lt;Button color="default" /&gt;</pre>

      <Button color="default"></Button>
    </div>
    <div class="inner">
      <pre>&lt;Button color="primary"/&gt;</pre>

      <Button color="primary"></Button>
    </div>
    <div class="inner">
      <pre>&lt;Button color="secondary"/&gt;</pre>

      <Button color="secondary"></Button>
    </div>
    <div class="inner">
      <pre>&lt;Button color="danger"/&gt;</pre>

      <Button color="danger"></Button>
    </div>
  </div>
  <div class="display">
    <div class="inner">
      <pre>&:hover, &:focus</pre>

      <Button color="default" demo="default"></Button>
    </div>
    <div class="inner">
      <Button color="primary" demo="primary"></Button>
    </div>
    <div class="inner">
      <Button color="secondary" demo="secondary"></Button>
    </div>
    <div class="inner">
      <Button color="danger" demo="danger"></Button>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.display {
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;

  .inner {
    margin-top: 20px;
    align-self: flex-end;
    margin-right: 30px;
    flex-basis: 200px;
  }
}

@media (min-width: 630px) {
  .display {
    .inner {
      flex-basis: 250px;
    }
  }
}
</style>
