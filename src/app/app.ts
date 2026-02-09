import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { UserInput } from "./user-input/user-input";
import { InvenstmentResult } from "./invenstment-result/invenstment-result";

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvenstmentResult],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Investment');

}
