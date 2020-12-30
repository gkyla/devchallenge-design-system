<template>
  <h1>Buttons</h1>

  <component-layout>
    <Item msg="&lt;Button /&gt;">
      <Button></Button>
    </Item>

    <Item msg="&:hover, &:focus">
      <Button demo="default"></Button>
    </Item>
  </component-layout>

  <component-layout>
    <Item msg="&lt;Button variant='outline' /&gt;">
      <Button variant="outline"></Button>
    </Item>

    <Item msg="&:hover, &:focus">
      <Button variant="outline" demo="outline"></Button>
    </Item>
  </component-layout>

  <component-layout>
    <Item msg="&lt;Button variant='text' /&gt;">
      <Button variant="text"></Button>
    </Item>

    <Item msg="&:hover, &:focus">
      <Button variant="text" demo="text"></Button>
    </Item>
  </component-layout>

  <component-layout>
    <Item msg="&lt;Button disableShadow /&gt;">
      <Button disableShadow></Button>
    </Item>
    <Item msg="&lt;Button disableShadow color='primary' /&gt;">
      <Button disableShadow color="primary"></Button>
    </Item>
  </component-layout>

  <component-layout>
    <Item msg="&lt;Button disabled /&gt;">
      <Button disabled></Button>
    </Item>

    <Item msg="&lt;Button variant='text' disabled /&gt;">
      <Button variant="text" disabled></Button>
    </Item>
  </component-layout>

  <component-layout>
    <Item msg="&lt;Button startIcon='code' /&gt;">
      <Button startIcon="code" color="primary"></Button>
    </Item>

    <Item msg="&lt;Button endIcon='code'/&gt;">
      <Button endIcon="code"></Button>
    </Item>
  </component-layout>

  <component-layout>
    <Item msg="&lt;Button size='sm'/&gt;">
      <Button size="sm"></Button>
    </Item>

    <Item msg="&lt;Button size='md'/&gt;">
      <Button size="md"></Button>
    </Item>

    <Item msg="&lt;Button size='lg'/&gt;">
      <Button size="lg"></Button>
    </Item>
  </component-layout>

  <component-layout>
    <Item msg="&lt;Button color='default'/&gt;">
      <Button color="default"></Button>
    </Item>

    <Item msg="&lt;Button color='primary'/&gt;">
      <Button color="primary"></Button>
    </Item>

    <Item msg="&lt;Button color='secondary'/&gt;">
      <Button color="secondary"></Button>
    </Item>

    <Item msg="&lt;Button color='danger'/&gt;">
      <Button color="danger"></Button>
    </Item>
  </component-layout>

  <component-layout>
    <Item msg="&:hover, &:focus">
      <Button color="default" demo="default"></Button>
    </Item>

    <Item>
      <Button color="primary" demo="primary"></Button>
    </Item>

    <Item>
      <Button color="secondary" demo="secondary"></Button>
    </Item>

    <Item>
      <Button color="danger" demo="danger"></Button>
    </Item>
  </component-layout>
</template>

<script>
import ComponentLayout from "../components/ComponentLayout.vue";
import Item from "../components/Item.vue";
import Button from "../components/Button.vue";

export default {
  components: {
    Button,
    ComponentLayout,
    Item
  }
};
</script>

<style lang="scss" scoped></style>
