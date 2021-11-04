import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
      <div class="layout-footer" style="background-color: #1E90FF;   text-align: center;">
          <div style="text-align:center">

            <img src="assets/img/Footer.png" width="300" height="40" viewBox="0 0 24 24"/>
            <a href="https://ontheroadlending.org/" target="_blank" rel="noopener">
           <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#1976d2"/><path d="M0 0h24v24H0z" fill="none"/></svg>
           </a>
        </div>
      </div>
    `
})
export class AppFooterComponent {
}
