import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts = [
    {
      title: 'Mon premier post',
      content: 'Puto carnifex sollemniter et ut Aegypto fas et cum iudiciis et societate per causarum cladium recensere discernente cladium internarum tempus fidem velut internarum Parthica',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxieme post',
      content: 'Puto carnifex sollemniter et ut Aegypto fas et cum iudiciis et societate per causarum cladium recensere discernente cladium internarum tempus fidem velut internarum Parthica',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Mon troisieme post',
      content: 'Puto carnifex sollemniter et ut Aegypto fas et cum iudiciis et societate per causarum cladium recensere discernente cladium internarum tempus fidem velut internarum Parthica',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
