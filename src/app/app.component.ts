import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 
  taskList : string[] = [];
  newTask : string = '';

  private _tasksService = inject(TasksService);

  ngOnInit(): void {
    // Obtener las tareas desde el servicio y asignarlas a taskList
    this.taskList = this._tasksService.getTasks();
  }

    // Método para agregar una nueva tarea
  addTask(){
    // Llamar al servicio para agregar la nueva tarea
    this._tasksService.addTask(this.newTask);
    // Limpiar el campo de entrada de nueva tarea
    this.newTask = "";
    // Actualizar la lista de tareas desde el servicio
    this.taskList = this._tasksService.getTasks();
  }

  // Método para eliminar una tarea
  deleteTask(index: number){
    // Llamar al servicio para eliminar la tarea por índice
    this._tasksService.deleteTask(index);
    this.taskList = this._tasksService.getTasks();
  }
}
