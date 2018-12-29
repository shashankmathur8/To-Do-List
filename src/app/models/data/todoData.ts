import {Todo} from '../Todo';
export const TODODATA: Todo[] = [
    {   
      Todo: 'Lunch with Lily',
      Notes: 'sea food',
      Due: new Date("2018-12-05"),
      Done: false
    }, {
      Todo: 'Visit N. Hirano',
      Notes: 'confirm the meeting ahead of time',
      Due: new Date(new Date().setDate(new Date().getDate() + 5)),
      Done: false
    }, {
      Todo: 'Do the groceries',
      Notes: '',
      Due: new Date(new Date().setDate(new Date().getDate() - 1)),
      Done: true
    }
   ];