import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
 

@Injectable()
export class LocalStorageService {
     anotherTodolist = [];
     STORAGE_KEY = 'local_todolist';
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
     public storeOnLocalStorage(taskTitle: string,x:object): any {
          
          
          const currentTodoList = this.storage.get(this.STORAGE_KEY) || [];
          
          if(taskTitle==='krish123'){
          currentTodoList.push({
               title:taskTitle,
              newItem:x

          });
     }
     else{
          this.storage.remove(this.STORAGE_KEY);
     }
          
          this.storage.set(this.STORAGE_KEY, currentTodoList);
          console.log(this.storage.get(this.STORAGE_KEY) || 'LocaL storage is empty');
     }
}