import { Routes } from '@angular/router'
import { PromptListComponent } from './prompts/prompt-list/prompt-list.component'
import { PromptForm } from './prompts/prompt-form/prompt-form'

export const routes: Routes = [
    { path: '', redirectTo: 'prompts', pathMatch: 'full' },
    { path: 'prompts', component: PromptListComponent },
    { path: 'prompts/create', component: PromptForm },
]
