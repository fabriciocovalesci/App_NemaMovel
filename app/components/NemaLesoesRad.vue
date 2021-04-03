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
            <Label class="action-bar-title" text="Nematoide das lesões radiculares"/>
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
            <Span text="Segundo grupo em importância econômica." />
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="As principais espécies são" />
            <Span text=" Pratylenchus brachyurus" fontStyle="italic"></Span>
            <Span text=" e " />
            <Span text=" Pratylenchus zeae." fontStyle="italic"></Span>
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
            <Span text="Lesões necróticas na raízes, volume radicular reduzido e pequenas reboleiras na lavoura."></Span>
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
            <Span text="Possuem maior período de ação e auxiliam na sustentabilidade e microbiota do solo. Atualmente tem registrado para essa espécie as bactérias "></Span>
            <Span text=" Bacillus sp, " fontStyle="italic"/>
            <Span text=" os fungos " />
            <Span text=" Purpureocilium lilacinum e Trichoderma sp." fontStyle="italic"/>
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
            <Span text="Utilizar culturas que não favoreçam a multiplicação dessa espécie, por isso é de suma importância conhecer qual espécie de nematoide está presente na área em questão"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Áreas com "></Span>
            <Span text=" Pratylenchus brachyurus," fontStyle="italic"/>
            <Span text=" a "></Span>
            <Span text="Crotalaria spectabilis" fontStyle="italic"/>
            <Span text=" C. breviflora. " fontStyle="italic" textDecoration="underline"/>
            <Span text=" e "></Span>
            <Span text=" C. Ochroleuca " fontStyle="italic"/>
            <Span text=" são indicadas para rotação de cultura."></Span>
            <Span text="Evitar " />
            <Span text=" Crotalaria junceae " fontStyle="italic"/>
            <Span text="em áreas infestadas com " />
            <Span text=" P. brachyurus, " fontStyle="italic"/>
            <Span text="pois pode apresentar reações variáveis, como a multiplicação dessa espécie." />
            </FormattedString>
        </Label>
    
        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Áreas com "></Span>
            <Span text=" Pratylenchus brachyurus e P. zeae " fontStyle="italic"/>
            <Span text=" não devem ser rotacionadas com braquiárias, pois podem estão diretamente ligadas ao aumento populacional dessas espécies."></Span>
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
            <Span text=" Pode ser feito via tratamento de sementes ou no sulco de plantio. Auxilia para que a penetração inicial dos nematoides nas plantas seja menor, fazendo com que o sistema radicular venha a ser preservado no início da cultura. Apresenta período residual de aproximadamente 30 dias."></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Para as culturas do algodão, cana-de-açúcar e soja, a Abamectina é registrado para "></Span>
            <Span text=" Pratylenchus brachyurus." fontStyle="italic"/>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Para o milho, a Abamectina é registrada para "></Span>
            <Span text=" Pratylenchus brachyurus e P. zeae. Cadusafós " fontStyle="italic"/>
            <Span text=" é registrado para  "></Span>
            <Span text=" Pratylenchus brachyurus " fontStyle="italic"/>
            <Span text=" na cultura da soja e  "></Span>
            <Span text=" P. zeae " fontStyle="italic"/>
            <Span text=" para a cultura da cana-de-açúcar."></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="A Fluensulfona é registrada para  "></Span>
            <Span text=" Pratylenchus brachyurus " fontStyle="italic"/>
            <Span text=" na cultura do algodão, batata e soja. Fluazinan + Tiofanato metilico são registrados para "></Span>
            <Span text=" Pratylenchus zeae " fontStyle="italic"/>
            <Span text=" na cultura do milho. Fluopiram é registrado para "></Span>
            <Span text="  Pratylenchus brachyurus " fontStyle="italic"/>
            <Span text=" nas culturas do algodão, milho e soja."></Span>
            </FormattedString>
        </Label>
        <Label class="hr m-5" row="1"/>
        <Image src="~/assets/images/radiculares.jpeg" class="m-10" height="300"  stretch="Fill"/>
       <Label class="hr m-5" row="1"/>
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
          text_title: "Nematoide das lesões radiculares",
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

