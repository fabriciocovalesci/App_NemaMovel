<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content">
        <StackLayout row="0" class="nt-drawer__header">
            <Image class="nt-drawer__header-image image-header" src="~/assets/images/Logo.png" stretch="aspectFill"/>
            <Label class="nt-drawer__header-brand" text="NemaMóvel"/>
        </StackLayout>

        <ScrollView row="1" class="nt-drawer__body">
            <StackLayout>
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Home)">
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
                    <Label col="1" text="Home" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Nematoide' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Nematoide)">
                    <Label col="0" text.decode="&#xf4d8;" class="nt-icon fas"/>
                    <Label col="1" text="O que são Nematoides ?" class="p-r-10"/>
                </GridLayout>
 
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'NemaCistoSoja' ? ' -selected': '')"
                            @tap="onNavigationItemTap(NemaCistoSoja)">
                    <Label col="0" text.decode="&#xf18c;" class="nt-icon fab"/>
                    <Label col="1" text="Nematoide de cisto de soja" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'NemaGalhas' ? ' -selected': '')"
                            @tap="onNavigationItemTap(NemaGalhas)">
                    <Label col="0" text.decode="&#xf1bb;" class="nt-icon fas"/>
                    <Label col="1" text="Nematoide das galhas" class="p-r-10"/>
                </GridLayout> 

                <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'NemaLesoesRad' ? ' -selected': '')"
                    @tap="onNavigationItemTap(NemaLesoesRad)">
                    <Label col="0" text.decode="&#xf06c;" class="nt-icon fas"/>
                    <Label col="1" text="Nematoide das lesões radiculares" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'NemaCultTolerResi' ? ' -selected': '')"
                    @tap="onNavigationItemTap(NemaCultTolerResi)">
                    <Label col="0" text.decode="&#xf06c;" class="nt-icon fas"/>
                    <Label col="1" text="Cultivares Tolerantes X Resistentes" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'NemaPlanDan' ? ' -selected': '')"
                    @tap="onNavigationItemTap(NemaPlanDan)">
                    <Label col="0" text.decode="&#xf4d8;" class="nt-icon fas"/>
                    <Label col="1" text="Plantas Daninhas X Nematoides" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'Disseminacao' ? ' -selected': '')"
                    @tap="onNavigationItemTap(Disseminacao)">
                    <Label col="0" text.decode="&#xf071;" class="nt-icon fas"/>
                    <Label col="1" text="Disseminação" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'Contaminou' ? ' -selected': '')"
                    @tap="onNavigationItemTap(Contaminou)">
                    <Label col="0" text.decode="&#xf7b9;" class="nt-icon fas"/>
                    <Label col="1" text="Contaminou o que fazer ?" class="p-r-10"/>
                </GridLayout> 

                <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'Amostras' ? ' -selected': '')"
                    @tap="onNavigationItemTap(Amostras)">
                    <Label col="0" text.decode="&#xf54b;" class="nt-icon fas"/>
                    <Label col="1" text="Realizando a amostragem" class="p-r-10"/>
                </GridLayout> 
                
                <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'Laboratorio' ? ' -selected': '')"
                    @tap="onNavigationItemTap(Laboratorio)">
                    <Label col="0" text.decode="&#xf610;" class="nt-icon fas"/>
                    <Label col="1" text="Sugestões de laboratórios" class="p-r-10"/>
                </GridLayout> 

                <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'Fotos' ? ' -selected': '')"
                    @tap="onNavigationItemTap(Fotos)">
                    <Label col="0" text.decode="&#xf302;" class="nt-icon fas"/>
                    <Label col="1" text="Fotos" class="p-r-10"/>
                </GridLayout> 

                <StackLayout class="hr"/>
            </StackLayout>
        </ScrollView>
    </GridLayout>
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
      SelectedPageService.getInstance().selectedPage$
        .subscribe((selectedPage) => this.selectedPage = selectedPage);
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
        Fotos: Fotos,
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
      Fotos
    },
    methods: {
      onNavigationItemTap(component) {
        this.$navigateTo(component, {
          clearHistory: true
        });
        utils.closeDrawer();
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
