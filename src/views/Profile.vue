<template>
  <div>
    <div id="particles-js"></div>
    <div id="card">
      <header id="profileMenu">
        <img
          src="../assets/images/AstroUltimate.png"
          class="profileLogo"
          alt="Astro PFP"
        />
        <div id="profileName">
          <div id="nameTag">
            <span id="username">Astro</span>
            <span id="discriminator">#6712</span>
            <span id="botTag">
              <svg
                class="botTagVerified"
                width="1.7em"
                height="1.7em"
                viewBox="3 0 16 6"
              >
                <path
                  d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"
                  fill="currentColor"
                ></path></svg
              >BOT
            </span>
          </div>
        </div>
        <div id="invite">
          <a
            href="https://discord.com/oauth2/authorize?client_id=715621848489918495&scope=bot&permissions=285736145"
            target="blank"
            rel="noopener noreferrer"
          >
            <div id="inviteButton">Invite Me</div>
          </a>
        </div>
      </header>
      <div id="profileDescription">
        <div id="stats">
          <p class="field">STATS</p>
          <p class="text" v-on:click="getStats">
            Servers: {{ guilds }}&nbsp;&nbsp; | &nbsp;&nbsp;Users: {{ users }}
          </p>
        </div>
        <div id="sections">
          <div id="sectionItems">
            <div class="serversItem">
              Mutual Servers
            </div>
            <router-link to="/" class="serversItem" id="backProfile">
              <div>
                Go Back
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div id="profileServers">
        <div id="serverScroller">
          <a
            href="https://discord.gg/yeXwVhg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="server">
              <div id="astroImage" />
              Astro Community
            </div>
          </a>
          <a
            href="https://discord.gg/4BTXnXu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="server">
              <div id="helpdeskImage" />
              Help Desk Community
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Profile",
  data() {
    return {
      guilds: "1100",
      users: "534640"
    };
  },
  beforeMount() {
    this.getStats();
  },
  methods: {
    async getStats() {
      axios({
        url: "http://135.181.106.198:8081/info"
      }).then(res => {
        this.guilds = res.data.guilds;
        this.users = res.data.users;
      });
    }
  }
};
</script>
