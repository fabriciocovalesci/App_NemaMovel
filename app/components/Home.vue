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
            <Label class="action-bar-title" text="Home"/>
        </ActionBar>

      <ScrollView>
       <Label class="hr m-y-15" row="1"/>

      <StackLayout>

       <Label class="hr m-y-15" row="1"/>
      <GridLayout columns="auto,auto" row="2" rows="*, *, *, *, *, *">
        <Image src="~/assets/images/nematoides.jpeg" class="image-home" height="100" row=0  stretch="aspectFill"/>
        <Button class="-outline -rounded-lg buttonStyle" width="230" row=0 col=1 @tap="onNavigationItemTap(Nematoide)">
          <FormattedString>
              <Span text="O que são Nematoides ?"></Span>
          </FormattedString>
        </Button>
      </GridLayout>
      <Label class="hr m-y-15" row="1"/>
          <GridLayout columns="auto,auto" row="2" rows="*, *, *, *, *, *">
                    <Image src="~/assets/images/soja.jpeg" class="image-home" height="100" row=0  stretch="aspectFill"/>
                    <Button class="-outline -rounded-lg buttonStyle" width="230" row=0 col=1 @tap="onNavigationItemTap(NemaCistoSoja)">
                    <FormattedString>
                        <Span text="Nematoide de cisto de soja"></Span>
                    </FormattedString>
                    </Button>
                </GridLayout>
        <Label class="hr m-y-15" row="1"/>
                  <GridLayout columns="auto,auto" row="2" rows="*, *, *, *, *, *">
                    <Image src="~/assets/images/galhas.jpeg" class="image-home" height="100" row=0  stretch="aspectFill"/>
                    <Button class="-outline -rounded-lg buttonStyle" width="230" row=0 col=1 @tap="onNavigationItemTap(NemaGalhas)">
                    <FormattedString>
                        <Span text="Nematoide das galhas"></Span>
                    </FormattedString>
                    </Button>
                </GridLayout>
        <Label class="hr m-y-15" row="1"/>
                  <GridLayout columns="auto,auto" row="2" rows="*, *, *, *, *, *">
                    <Image src="~/assets/images/radiculares.jpeg" class="image-home" height="100" row=0  stretch="aspectFill"/>
                    <Button class="-outline -rounded-lg buttonStyle" width="230" row=0 col=1 @tap="onNavigationItemTap(NemaLesoesRad)">
                    <FormattedString>
                        <Span text="Nematoide das lesões radiculares"></Span>
                    </FormattedString>
                    </Button>
                </GridLayout>
        <Label class="hr m-y-15" row="1"/>
                <GridLayout columns="auto,auto" row="2" rows="*, *, *, *, *, *">
                    <Image src="~/assets/images/Resistentes.jpeg" class="image-home" width="80" height="100" row=0  stretch="aspectFill"/>
                    <Button class="-outline -rounded-lg buttonStyle" width="230" row=0 col=1 @tap="onNavigationItemTap(NemaCultTolerResi)">
                    <FormattedString>
                        <Span text="Tolerantes X Resistentes"></Span>
                    </FormattedString>
                    </Button>
                </GridLayout>
        <Label class="hr m-y-15" row="1"/>
                  <GridLayout columns="auto,auto" row="2" rows="*, *, *, *, *, *">
                    <Image src="~/assets/images/plantasDaninha.jpeg" class="image-home" height="100" row=0  stretch="aspectFill"/>
                    <Button class="-outline -rounded-lg buttonStyle" width="230" row=0 col=1 @tap="onNavigationItemTap(NemaPlanDan)">
                    <FormattedString>
                        <Span text="Plantas Daninhas X Nematoides"></Span>
                    </FormattedString>
                    </Button>
                </GridLayout>
        <Label class="hr m-y-15" row="1"/>
                  <GridLayout columns="auto,auto" row="2" rows="*, *, *, *, *, *">
                    <Image src="~/assets/images/Disseminacao.jpg" class="m-l-20" height="100" row=0  stretch="aspectFill"/>
                    <Button class="-outline -rounded-lg buttonStylePonto" width="230" row=0 col=1 @tap="onNavigationItemTap(Disseminacao)">
                    <FormattedString>
                        <Span text="Disseminação"></Span>
                    </FormattedString>
                    </Button>
                </GridLayout>
        <Label class="hr m-y-15" row="1"/>
      <GridLayout columns="auto,auto" row="2" rows="*, *, *, *, *, *">
        <Image src="~/assets/images/Ponto.png" class="image-home" height="100" row=0  stretch="aspectFill"/>
        <Button class="-outline -rounded-lg buttonStyle" width="230" row=0 col=1 @tap="onNavigationItemTap(Contaminou)">
          <FormattedString>
              <Span text="Contaminou o que fazer ?"></Span>
          </FormattedString>
        </Button>
      </GridLayout>
      <Label class="hr m-y-15" row="1"/>

      <GridLayout columns="auto,auto" row="2" rows="*, *, *, *, *, *">
        <Image src="~/assets/images/Amostra.png" class="image-home" width="80" height="100" row=0  stretch="aspectFill"/>
        <Button class="-outline -rounded-lg buttonStyle" width="230" row=0 col=1 @tap="onNavigationItemTap(Amostras)">
          <FormattedString>
              <Span text="Realizando a amostragem"></Span>
          </FormattedString>
        </Button>
      </GridLayout>
      <Label class="hr m-y-15" row="1"/>

      <GridLayout columns="auto,auto" row="2" rows="*, *, *, *, *, *">
        <Image src="~/assets/images/laboratorio.png" class="image-home" height="100" row=0  stretch="aspectFill"/>
        <Button class="-outline -rounded-lg buttonStyle" width="230" row=0 col=1 @tap="onNavigationItemTap(Laboratorio)">
          <FormattedString>
              <Span  text="Sugestões de laboratórios"></Span>
          </FormattedString>
        </Button>
      </GridLayout>
      <Label class="hr m-y-15" row="1"/>     

      <GridLayout columns="auto,auto" row="2" rows="*, *, *, *, *, *">
        <Image src="~/assets/images/fotos.png" class="image-home" height="100" row=0  stretch="aspectFill"/>
        <Button class="-outline -rounded-lg buttonStyle" width="230" row=0 col=1 @tap="onNavigationItemTap(Fotos)">
          <FormattedString>
              <Span  text="Fotos"></Span>
          </FormattedString>
        </Button>
      </GridLayout>
      <Label class="hr m-y-15" row="1"/>    
      </StackLayout>
		</ScrollView>
    </Page>
