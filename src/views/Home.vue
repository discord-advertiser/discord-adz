<template>
  <div id="card">
    <div id="info">
      <router-link to="/profile">
        <div class="imageContainer" id="openProfile">
          <img
            src="../assets/images/AstroUltimate.png"
            class="logo"
            alt="Astro PFP"
          />
          <div class="imageOverlay">
            <div class="imageText">VIEW PROFILE</div>
          </div>
        </div>
      </router-link>
      <br />
      <p id="name"><b>Astro</b>#6712</p>
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
      <p id="title">Take your server to the next level!</p>
    </div>

    <div id="description">
      <p class="field">PLAYING A GAME</p>
      <p class="text">
        Your Voice Channels, all in one place!<br />Creating temporary Voice
        Channels and letting users handle them.<br />Assigning and removing
        roles when users join/leave Voice Channels or Categories!
      </p>
    </div>

    <div id="greyBG">
      <div id="roles">
        <p class="field">ROLES</p>
        <div class="roles">
          <router-link to="/features">
            <div class="role" id="features">
              <div class="roleCircle"></div>
              <div class="roleName">Features</div>
            </div>
          </router-link>
          <a
            href="https://docs.astro-bot.space"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="role" id="commands">
              <div class="roleCircle"></div>
              <div class="roleName">Documentation</div>
            </div>
          </a>
          <router-link to="/ultimate">
            <div class="role" id="ultimate">
              <div class="roleCircle"></div>
              <div class="roleName">Ultimate</div>
            </div>
          </router-link>
        </div>
        <div class="roles">
          <a
            href="https://discord.com/oauth2/authorize?client_id=715621848489918495&scope=bot&permissions=285736145"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="roletwo" id="invite">
              <div class="roleCircle"></div>
              <div class="roleName">Invite Me</div>
            </div>
          </a>
          <a
            href="https://discord.com/invite/pE4VfWF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="roletwo" id="support">
              <div class="roleCircle"></div>
              <div class="roleName">Support</div>
            </div>
          </a>
          <router-link to="/vote">
            <div class="roletwo" id="vote">
              <div class="roleCircle"></div>
              <div class="roleName">Vote</div>
            </div>
          </router-link>
        </div>
      </div>
      <div id="notes">
        <p class="field">NOTE</p>
        <p class="text">
          Astro is a very powerful Discord bot, but wait, you are saying you own
          a professional Discord Server?<br />Well, Astro has an
          <b>Ultimate</b> version made exactly for that!<br />You can find out
          its perks & how to get it
          <a href="https://astro-bot.space/ultimate">here</a>!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
#info {
  background: var(--discord-cyan);
  border-radius: 1em 1em 0 0;
  padding-top: 4%;
}

/* Astro PFP */
.imageContainer {
  position: relative;
  width: 35%;
  height: 35%;
  left: 50%;
  transform: translateX(-50%);
}
.logo {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.imageOverlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 98.7%;
  width: 100%;
  opacity: 0;
  border-radius: 50%;
  transition: 0.1s ease;
  background: rgba(0, 0, 0, 0.5);
}
.imageContainer:hover .imageOverlay {
  opacity: 1;
  cursor: pointer;
}
.imageText {
  color: white;
  font-size: 1.6em;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Bot name */
#name {
  display: inline-block;
  font-size: 1.25em;
}

/* Slogan of the bot */
#title {
  font-size: 2.5em;
  font-weight: 700;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-top: 0.2em;
}

/* Middle div */
#description {
  background: var(--discord-light-cyan);
  padding: 0.125em 0.625em 0.125em 1.5625em;
}

/* Bottom div */
#greyBG {
  background: var(--discord-gray);
  padding: 0.125em 0.625em 1.5625em 1.5625em;
  border-radius: 0 0 1em 1em;
}

/* Role buttons */
#roles {
  text-align: left;
}
#roles a,
a:hover {
  text-decoration: none;
}
.roles {
  margin: 0.625em 0.25em 0 0;
  display: flex;
  flex-flow: row wrap;
}
.role,
.roletwo {
  margin: 0.125em 0.625em 0.3125em 0;
  display: inline-flex;
  align-items: center;
  border: 0.1em solid;
  border-radius: 0.9375em;
  padding: 0.125em 0.625em 0.2em 0.125em;
  font-size: 1.25em;
  font-weight: 600;
}
.role {
  color: #bb4fee;
  border-color: #bb7fee;
}
.role > .roleCircle {
  background: #bb4fee;
}
.role:hover {
  background: black;
  cursor: pointer;
}
.roletwo {
  color: var(--discord-cyan);
  border-color: white;
}
.roletwo > .roleCircle {
  background: var(--discord-cyan);
}
.roletwo:hover {
  border-color: var(--discord-cyan);
  background: white;
  cursor: pointer;
}
.roleCircle {
  float: left;
  width: 0.75em;
  height: 0.75em;
  border-radius: 50%;
  margin: 0 0.125em;
}
.roleName {
  white-space: nowrap;
  margin: 0 0.125em;
}

/* Notes section */
#notes {
  margin-top: 1.875em;
}
#notes a {
  text-decoration: none;
  color: var(--discord-cyan);
}
#notes a:hover {
  color: white;
  text-decoration: underline;
}
</style>
