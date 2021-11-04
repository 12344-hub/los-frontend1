import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `

        <div class="layout-footer">
        <div class="card-container blue-container flex align-items-center justify-content-start">
            <div class="hidden w-4rem h-4rem bg-blue-500 text-white font-bold p-4 border-round mr-3">1</div>
            <div class="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round mr-3">2</div>
            <div class="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round">3</div>
        </div>
            <div class="layout-footer-left">
                <div class="github-star-badge">
					<img src="assets/img/Footer.png" width="300" height="40" viewBox="0 0 24 24"/>
				</div>
            </div>

            <div class="card">
                 <a href="https://ontheroadlending.org/" target="_blank" rel="noopener">
					<svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#1976d2"/><path d="M0 0h24v24H0z" fill="none"/></svg>
				</a>
            </div>
        </div>
    `
})
export class AppFooterComponent {
}
