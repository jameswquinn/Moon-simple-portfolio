import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

import './style.css';

import config from './config.json';

// landing component
Moon.component('landing-component',{
  data:config.landing,
  template: `<section class='landing' m-show="isActive">
      <div>
        <h1 class='animated fadeInDown headline center'>{{name}}</h1>
        <div class='animated fadeInDown tagline center'>{{experience}}</div>
      </div>
      <div class='pointer animated' m-on:click="handler">↓</div>
    </section>`,
    methods:{
    handler(){
      Jump(".intro");
    }
  }
});
// intro component
Moon.component('intro-component',{
  data:config.intro,
  template: `<section class="intro container" id="intro"  m-show="isActive">
      <div>
        <h2 class='header heading'>{{title}}</h2>
        <span m-html="contnent"></span>
      </div>
  </section>`
});
// projects component
Moon.component('projects-component',{
  data:config.projects,
  template: `<section class="projects container"  m-show="isActive">
      <h2 class="heading">{{title}}</h2>
      <div class="cards">
        <div m-for="item in cards" class="card">
          <h5 class="card-header">{{item.title}}</h5>
          <p class="card-body">{{item.description}}</p>
          <div class="card-footer center text-center">
            <p><a href="{{item.link}}" target="_blank">{{item.linkName}}</a></p>
          </div>
        </div>
      </div>
    </section>`
});
// talks component
Moon.component('talks-component',{
  data:config.talks,
  template: `<section class="talks container"  m-show="isActive">
      <h2 class="heading">{{title}}</h2>
      <div class='talks-container'>
        <ul>
         <li m-for="item in talks">
              <a href="{{item.link}}" title="{{item.name}}" target="_blank">
                  {{item.name}}
              </a>   
              ({{item.source}})
        </li>
        </ul>
      </div>
    </section>`
});
// workshops component
Moon.component('workshops-component',{
  data:config.workshops,
  template: `<section class="workshops container"  m-show="isActive">
        <h2 class="heading">{{title}}</h2>
        <div class="cards">
          <div m-for="item in cards" class="card">
            <h5 class="card-header">{{item.title}}</h5>
            <p class="card-body">{{item.description}}</p>
            <div class="card-footer center text-center">
              <p><a href="{{item.link}}" target="_blank">{{item.linkName}}</a></p>
            </div>
          </div>
        </div>
      </section>`
});
// contact component
Moon.component('contact-component',{
  data:config.contact,
  template: `<section class="contact container"  m-show="isActive">
        <h2 class="heading">{{title}}</h2>
        <form action="https://formspree.io/{{email}}" method="POST">
          <label for="name">{{labelName}}</label>
          <input type="text" placeholder="{{placeholderName}}" name="name" required>
          <label for="email">{{labelEmail}}</label>
          <input type="email" placeholder="{{placeholderEmail}}" name="_replyto" required>
          <label for="message">{{labelMessage}}</label>
          <textarea placeholder="{{placeholderMessage}}" name="message" required></textarea>
          <input type="hidden" name="_next" value="{{thanksUrl}}" />
          <input type="submit" value="{{submitBtn}}">
        </form>
      </section>`
});
// footer component
Moon.component('footer-component',{
  data:config.footer,
  template: `<footer class="container">
        <small m-html="content"></small>
      </footer>`
});


const App = new Moon();
App.mount('#root');