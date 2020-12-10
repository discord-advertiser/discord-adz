<template>
  <div>
    <div id="particles-js"></div>
    <div id="card">
      <CardNavBar />
      <div id="ultimateContent">
        <div class="ultimateSection">
          <div class="ultimateTitle">
            <img
              src="../assets/images/animatedArrow.gif"
              alt="arrow PNG"
              class="ultimateAnimated"
            />What is Astro Ultimate?
          </div>
          <div class="ultimateText">
            Astro Ultimate is what you could call the premium version of Astro.
            It takes away every limit!
          </div>
        </div>

        <div class="ultimateSection">
          <div class="ultimateTitle">
            <img
              src="../assets/images/animatedArrow.gif"
              alt="arrow PNG"
              class="ultimateAnimated"
            />What does it offer?
          </div>
          <div class="ultimateText">
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">30 VC Generators</div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">50 Links</div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">
                Vote-Lock removed from all commands
              </div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">99.99% Uptime</div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">
                An Exclusive @Donator role in the Support Server
              </div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">Dedicated support</div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField" id="ultimateFeatures">
                Exclusive Commands:
                <br />
                <a
                  href="https://astro-bot.space/commands/vc#vcinvite"
                  target="_blank"
                  rel="noopener noreferrer"
                  >- VCInvite</a
                ><br />
                <a
                  href="https://astro-bot.space/commands/generator#autochat"
                  target="_blank"
                  rel="noopener noreferrer"
                  >- AutoChat</a
                ><br />
                <a
                  href="https://astro-bot.space/commands/generator#defaultstate"
                  target="_blank"
                  rel="noopener noreferrer"
                  >- DefaultState</a
                ><br />
                <a
                  href="https://astro-bot.space/commands/naming#defaultlockedname"
                  target="_blank"
                  rel="noopener noreferrer"
                  >- DefaultLockedName</a
                ><br />
                <a
                  href="https://astro-bot.space/commands/naming#addword"
                  target="_blank"
                  rel="noopener noreferrer"
                  >- AddWord</a
                ><br />
                <a
                  href="https://astro-bot.space/commands/generator#vcbots"
                  target="_blank"
                  rel="noopener noreferrer"
                  >- VCBots</a
                ><br />
                <a
                  href="https://astro-bot.space/commands/links#linkgame"
                  target="_blank"
                  rel="noopener noreferrer"
                  >- LinkGame</a
                ><br />
              </div>
            </div>
          </div>
        </div>

        <div class="ultimateSection">
          <div class="ultimateTitle">
            <img
              src="../assets/images/animatedArrow.gif"
              alt="arrow PNG"
              class="ultimateAnimated"
            />How to get it
          </div>
          <div class="ultimateText">
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">
                You can purchase @Astro Ultimate on
                <a
                  href="https://www.patreon.com/giuliopime"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Patreon</a
                >!
              </div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">
                If you have a big server with over 10000 active users and you
                would like to get the best Astro experience, you can shoot me a
                DM on Discord (&lt;/&gt; Giuliopime#4965) and I'll give you
                permanent access to Astro Ultimate!
              </div>
            </div>
            <br />
            <div class="fieldWrapper">
              <img
                src="../assets/images/arrowRight.png"
                class="arrowUltimate"
                alt="arrow PNG"
              />
              <div class="ultimateField">
                You can get one month of Astro Ultimate for your server with 50
                vote coins too.<br />Find out more about that in the
                <a
                  href="https://astro-bot.space/invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Astro's Community Server</a
                >!
              </div>
            </div>
          </div>
        </div>
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
