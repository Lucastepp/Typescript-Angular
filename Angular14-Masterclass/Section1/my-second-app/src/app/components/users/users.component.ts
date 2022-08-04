import { Component } from '@angular/core';
import { canComponentDeactivate } from '../../guards/confirmation/confirmation.guard'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements canComponentDeactivate {



  users: Array<{ id: number, name: string, email: string }> = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com' },
    { id: 2, name: 'Jacob Riglin', email: 'JRiglin@gmail.com' },
    { id: 3, name: 'Tom Jauncey', email: 'Tom23@gmail.com' },
    { id: 4, name: 'Jeremy Jauncey', email: 'Jeremyaa34@gmail.com' },
    { id: 5, name: 'Sam Kodler', email: 'Kodler311@gmail.com' },
    { id: 6, name: 'Jordan Taylor', email: 'Jo-ay@gmail.com' },
    { id: 7, name: 'Peter Smith', email: 'Pet777@gmail.com' },
  ]

  confirm() {
    return confirm('Are you sure you want to navigate away?')
  }

}
