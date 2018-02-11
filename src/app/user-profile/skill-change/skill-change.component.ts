import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skill-change',
  templateUrl: './skill-change.component.html',
  styleUrls: ['./skill-change.component.css']
})
export class SkillChangeComponent implements OnInit {

  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit() {
    
  }

}
