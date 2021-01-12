<template>
  <div>
    <div id="particles-js"></div>
    <div id="card">
      <CardNavBar />
      <div id="featuresBG">
        <p id="voteDescription">
          Here is a list of sites where you can support Astro by voting for him!
        </p>
        <img
          src="../assets/images/arrowRight.png"
          class="arrowCommands"
          alt="arrow PNG"
        />
        <a
          href="https://top.gg/bot/715621848489918495/vote"
          target="_blank"
          id="topgg"
          rel="noopener noreferrer"
          >Top.gg &nbsp;</a
        >
        <img
          src="../assets/images/arrowRight.png"
          class="arrowCommands"
          id="rotateArrow"
          alt="arrow PNG"
        /><br /><br />
        <img
          src="../assets/images/arrowRight.png"
          class="arrowCommands"
          alt="arrow PNG"
        />
        <a
          href="https://discordbotlist.com/bots/astro-6712/upvote"
          target="_blank"
          rel="noopener noreferrer"
          >Discord Bot List</a
        ><br /><br />
        <img
          src="../assets/images/arrowRight.png"
          class="arrowCommands"
          alt="arrow PNG"
        />
        <a
          href="https://botsfordiscord.com/bot/715621848489918495/vote"
          target="_blank"
          rel="noopener noreferrer"
          >Bots For Discord</a
        ><br /><br />
      </div>
    </div>
  </div>
</template>

<script>
import CardNavBar from "@/components/cardSections/CardNavBar";
export default {
  name: "Vote",
  components: {
    CardNavBar
  }
};
</script>

<style scoped>
#voteDescription {
  font-size: 0.8em;
}

/* Arrows */
.arrowCommands {
  width: 1.7em;
  vertical-align: middle;
  float: left;
  margin-right: 0.6em;
  margin-top: -0.2em;
}
#rotateArrow {
  float: none;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

#topgg {
  color: var(--astro-purple);
}
#topgg:hover {
  color: white !important;
}
</style>
