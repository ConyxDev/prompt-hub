import { Component, computed, inject, input } from '@angular/core'
import { Button } from 'primeng/button'
import { Card } from 'primeng/card'
import { Tag } from 'primeng/tag'
import { Prompt } from '../prompt.model'
import { RouterLink } from "@angular/router";
import { AuthService } from '../../auth/auth-service'

@Component({
  selector: 'app-prompt-card',
  imports: [Button, Card, Tag, RouterLink],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {

  authService = inject(AuthService)
  prompt = input.required<Prompt>()

  canEdit = computed(()=> {
    const currentUser = this.authService.currentUser()
    return currentUser && this.prompt().author.id === currentUser.id
  })
  
  copyToClipboard() {
    void navigator.clipboard.writeText(this.prompt().content)
  }
}
