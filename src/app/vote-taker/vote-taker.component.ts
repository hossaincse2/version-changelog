import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;

  voters = ['hossain', 'Raju', 'Rasel']

  constructor() { }

  ngOnInit() {
  }

  onVoted(aggred: boolean) {
    aggred ? this.agreed++ : this.disagreed++;
  }

}