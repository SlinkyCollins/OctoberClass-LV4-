import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ContactComponent } from './contact/contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ParentBehaviorSubjectComponent } from './parent-behavior-subject/parent-behavior-subject.component';
import { ContactParentComponent } from './contact-parent/contact-parent.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NoteReactiveComponent } from './note-reactive/note-reactive.component';
import { NoteDisplayComponent } from './note-display/note-display.component';
import { ProtectedSignupComponent } from './protected-signup/protected-signup.component';
import { ProtectedSigninComponent } from './protected-signin/protected-signin.component';
import { ProtectedDashboardComponent } from './protected-dashboard/protected-dashboard.component';
import {studentGuard} from './guards/student.guard';
import { EventParentComponent } from './event-parent/event-parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';

export const routes: Routes = [
    {path: '', component: LandingpageComponent},
    {path: 'home', redirectTo: '', pathMatch: 'full'},
    {path: 'about', component: AboutpageComponent},
    {path: 'angularMat', component: AngularMaterialComponent},
    {path: 'dashboard', children: [
        {path: '', component: DashboardComponent},
        {path: 'profile', children: [
            {path: '', component: ProfileComponent},
            {path: 'updateProfile', component: UpdateProfileComponent}
        ]}
    ]},
    {path: 'contact', children: [
        {path: '', component: ContactComponent},
        {path: 'view/:index', component: ViewcontactComponent},
        {path: 'edit/:index', component: EditContactComponent},
    ]},
    {path: 'noteApp', children: [
        {path: '', component: NoteReactiveComponent},
        {path: ':id', component: NoteDisplayComponent}
    ]},
  
    {path: 'pipe', component: PipeComponent},
    {path: 'userSignIn', component: ProtectedSigninComponent},
    {path: 'userDash', component: ProtectedDashboardComponent, canActivate: [studentGuard]},
    {path: 'userSignup', component: ProtectedSignupComponent},
    {path: 'template', component: TemplateDrivenFormComponent},
    {path: 'reactive', component: ReactiveFormComponent},
    {path: 'parent-contact', component: ContactParentComponent},
    {path: 'parentsub', component: ParentBehaviorSubjectComponent},
    {path: 'eventP', component: EventParentComponent},

    {path: '**', component: ErrorPageComponent}
];