</template>

<script>
  import Nematoide from "./Nematoide";
  import Home from "./Home";
  import NemaLesoesRad from "./NemaLesoesRad";
  import NemaGalhas from "./NemaGalhas";
  import NemaCistoSoja from "./NemaCistoSoja"; 
  import NemaPlanDan from "./NemaPlanDan";
  import NemaCultTolerResi from "./NemaCultTolerResi";
  import Disseminacao from "./Disseminacao";
  import ComoEvitar from "./ComoEvitar";
  import Contaminou from "./Contaminou";
  import Amostras from "./Amostras";
  import Laboratorio from "./Laboratorio";
  import About from "./About";
  import Fotos from "./Fotos";
  import * as utils from "~/shared/utils";
  import SelectedPageService from "~/shared/selected-page-service";

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Home");
    },
    data() {
      return {
        Nematoide: Nematoide,
        Home: Home,
        NemaLesoesRad: NemaLesoesRad,
        NemaGalhas: NemaGalhas,
        NemaCistoSoja: NemaCistoSoja,
        NemaPlanDan: NemaPlanDan,
        NemaCultTolerResi: NemaCultTolerResi,
        Disseminacao: Disseminacao,
        ComoEvitar: ComoEvitar,
        Contaminou: Contaminou,
        Amostras: Amostras,
        Laboratorio: Laboratorio,
        About: About,
        Fotos:Fotos,
        NemaCultTolerResi: NemaCultTolerResi,
        selectedPage: ""
      };
    },
    components: {
      Nematoide,
      Home,
      NemaLesoesRad,
      NemaGalhas,
      NemaCistoSoja,
      NemaPlanDan,
      Disseminacao,
      ComoEvitar,
      Contaminou,
      Amostras,
      Laboratorio,
      About,
      Fotos,
      NemaCultTolerResi
    },
    methods: {
      onNavigationItemTap(component) {
        this.$navigateTo(component, {
          clearHistory: true
        });
        utils.closeDrawer();
      },
      onDrawerButtonTap() {
        utils.showDrawer();
      }
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
