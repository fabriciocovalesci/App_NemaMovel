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
            <Label class="action-bar-title" text="ATENÇÃO"/>
        </ActionBar>


    <StackLayout @tap="onNavigationItemTap(Home)">
      <FlexboxLayout class="m-5 p-10" justifyContent="space-between"  flexDirection="column" height="100%">

        <StackLayout
        width="100%"
        visibility="visible"
        orientation="vertical">

        <Label class="page__content-alert"
          fontSize=22
          fontWeight="Bold"
          textAlignment="center"
          textWrap="true">
            <FormattedString>
            <Span text="ATENÇÃO, AS INFORMAÇÕES AQUI DISPONIBILIZADAS NÃO SUBSTITUEM A NECESSIDADE DE ANÁLISE LABORATORIAL." ></Span>
            </FormattedString>
        </Label>

         </StackLayout>

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
        Home: Home,
      };
    },
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Featured");
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

