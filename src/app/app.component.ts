import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Welcome', url: '/welcome', icon: 'heart' },
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Register', url: '/register', icon: 'copy' },
    { title: 'Exam Form', url: '/examform', icon: 'create' },
    { title: 'Exam List', url: '/exam-list', icon: 'list' },
    { title: 'Location', url: '/location', icon: 'locate' },
    { title: 'Network', url: '/network', icon: 'wifi' },
    { title: 'Camera', url: '/camera', icon: 'camera' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
