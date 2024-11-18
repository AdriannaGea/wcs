import { Component } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { Cupcake } from '../../models/cupcake.model';
import { ApiService } from '../../shared/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, CommonModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes
  cupcakes: Cupcake[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCupcakes().subscribe((cupcakes) => {
      this.cupcakes = cupcakes;
    });
  }
  // Step 3: get all accessories
}
