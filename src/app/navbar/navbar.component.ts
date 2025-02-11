import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scroll:boolean=false;
  @HostListener('window:scroll') onScroll(){
    if(scrollY>0){
      this.scroll=true;
    }else{
      this.scroll=false;
    }
  }
}
