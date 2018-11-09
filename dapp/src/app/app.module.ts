import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServiceService} from './service.service';
// import { AuthGuard } from './auth.guard';
import {HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ArulComponent } from './arul/arul.component';
import {RouterModule,Routes} from '@angular/router';
import { MeanstackComponent } from './meanstack/meanstack.component';
import { AdminComponent } from './admin/admin.component';
import { AdmincontentComponent } from './admincontent/admincontent.component';
import { ProfileComponent } from './profile/profile.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { QuestionComponent } from './question/question.component';
import { TestComponent } from './test/test.component';
import { SetComponent } from './set/set.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { UserComponent } from './user/user.component';


const routes:Routes=[

  {path:'admincontent',component:AdmincontentComponent,pathMatch: 'full'},

{path:'arul',component:ArulComponent},{
  path:'meanstack',component:MeanstackComponent
},{
  path:'admin',component:AdminComponent
}
,
{
  path:'profile',component:ProfileComponent
},{
  path:'userdetails',component:UserdetailsComponent
},
{
  path:'test',component:TestComponent
},
{
  path:'set',component:SetComponent
},{
  path:'update',component:UpdateComponent
},{
  path:'delete',component:DeleteComponent
}
,  { path: '',
redirectTo: 'arul',
pathMatch: 'full'
},
];


@NgModule({
  declarations: [
    AppComponent,
    ArulComponent,
    MeanstackComponent,
    AdminComponent,
    AdmincontentComponent,
    ProfileComponent,
    UserdetailsComponent,
    QuestionComponent,
    TestComponent,
    SetComponent,
    UpdateComponent,
    DeleteComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
