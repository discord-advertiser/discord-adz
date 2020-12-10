<template>
  <div>
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
            <router-link to="/commands">
              <div class="role" id="commands">
                <div class="roleCircle"></div>
                <div class="roleName">Commands</div>
              </div>
            </router-link>
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
            Astro is a very powerful Discord bot, but wait, you are saying you
            own a professional Discord Server?<br />Well, Astro has an
            <b>Ultimate</b> version made exactly for that!<br />You can find out
            its perks & how to get it
            <a href="https://astro-bot.space/ultimate">here</a>!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
