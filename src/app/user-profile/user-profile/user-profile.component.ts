import { Component, OnInit } from '@angular/core';
import { UserSkillView } from '../entities/UserSkill';
import {NgbProgressbarConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { SkillChangeComponent } from '../skill-change/skill-change.component';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [NgbProgressbarConfig]
})
export class UserProfileComponent implements OnInit {
  Skills: UserSkillView[]= [];
  AllSkills: UserSkillView[]= [];
  view: number = 2;
  selectedTab = 1;
  constructor(config: NgbProgressbarConfig, private modal:NgbModal) {
    config.max = 1000;
    config.showValue = true;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
   }

  ngOnInit() {
              this.AllSkills.push({
                user_skill_id: 1,
                user_id: 1,
                skill_id: 1,
                skill_name: 'Core/ Java',
                competency_level: 'Beginner',
                competency_level_id:1,
                is_completed: true,
                is_mandatory: true
            },
            {
              user_skill_id: 2,
              user_id: 1,
              skill_id: 2,
              skill_name: '.net',
              competency_level: 'Advanced',
              competency_level_id:2
          }
          ,
            {
              user_skill_id: 2,
              user_id: 1,
              skill_id: 2,
              skill_name: '.net',
              competency_level: 'Advanced',
              competency_level_id:2
          }
          ,
            {
              user_skill_id: 2,
              user_id: 1,
              skill_id: 2,
              skill_name: '.net',
              competency_level: 'Advanced',
              competency_level_id:2
          }
          ,
            {
              user_skill_id: 2,
              user_id: 1,
              skill_id: 2,
              skill_name: '.net',
              competency_level: 'Advanced',
              competency_level_id:2
          }
          ,
            {
              user_skill_id: 2,
              user_id: 1,
              skill_id: 2,
              skill_name: '.net',
              competency_level: 'Advanced',
              competency_level_id:2
          }
          ,
            {
              user_skill_id: 2,
              user_id: 1,
              skill_id: 2,
              skill_name: '.net',
              competency_level: 'Advanced',
              competency_level_id:2
          }
          ,
            {
              user_skill_id: 2,
              user_id: 1,
              skill_id: 2,
              skill_name: '.net',
              competency_level: 'Advanced',
              competency_level_id:2
          }
          ,
            {
              user_skill_id: 2,
              user_id: 1,
              skill_id: 2,
              skill_name: '.net',
              competency_level: 'Advanced',
              competency_level_id:2
          }
          ,
            {
              user_skill_id: 2,
              user_id: 1,
              skill_id: 2,
              skill_name: '.net',
              competency_level: 'Advanced',
              competency_level_id:2
          }
          ,
            {
              user_skill_id: 2,
              user_id: 1,
              skill_id: 2,
              skill_name: '.net',
              competency_level: 'Advanced',
              competency_level_id:2
          });
          this.Skills = this.AllSkills;
  }

  addNewSkill(){
    const mod = this.modal.open(SkillChangeComponent, { size:'lg'});
  }

  tabChange(tab: number){
    this.selectedTab = tab;
    switch(tab){
      case 1: this.Skills = this.AllSkills; break;
      case 2: this.Skills = this.AllSkills.filter(x=> x.is_mandatory); break;
      case 3: this.Skills = this.AllSkills.filter(x=> !x.is_mandatory); break;
      case 4: this.Skills = this.AllSkills.filter(x=> x.is_completed); break;
      case 5: this.Skills = this.AllSkills.filter(x=> !x.is_completed); break;
    }
  }
}
