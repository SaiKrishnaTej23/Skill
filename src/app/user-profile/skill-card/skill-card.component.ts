import { Component, OnInit, Input } from '@angular/core';
import { UserSkillView } from '../entities/UserSkill';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {
  @Input() skill: UserSkillView;
  @Input() view: number =1;
  constructor() { }

  ngOnInit() {
  }

}
