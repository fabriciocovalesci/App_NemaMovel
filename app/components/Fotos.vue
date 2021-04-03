<template>
  <Page class="page">
        <ActionBar class="action-bar">
            <!--
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"/>
            <!--
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
            <ActionItem icon="res://menu"
                        android:visibility="collapsed"
                        @tap="onDrawerButtonTap"
                        ios.position="left"/>
            <Label class="action-bar-title" text="Fotos"/>
        </ActionBar>

    <StackLayout @tap="onNavigationItemTap(Home)">
      <FlexboxLayout class="m-5 p-10" justifyContent="space-between"  flexDirection="column" height="100%">
      <ScrollView orientation="vertical">
      

        <StackLayout
        width="100%"
        visibility="visible"
        orientation="vertical">
        <Label
          class="page__content-title m-t-30"
          fontWeight="Bold"
          :text="text_title"
          textAlignment="center"/>
        <Image src="~/assets/images/nematoides.jpeg" class="m-10" height="500"  stretch="Fill"/>
       <Label class="hr m-y-15" row="1"/>
        <Label
          class="page__content-title m-t-30"
          fontWeight="Bold"
          text="Nematoide das lesões radiculares"
          textAlignment="center"/>
        <Image src="~/assets/images/radiculares.jpeg" class="m-10" height="300"  stretch="Fill"/>
       <Label class="hr m-5" row="1"/>
        <Label
          class="page__content-title m-t-30"
          fontWeight="Bold"
          text="Nematoide das galhas"
          textAlignment="center"/>
        <Image src="~/assets/images/galhas.jpeg" class="m-10" height="500"  stretch="Fill"/>
       <Label class="hr m-y-15" row="1"/>
        <Label
          class="page__content-title m-t-30"
          fontWeight="Bold"
          text="Nematoide de cisto de soja"
          textAlignment="center"/>
        <Image src="~/assets/images/soja.jpeg" class="m-10" height="500"  stretch="Fill"/>
       <Label class="hr m-y-15" row="1"/>


         </StackLayout>

      </ScrollView>
        <StackLayout
        width="100%"
        visibility="visible"
        orientation="horizontal"> 
       
      <Button width="50%"  class="-outline -rounded-lg" @tap="onNavigationItemTap(Home)">
        <FormattedString>
            <Span text="Continuar" class="fab"></Span>
        </FormattedString>
      </Button>
      <Image class="m-b-10"  @tap="onNavigationItemTap(Home)"  src="~/assets/images/Logo.png" />
     </StackLayout>
      </FlexboxLayout>   
      
    </StackLayout> 


  </Page>
</template>

<script>

import Home from "./Home";
import * as utils from "~/shared/utils";
import SelectedPageService from "../shared/selected-page-service";


export default {
    data() {
      return {
          text_title: "Nematoide",
          text_content_text_italic: "Heterodera glycines: ",
          text_content: "causa danos conhecidos como Nanismo amarelo da soja ou Amarelinho da soja.",
          text_content_sintomas: "",
        Home: Home,
      };
    },
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Featured");
      //this.text_content
    },
    components: {
      Home
    },
    methods: {
      onNavigationItemTap(component) {
        this.$navigateTo(component, {
          transition: "fade",
          backstackVisible: false,
          clearHistory: true
        });
        utils.closeDrawer();
      },
      onDrawerButtonTap() {
        utils.showDrawer();
      },
    }
    
};
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>

