import { Component, computed, inject, input, linkedSignal } from '@angular/core'
import { Button } from 'primeng/button'
import { Card } from 'primeng/card'
import { Tag } from 'primeng/tag'
import { Prompt } from '../prompt.model'
import { RouterLink } from "@angular/router";
import { AuthService } from '../../auth/auth-service'
import { PromptService } from '../prompt-service'

@Component({
  selector: 'app-prompt-card',
  imports: [Button, Card, Tag, RouterLink],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {
  promptService = inject(PromptService)
  authService = inject(AuthService)
  prompt = input.required<Prompt>()
  score = linkedSignal(() => this.prompt().score)
  userVote = linkedSignal(() => this.prompt().userVote)

  canEdit = computed(()=> {
    const currentUser = this.authService.currentUser()
    return currentUser && this.prompt().author.id === currentUser.id
  })
  
  copyToClipboard() {
    void navigator.clipboard.writeText(this.prompt().content)
  }

  upvote() {
    this.promptService.upvotePrompt(this.prompt().id).subscribe(updatePrompt => {
      this.score.set(updatePrompt.score)
      this.userVote.set(updatePrompt.userVote)
    })
  }

  downvote() {
    this.promptService.downvotePrompt(this.prompt().id).subscribe(updatePrompt => {
      this.score.set(updatePrompt.score)
      this.userVote.set(updatePrompt.userVote)
    })
  }
}
