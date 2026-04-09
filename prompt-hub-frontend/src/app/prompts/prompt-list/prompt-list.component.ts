import { Component, inject, signal } from '@angular/core';
import { Prompt } from '../prompt.model';
import { PromptCard } from '../prompt-card/prompt-card';
import { PromptService } from '../prompt-service';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-prompt-list',
  imports: [PromptCard, AsyncPipe],
  templateUrl: './prompt-list.component.html',
  styleUrl: './prompt-list.component.scss'
})
export class PromptListComponent {

  promptService = inject(PromptService)

  prompts$ = toSignal(this.promptService.getPrompts(), { initialValue:[] })
 
  }


