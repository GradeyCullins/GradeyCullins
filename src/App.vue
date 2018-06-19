<template>
  <div id="app">
    <div id="header">
        <div id="header-container">
          <div id="links-container">
            <div class="link">
              <a href="/resources/CS_Resume_Gradey_Cullins_1_8_18_FINAL.pdf" target="_blank">
                <div>
                <i class="fitted big blue file pdf outline icon"></i>
                <p>resum&eacute;</p>
                </div>
              </a>
            </div>
            <div class="link">
              <a href="https://www.linkedin.com/in/gradey-cullins-738b2045?trk=nav_responsive_tab_profile_pic" target="_blank">
                <div>
                <i class="fitted big link blue linkedin icon"></i>
                <p>Linkedin</p>
                </div>
              </a>
            </div>
            <div class="link">
              <a href="https://github.com/GradeyCullins" target="_blank">
                <div>
                <i class="fitted big link blue github icon"></i>
                <p>Github</p>
                </div>
              </a>
            </div>
            <div class="link">
              <a href="mailto:gradeycullins@gmail.com">
                <div>
                <i class="fitted big link blue mail icon"></i>
                <p>gradeycullins@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body {
  font-family: monospace;
  margin: 0;
  padding: 0;
  font-size: 1.05em;
}

a {
  outline: none;
  text-decoration: none;
  color: #5a93ed;
}

a:visited {
  color: #5a93ed;
}

#header {
  padding-top: 1%;
  /* background: purple; */
}

#header-container {
  margin-left: 10%;
}

#links-container {
  margin: 2em 0 1em 0;
}

#about {
  margin-top: 2.3%;
}

.link {
  margin-right: 2.5%;
  display: inline-block;

}

#nav_list {
  list-style-type: none;
  padding-inline-start: 4%;
}

li {
  margin-top: 2%;
}

#nav_column {
  margin-top: 2em;
  float: left;
  width: 8%;
  position: fixed;
  background: #f4f4f4;
}

#left_column {
  float: left;
  width: 50%;
  margin-left: 10%;
  /* background: green; */
}

#right_column {
  float: right;
  width: 20%;
  /* background: blue; */
}
</style>
