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
            <Label class="action-bar-title" text="Laboratórios"/>
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

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Acqua Solo – (44) 3523-9098, Campo Mourão-PR"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Agronomica- (51) 2131-6262, Porto Alegre-RS"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text=" Anna Laboratório de Nematologia-  (19) 34214397, Piracicaba-RS"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Laboratório Solos & Plantas- (66) 3544- 5637, Sorriso-MT"></Span>
            </FormattedString>
        </Label>   

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Labnema- jeronimo.vieira@ufpel.edu.br, Pelotas-RS"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Nemato Solution- (65) 996645392, Sapezal-MT"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Embrapa Agropecuária Oeste- (67) 3416-9700, Dourados-MS"></Span>
            </FormattedString>
        </Label>

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
          text_title: "Sugestões de laboratórios",
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

