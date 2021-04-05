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
            <Label class="action-bar-title" text="Nematoide de cisto da soja"/>
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
            <Span text="Heterodera glycines:  " fontStyle="italic"></Span>
            <Span :text="text_content" ></Span>
            </FormattedString>
        </Label>

          <Label
          class="page__content-title m-t-30"
          textDecoration="underline"
          fontSize=17
          text="Sintomas"
          textAlignment="center"/>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text=" Leve necrose no sistema radicular. No campo visualizam-se reboleiras com plantas menores e bem amareladas."></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Soja e feijão guandu são plantas hospedeiras predominantes."></Span>
            <Span text=" O cisto pode sobreviver por até 8 anos no solo. " ></Span>
            </FormattedString>
        </Label>

          <Label
          class="page__content-title m-t-30"
          textDecoration="underline"
          fontSize=17
          text="Manejo biológico"
          textAlignment="center"/>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Possuem maior período de ação e auxiliam na sustentabilidade e microbiota do solo."></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Os agentes biológicos registrados para essa espécie são: as bactérias "></Span>
            <Span text=" Pasteuria nishizawae e Bacillus amyloliquefaciens  " fontStyle="italic"/>
            <Span text="que agem nos ovos , juvenis e fêmeas e o fungo " />
            <Span text=" Trichoderma koningiopsis " fontStyle="italic"/>
            <Span text="que tem ação em ovos e juvenis." />
            </FormattedString>
        </Label>

        <Label
          class="page__content-title m-t-30"
          textDecoration="underline"
          fontSize=17
          text="Manejo cultural"
          textAlignment="center"/>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text=" Utilizar culturas que não favoreçam a multiplicação dessa espécie, por isso é de suma importância conhecer qual espécie de nematoide está presente na área em questão."></Span>
            </FormattedString>
        </Label>
      
        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="A "></Span>
            <Span text=" Crotalaria spectabilis " fontStyle="italic"/>
            <Span text="é uma importante aliada, pois é antagonista e repele a maioria das espécies de nematoides." />
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="A " />
            <Span text=" Crotalaria ocrhroleuca" fontStyle="italic"/>
            <Span text=" deve ser evitada, pois pode ser hospedeira e multiplicadora dessa espécie." />
            </FormattedString>
        </Label>

        <Label
          class="page__content-title m-t-30"
          textDecoration="underline"
          fontSize=17
          text="Manejo químico"
          textAlignment="center"/>

          <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text=" Não há nenhum produto químico registrado como nematicida químico para essa espécie."></Span>
            </FormattedString>
        </Label>
        <Label class="hr m-y-15" row="1"/>
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
          text_title: "Nematoide de cisto da soja",
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

