import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css'
})
export class CreateThoughtComponent implements OnInit {

  thoughts = {
    id: '1',
    content: 'Learning Angular',
    authorship: 'Dev',
    model: ''
  }

  constructor() {}

  ngOnInit(): void {

  }

  createThought() {
    alert("Pensamento criado")
  }

  cancel() {
    alert("Pensamento cancelado")
  }

}
