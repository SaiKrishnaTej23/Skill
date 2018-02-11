import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { SharedModule } from '../shared/shared.module';
import { SkillChangeComponent } from './skill-change/skill-change.component';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule
  ],
  declarations: [UserProfileComponent, SkillCardComponent, SkillChangeComponent],
  entryComponents:[SkillChangeComponent]
})
export class UserProfileModule { }
