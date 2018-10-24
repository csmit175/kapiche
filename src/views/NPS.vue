<template>
  <div class="nps">
    <img src="/nps-icon.png" />
    <h2 class="title">Net Promoter Score (NPS)</h2>
    <span class="underline"></span>

    <div class="scores">
      <div class="score npsno">
        {{nps}}
      </div>
      <div class="score promoter">
        {{promoters}}
      </div>
      <div class="score passive">
        {{passives}}
      </div>
      <div class="score detractors">
        {{detractors}}
      </div>
    </div>
    
    <div class="graph"></div>
  </div>
</template>

<script>
// Anyone that responds with a 0 through 6 is considered a Detractor.
// Anyone that responds with a 7 or 8 is considered a Passive (or Neutral).
// Anyone that responds with a 9 or 10 is considered a Promoter.

export default {
  name: 'nps',
  computed: {
    total() {
      return this.$store.state.nps.length;
    },
    nps() {
      const nps = this.promoters - this.detractors;
      return nps.toFixed(1);
    },
    promoters() {
      const nps = this.$store.state.nps;
      let promoters = [];
      nps.forEach(block => {
        if (block.nps === 10 || block.nps === 9) {
          promoters.push(block.nps); 
        }
      });
      const numberOfPromoters = this.total / promoters.length * 10;
      return Math.round( numberOfPromoters * 10 ) / 10;
    },
    passives() {
      const nps = this.$store.state.nps;
      let passives = [];
      nps.forEach(block => {
        if (block.nps === 8 || block.nps === 7) {
          passives.push(block.nps);
        }
      });
      const numberOfPassives = this.total / passives.length * 10;
      return Math.round( numberOfPassives * 10 ) / 10;
    },
    detractors() {
      const nps = this.$store.state.nps;
      let detractors = [];
      nps.forEach(block => {
        if (block.nps <= 6) {
          detractors.push(block.nps); 
        }
      });
      const numberOfDetractors = this.total / detractors.length * 10;
      return Math.round( numberOfDetractors * 10 ) / 10;
    }
  }
}
</script>

<style lang="scss">

  .nps {
    width: calc(723px - 60px);
    box-shadow: 0px 1px 5px 0 rgba(0, 1, 1, 0.1);
    background-color: #ffffff;
    padding: 30px;
    .title {
      font-size: 20px;
      font-weight: bold;
    }
    .underline {
      margin-top: 20px;
      margin: auto;
      display: block;
      width: 100px;
      height: 1px;
      background-color: #e5e5e5;
    }
    .scores {
      display: flex;
      flex-direction: row;
      align-content: center;
      .score {
        &.npsno {

        }
        &.promoter {
          
        }
        &.passive {
          
        }
        &.detractor {
          
        }
      }
    }
  }

</style>