import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
   }

  ngOnInit(): void {
  }

}
