import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // Clave usada para almacenar y recuperar tareas desde localStorage
  private localStorageKey = 'taskList';

  // Método privado que verifica si localStorage está disponible
  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }


  // Método para obtener las tareas desde localStorage
  getTasks():string[]{
    if (this.isLocalStorageAvailable()) {
 // Si localStorage está disponible, obtener y parsear la lista de tareas
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  } else {
 // Si localStorage no está disponible, devolver una lista vacía
    return [];
  }
}

 
// Método para agregar una nueva tarea a la lista y guardarla en localStorage
  addTask(task:string){
    const tasks = this.getTasks(); // Obtener las tareas actuales
    tasks.push(task); // Agregar la nueva tarea
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks)) // Guardar la lista actualizada en localStorage
  }

  // Método para eliminar una tarea de la lista por su índice y actualizar localStorage
  deleteTask(index: number) {
    const tareas = this.getTasks();
    tareas.splice(index, 1); // Eliminar la tarea en el índice especificado
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }
}
