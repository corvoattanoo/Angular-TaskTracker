import { Component ,computed, EventEmitter, Input, input, Output} from '@angular/core';

interface User{
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id!: string
  // @Input( {required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;

  @Output() select = new EventEmitter<string>() //string for extra safety

  // avatar = input.required<string>()
  // name = input.required<string>()

  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id)
  }
}
