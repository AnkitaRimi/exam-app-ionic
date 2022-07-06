import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./new/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'next-p',
    loadChildren: () => import('./new/next-p/next-p.module').then( m => m.NextPPageModule)
  },
  {
    path: 'module-p',
    loadChildren: () => import('./new/module-p/module-p.module').then( m => m.ModulePPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./new/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./form/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./form/modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },
  
  {
    path: 'show-page',
    loadChildren: () => import('./form/show-page/show-page.module').then( m => m.ShowPagePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./form/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'post-list',
    loadChildren: () => import('./post/post-list/post-list.module').then( m => m.PostListPageModule)
  },
  {
    path: 'post-details',
    loadChildren: () => import('./post/post-details/post-details.module').then( m => m.PostDetailsPageModule)
  },
  {
    path: 'comment',
    loadChildren: () => import('./post/comment/comment.module').then( m => m.CommentPageModule)
  },
  {
    path: 'examform',
    loadChildren: () => import('./Exam/examform/examform.module').then( m => m.ExamformPageModule)
  },
  {
    path: 'exam-list',
    loadChildren: () => import('./Exam/exam-list/exam-list.module').then( m => m.ExamListPageModule)
  },
  {
    path: 'examdetails',
    loadChildren: () => import('./Exam/examdetails/examdetails.module').then( m => m.ExamdetailsPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./geolocation/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'network',
    loadChildren: () => import('./networkCheck/network/network.module').then( m => m.NetworkPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'xyz',
    loadChildren: () => import('./new1/xyz/xyz.module').then( m => m.XyzPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
