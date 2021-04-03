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
            <Label class="action-bar-title" text="Nematoide das galhas"/>
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
            <Span text="Grupo de maior importância econômica e responsável por cerca de 5% das perdas mundiais." ></Span>
            </FormattedString>
        </Label>
        
        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="As principais espécies são" ></Span>
            <Span text="Meloidogyne incognita" fontStyle="italic"></Span>
            <Span text=" e " ></Span> São muito encontrados em soja, milho, hortaliças,  café, algodão e cana-de-açúcar.  
            <Span text="M. javanica." fontStyle="italic"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="São muito encontrados em soja, milho, hortaliças,  café, algodão e cana-de-açúcar." ></Span>
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
            <!-- <Span text="Sintomas:" textDecoration="underline"></Span> -->
            <Span text=" Engrossamento do sistema radicular e ocorrência de reboleiras com plantas menores e amareladas na lavoura."></Span>
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
            <Span text=" Possuem maior período de ação e auxiliam na sustentabilidade e microbiota do solo. Atualmente os fungos registrados para a cultura da soja são "></Span>
            <Span text=" Paecilomyces lilacinus " fontStyle="italic"/>
            <Span text=" Purpureocillium lillacinus " fontStyle="italic"/>
            <Span text=" e " />
            <Span text=" Pochonia chlamiydosporia, " fontStyle="italic"/>
            <Span text="ambos parasitam ovos. As bactérias " />
            <Span text=" Bacillus sp.  " fontStyle="italic"/>
            <Span text=" atuam indiretamente no nematoide, afetando o reconhecimento nematoide-planta." />
            <Span text=" Para as culturas de alface, cana-de-açúcar e tomate, " />
            <Span text="Purpureoncillum lilacinum" fontStyle="italic"/>
            <Span text=" são recomendados. Há muito estudo envolvendo agentes biológicos e novas misturas que auxiliarão no manejo de diversas culturas. "/>
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
            <!-- <Span text="Manejo cultural:" textDecoration="underline"></Span> -->
            <Span text=" Utilizar culturas que não favoreçam a multiplicação dessa espécie, por isso é de suma importância conhecer qual espécie de nematoide está presente na área em questão. Áreas com "></Span>
            <Span text="Meloidogyne sp., " fontStyle="italic"/>
            <Span text="a "/>
            <Span text="Crotalaria spectabilis" fontStyle="italic"/>
            <Span text="é indicada para rotação de cultura. Plantas como nabo forrageiro, aveia preta e girassol são boas hospedeiras, favorecendo a multiplicação dessa espécie." />
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
            <Span text=" Pode ser feito via tratamento de sementes ou no sulco de plantio. Auxilia para que a penetração inicial dos nematoides nas plantas seja menor, fazendo com que o sistema radicular venha a ser preservado no início da cultura. Apresenta período residual de aproximadamente 30 dias. Para a soja e algodão os ingredientes ativos registrados são:"></Span>
            </FormattedString>
        </Label>

        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text.decode="&#xf111;" class="nt-icon fas"/>
            <Span text=" Abamectina" ></Span>
            </FormattedString>
        </Label>
        <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text.decode="&#xf111;" class="nt-icon fas"/>
            <Span text=" Cadusafós" ></Span>
            </FormattedString>
        </Label>
         <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text.decode="&#xf111;" class="nt-icon fas"/>
            <Span text=" Fluensulfona" ></Span>
            </FormattedString>
        </Label>
          <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text.decode="&#xf111;" class="nt-icon fas"/>
            <Span text=" Fluopiran"></Span>
            </FormattedString>
        </Label>

          <Label class="p-l-15 p-b-10 m-r-20 m-t-10"
          fontSize=18
          textWrap="true">
            <FormattedString>
            <Span text="Os igredientes ativos Fluazinam + Tiofanato metílico são registrados apenas para a cultura da soja. Para a cultura do milho, os ingredientes ativos registrados são Abamectina e o Fluopiran, para a espécie de M. incógnita. Para as culturas como alho, cebola,  cenoura, pimentão e tomate, o ingrediente ativo Fluensulfona é registrado."></Span>
            </FormattedString>
        </Label>
        <Label class="hr m-y-15" row="1"/>
        <Image src="~/assets/images/galhas.jpeg" class="m-10" height="500"  stretch="Fill"/>
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
          text_title: "Nematoide das galhas",
          items: ["Abamectina", "Cadusafós", "Fluensulfona", "Fluopiran"],
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

