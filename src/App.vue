<template>

  <div class="h-screen">
    <NavBar />
    <router-view />
    <HeroSection />
    <ServicePage />
    <ServicePage1 />
    <KeyFeature />
    <UpgradePage />
    <LearnPage />
    <FooterPage />
  </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue';
import ServicePage from '@/components/ServicePage.vue'; 
import ServicePage1 from './components/ServicePage1.vue';
import KeyFeature from './components/KeyFeature.vue';
import UpgradePage from './components/UpgradePage.vue';
import LearnPage from './components/LearnPage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    ServicePage,
    ServicePage1,
    KeyFeature,
    UpgradePage,
    LearnPage,
    FooterPage,
  },
}
</script>