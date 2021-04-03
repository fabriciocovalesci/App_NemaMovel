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
            <Label class="action-bar-title" text="Realizando a Amostragem"/>
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
            <Span text="A amostra deve ser composta por pelo menos 500g de solo e 100g de raízes;"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Evite coletar as amostras em solo seco ou muito encharcado, as  raízes não podem estar em decomposição ou podres;"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Coletar preferencialmente no florescimento da cultura;"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Dividir a coleta em áreas com histórico parecidos;"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Dividir a área amostrada de 5 a 30 amostras por ha;"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Profundidade da amostra de 0 a 20cm;"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Identificar as amostras com nome e o máximo de informações possíveis. Ex: cultura coletada, local, culturas anteriores, plantas daninhas ocorrentes e data da coleta;"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Armazenar a amostra em local seco e arejado, sem contato com o sol e enviá-la o mais rápido possível ao laboratório. Se preciso armazenar por uns dias, utilizar a gaveta de verduras da geladeira."></Span>
            </FormattedString> 
        </Label>
    
        <Label
          class="page__content-title m-t-30"
          textDecoration="underline"
          fontSize=17
          text="Coleta em área com sintomas"
          textAlignment="center"/>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Retirar as amostras das bordas das reboleiras, onde há menos sintomas;"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Cortar o solo e as raízes com ajuda de pá ou enxada, as plantas não devem ser arrancadas, pois o sistema radicular precisa estar preservado;"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Fazer amostragem de área próxima a reboleira, mesmo sem sintoma."></Span>
            </FormattedString>
        </Label>

        <Label
          class="page__content-title m-t-30"
          textDecoration="underline"
          fontSize=17
          text="Coleta em área sem sintomas"
          textAlignment="center"/>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Retirar amostras de solo e raízes em zigue-zague;"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Seguir o padrão de amostragem já citado anteriormente."></Span>
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
          text_title: "Realizando a Amostragem",
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

