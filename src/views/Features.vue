<template>
  <div>
    <div id="particles-js"></div>
    <div id="card">
      <CardNavBar />
      <div id="featuresBG">
        <div class="featureWrapper">
          <img
            src="../assets/images/arrowRight.png"
            class="arrow"
            alt="arrow PNG"
          />
          <div class="featureDescription">
            Create temporary VCs (Voice Channels)<br />
            <span class="demo"
              ><a
                href="https://i.ibb.co/YTDxgLR/Astro-DEMO.gif"
                target="_blank"
                rel="noopener noreferrer"
                >[ Demo ]</a
              ></span
            >
          </div>
        </div>
        <br />
        <div class="featureWrapper">
          <img
            src="../assets/images/arrowRight.png"
            class="arrow"
            alt="arrow PNG"
          />
          <div class="featureDescription">
            Assign and retrieve roles when people join/leave VCs or
            Categories<br />
          </div>
        </div>
        <br />
        <div class="featureWrapper">
          <img
            src="../assets/images/arrowRight.png"
            class="arrow"
            alt="arrow PNG"
          />
          <div class="featureDescription">
            The owner of the VC has more than 15 commands to personalize and
            handle it<br />
          </div>
        </div>
        <br />
        <div class="featureWrapper">
          <img
            src="../assets/images/arrowRight.png"
            class="arrow"
            alt="arrow PNG"
          />
          <div class="featureDescription">
            With Astro's Interface users can use commands with reactions instead
            of typing them<br />
            <span class="demo"
              ><a
                href="https://i.ibb.co/RS2cKZj/astro-Interface.gif"
                target="_blank"
                rel="noopener noreferrer"
                >[ Demo ]</a
              ></span
            >
          </div>
        </div>
        <br />
        <div class="featureWrapper">
          <img
            src="../assets/images/arrowRight.png"
            class="arrow"
            alt="arrow PNG"
          />
          <div class="featureDescription">
            Advanced naming system for VCs with customizable templates and
            rules<br />
          </div>
        </div>
        <br />
        <div class="featureWrapper">
          <img
            src="../assets/images/arrowRight.png"
            class="arrow"
            alt="arrow PNG"
          />
          <div class="featureDescription">
            Ban any command so that users won't be able to use them<br />
          </div>
        </div>
        <br />
        <div class="featureWrapper">
          <img
            src="../assets/images/arrowRight.png"
            class="arrow"
            alt="arrow PNG"
          />
          <div class="featureDescription">
            Create temporary text chats linked to VCs<br />
            <span class="demo"
              ><a
                href="https://i.ibb.co/RS2cKZj/astro-Interface.gif"
                target="_blank"
                rel="noopener noreferrer"
                >[ Demo ]</a
              ></span
            >
          </div>
        </div>
        <br />
        <div class="featureWrapper">
          <img
            src="../assets/images/arrowRight.png"
            class="arrow"
            alt="arrow PNG"
          />
          <div class="featureDescription">
            and much more... Astro has over 50 commands just for Voice
            Channels!<br />
          </div>
        </div>
        <br />
        <p id="vcMeaning">(VC stands for "Voice Channel")</p>
      </div>
    </div>
  </div>
</template>

<script>
import CardNavBar from "@/components/cardSections/CardNavBar";
export default {
  name: "Ultimate",
  components: {
    CardNavBar
  }
};
</script>

<style scoped>
#featuresBG {
  font-size: 1.7em;
}

.arrow {
  width: 1.7em;
  margin-right: 0.6em;
  margin-top: -0.2em;
  display: table-cell;
  vertical-align: top;
}

.demo {
  color: var(--astro-purple);
}
.demo > a {
  color: var(--astro-purple);
  text-decoration: none;
}
.demo > a:visited {
  color: var(--astro-purple);
}
.demo > a:hover {
  color: white;
}

.featureWrapper {
  display: table-row;
}
.featureDescription {
  display: table-cell;
  vertical-align: top;
}

#vcMeaning {
  font-size: 0.8em;
  color: #d4d4d4;
}
</style>
