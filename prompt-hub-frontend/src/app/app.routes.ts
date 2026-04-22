import { Routes } from '@angular/router'
import { PromptListComponent } from './prompts/prompt-list/prompt-list.component'
import { PromptForm } from './prompts/prompt-form/prompt-form'
import { AuthForm } from './auth/auth-form/auth-form'

export const routes: Routes = [
    { path: '', redirectTo: 'prompts', pathMatch: 'full' },
    { path: 'auth', component: AuthForm},
    { path: 'prompts', component: PromptListComponent },
    { path: 'prompts/create', component: PromptForm },
    { path: 'prompts/:promptId/edit', component: PromptForm },

]
