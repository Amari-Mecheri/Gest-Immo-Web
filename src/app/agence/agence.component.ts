import { Component, OnInit } from '@angular/core';
import { AgenceService } from './agence.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
  message: string | undefined;

  constructor(private agenceService: AgenceService){}

  ngOnInit(): void {
    this.agenceService.getCollaborators().subscribe({
      next: (response: any) => this.message = response.value.message,
      error: error=>  console.log(error)
    })
  }

}
