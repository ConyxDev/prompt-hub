import { Component, input } from '@angular/core'
import { Button } from 'primeng/button'
import { Card } from 'primeng/card'
import { Tag } from 'primeng/tag'
import { Prompt } from '../prompt.model'

@Component({
  selector: 'app-prompt-card',
  imports: [Button, Card, Tag],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {

  prompt = input.required<Prompt>()

  copyToClipboard() {
    void navigator.clipboard.writeText(this.prompt().content)
  }
}
