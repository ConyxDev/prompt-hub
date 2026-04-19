import { Component, input } from '@angular/core'
import { Button } from 'primeng/button'
import { Card } from 'primeng/card'
import { Tag } from 'primeng/tag'
import { Prompt } from '../prompt.model'
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-prompt-card',
  imports: [Button, Card, Tag, RouterLink],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {

  prompt = input.required<Prompt>()

  copyToClipboard() {
    void navigator.clipboard.writeText(this.prompt().content)
  }
}
