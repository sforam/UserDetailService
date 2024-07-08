import { EventEmitter } from "@angular/core"

export class UserService{
    users = [
        {
          "name": "Mark",
          "job": "Tester",
          "gender": "Male",
          "country": "United States",
          "age": 59,
          "avatar": "assets/avatar/mark.jpg"
        },
        {
          "name": "Merry",
          "job": "Lawyer",
          "gender": "Female",
          "country": "Germany",
          "age": 35,
          "avatar": "assets/avatar/merry.jpg"
        },
        {
          "name": "Steve",
          "job": "Doctor",
          "gender": "Male",
          "country": "India",
          "age": 35,
          "avatar": "assets/avatar/steve.jpg"
        },
        {
          "name": "Jane",
          "job": "Engineer",
          "gender": "Female",
          "country": "Canada",
          "age": 42,
          "avatar": "assets/avatar/jane.jpg"
        },
        {
          "name": "Michael",
          "job": "Teacher",
          "gender": "Male",
          "country": "Australia",
          "age": 28,
          "avatar": "assets/avatar/michael.jpg"
        }
      ]
      

      OnShowDetailsClicked=new EventEmitter<{"name": string,"job": string,"gender": string,"country": string,"age": number,"avatar": string}>();
      ShowUserDetails(user:{"name": string,"job": string,"gender": string,"country": string,"age": number,"avatar": string}){
            this.OnShowDetailsClicked.emit(user)
      }
}