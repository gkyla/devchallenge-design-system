<template>
  <h1>Inputs</h1>

  <!-- Input Default -->
  <component-layout>
    <Item msg="&lt;Input /&gt;">
      <Input />
    </Item>

    <Item msg="&:hover">
      <Input demo="hover" />
    </Item>

    <Item msg="&:focus">
      <Input demo="focus" />
    </Item>
  </component-layout>

  <!-- Input Error -->
  <component-layout>
    <Item msg="&lt;Input error /&gt;">
      <Input error />
    </Item>

    <Item msg="&:hover">
      <Input demo="hover" />
    </Item>

    <Item msg="&:focus">
      <Input error demo="error" />
    </Item>
  </component-layout>

  <!-- Input Disabled -->
  <component-layout>
    <Item msg="&lt;Input disabled /&gt;">
      <Input disabled />
    </Item>
  </component-layout>

  <!-- Input helperText -->
  <component-layout>
    <Item msg="&lt;Input helperText='Wrong Password' /&gt;">
      <Input helperText="Wrong Password" />
    </Item>

    <Item msg="&lt;Input helperText='Wrong Password' error /&gt;">
      <Input helperText="Wrong Password" error />
    </Item>
  </component-layout>

  <!-- Input startIcon & endIcon -->
  <component-layout>
    <Item msg="&lt;Input startIcon='call' /&gt;">
      <Input startIcon="call" />
    </Item>

    <Item msg="&lt;Input endIcon='lock' /&gt;">
      <Input endIcon="lock" />
    </Item>
  </component-layout>

  <!-- Input Value -->
  <component-layout>
    <Item msg="&lt;Input value='text' /&gt;">
      <Input value="text" />
    </Item>
  </component-layout>

  <!-- Input Size -->
  <component-layout>
    <Item msg="&lt;Input size='sm' /&gt;">
      <Input size="sm" />
    </Item>

    <Item msg="&lt;Input size='md' /&gt;">
      <Input size="md" />
    </Item>
  </component-layout>

  <component-layout display="block">
    <Item msg="&lt;Input fullWidth /&gt;">
      <Input fullWidth />
    </Item>
  </component-layout>

  <component-layout>
    <Item msg="&lt;Input multiline row='4' /&gt;">
      <Input multiline row="4" />
    </Item>
  </component-layout>
</template>

<script>
import ComponentLayout from "../components/ComponentLayout.vue";
import Item from "../components/Item.vue";
import Input from "../components/Input.vue";

export default {
  components: {
    Input,
    Item,
    ComponentLayout
  }
};
</script>
